import './jobs.css';
import Navbar from '../navbar/navbar';
import JobsCard from './jobscard/jobscards';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Filter from './filter/filter';
import Profile from './profile/profile';


const Jobs =()=>{

    const [alljobs,setjobs] = useState({
        jobsArr : [],
        jobsFetch : false,
        lodder : false,
        search : "",
        empType : [],
        salRange : ""
    })

    const token = Cookies.get("mytoken");


    useEffect(()=>{

       const OnFetchData = async ()=>{

        setjobs({...alljobs,lodder:true})

             const api = `https://apis.ccbp.in/jobs?employment_type=${alljobs.empType}&minimum_package=${alljobs.salRange}&search=${alljobs.search}`;

            const option = {
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api,option);

                const data = await response.json();

                if(response.ok){

                    // console.log( data );
                    setjobs({...alljobs,jobsArr:data.jobs ,jobsFetch:true ,lodder:false})

                }
                else{
                    setjobs({...alljobs,jobsFetch:false ,lodder:false})
                }
                
            } catch (error) {
                console.log( error );
            }

           

       }

       OnFetchData()

       

    },[alljobs.search,alljobs.empType,alljobs.salRange])


    const onSearch = (e)=>{

        if(e.key === "Enter"){
            setjobs({...alljobs,search:e.target.value})
        }
    }

    const OnFilterJobs = (check,id)=>{
        if(check){
            setjobs({...alljobs,empType:[...alljobs.empType,id]})
        }
        else{
            setjobs({...alljobs,empType:alljobs.empType.filter(e=> e !== id)})
        }
    }
    
    const salaryFilter = (id)=>{
        setjobs({...alljobs,salRange:id})
    }


    

    return(

        <div className='main-cont'>

            <Navbar/>

            <div className='job-cont'>

                    <div className='job-left-cont'>

                            
                                <div className='profile-cont'>

                                        <Profile/>

                                </div>
                            
                            <div className='filter-cont'>
                                <Filter jobsFilter={OnFilterJobs} salfilter={salaryFilter}/>
                            </div>

                    </div>
                    <div className='job-right-cont'>
                        <br />

                        <input id='search-bar' onKeyUp={onSearch} type="search" placeholder='Search here' className='form-control w-75 m-auto'/>
                        <ul className='p-3'>
                            { 
                                alljobs.lodder ? <div className="d-flex justify-content-center text-light">
                                                <div className="spinner-border" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                </div>
                                             : alljobs.jobsFetch ? alljobs.jobsArr.length > 0 ? alljobs.jobsArr.map((e)=>(<JobsCard jobs={e} key={e.id}/>)) : 
                                             <div className='d-flex mt-4'>

                                                    <img className='m-auto' src="/Vkl3WkPrrJ.gif" id='errorImg' />

                                             </div> : 
                                             <div className='d-flex mt-4'>

                                                    <img className='m-auto' src="/Vkl3WkPrrJ.gif" id='errorImg' />

                                             </div>
                            }
                        </ul>
                    </div>

            </div>

        </div>
    )
}

export default Jobs;
import './jobDetail.css'
import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import { FaStar,FaLocationDot,FaBriefcase } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import SimilarJobs from './similar-job/similarJob';


const JobDetail = ()=>{

    const [setDetail,getDetail] = useState({
        jobsArr : [],
        similarJobs : [],
        skillstest : false,
        skills : [],
        life : []
    })

    const {id} = useParams();

    const token = Cookies.get("mytoken");

    useEffect(()=>{

        const OnFetchDetail =async ()=>{

            const api = `https://apis.ccbp.in/jobs/${id}`;

            const option = {
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                } 
            }

            try {
                
                const response = await fetch(api,option)
                const data = await response.json();

                if(response.ok){
                    getDetail({...setDetail,jobsArr:data.job_details,skills:data.job_details.skills,skillstest:true,life:data.job_details.life_at_company,similarJobs:data.similar_jobs})
                }

            } catch (error) {
                console.log( error );
            }

        }

        OnFetchDetail();

    },[])



    return (

        <div className='detail-cont'>

            <Navbar/>

            <div className='container mt-4'>
                <div className='bg-light rounded p-3'>
                    <div className='d-flex'>
                        <img id='job-detail-icon' src={setDetail.jobsArr.company_logo_url}/>
                        <div>
                            <h1 id='title-tag'>{setDetail.jobsArr.title}</h1>
                            <FaStar className='text-warning mb-2 mr-2 icon'/>
                            <span className='description'>{setDetail.jobsArr.rating}</span>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <div>
                            <FaLocationDot className='mb-1 icon-tag'/>
                            <span className='mr-3 ml-1 description-location'>{setDetail.jobsArr.location}</span>
                            <FaBriefcase className='mb-1 icon-tag'/>
                            <span className='ml-1 description-location'>{setDetail.jobsArr.employment_type}</span>
                        </div>
                        <h5 className='description'>{setDetail.jobsArr.package_per_annum}</h5>
                    </div>
                    <hr style={{border:"1px solid black"}}/>
                    <div className='d-flex justify-content-between mt-3'>
                        <h5 className='description h5-tag'>Description :</h5>
                        <div>
                            <Link to={setDetail.jobsArr.company_website_url}><span className='mr-1 description'>Know More</span>
                            <LuExternalLink className='mb-1 description'/>
                            </Link>
                        </div>
                    </div>
                    <p className='mt-3 text-justify description'>
                        {setDetail.jobsArr.job_description}
                    </p>

                    <hr id='borderLine'/>

                    <h5 className='h5-tag'>Skills :</h5>

                    <div>{setDetail.skillstest ? <div className='skills-cont bg-dark'>
                       <ul className='skills-list'>
                         {setDetail.skills.map((e,index)=><li className='skills-item' key={index}>
                                
                                    <img id='skills-img' className='mr-2' src={e.image_url} style={{width:"40px"}} />
                                    <span className='text-light mr-4 skills-name'>{e.name}</span>
                            </li>)}
                       </ul>
                    </div> : null }</div>

                    <hr id='borderLine'/>

                    <h5 className='h5-tag'>Life At Company :</h5>

                        {setDetail.skillstest ?  <div className='life-at-company'>
                            <p className='company-life text-justify'>{setDetail.life.description}</p>
                            <img className='company-img' src={setDetail.life.image_url}/>
                        </div> :  null}

                </div>
            </div>

            <br /><br />

            <div className='container'>
                <h4 className='text-white'>Similar Jobs :</h4>

                <div className='similar-job-cont'>
                        <ul className='similar-cont'>
                            {setDetail.similarJobs.map((e)=><SimilarJobs key={e.id} similar={e}/>)}
                        </ul>
                </div>
            </div>

        </div>

    )
}

export default JobDetail;
import { useEffect, useState } from 'react';
import './profile.css';
import Cookies from 'js-cookie';


const Profile=()=>{

    const [getData,setData] = useState({
        lodder : false,
        jobsFetch : false,
        profileArr : []
    })

    const token = Cookies.get("mytoken");

    useEffect(()=>{

        setData({...getData,lodder:true})

        const onFetchData =async ()=>{

            const api = "https://apis.ccbp.in/profile";

            const option = {
                method : "GET",
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }

            try {

                const response = await fetch(api,option);
                const data3 = await response.json();

                if(response.ok){

                    setData({...getData,profileArr:data3.profile_details , lodder:false, jobsFetch:true})
                    
                }
                else{
                    setData({...getData,lodder:false,jobsFetch:false})
                }
                
            } catch (error) {
                console.log(error);
            }


        }

        onFetchData()

        

    },[])


    return(

        <div className='w-100 h100'>

            {
                getData.lodder ? (
                                    <div className="d-flex h-100 justify-content-center align-items-center text-light">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                )
                                    
                                : getData.jobsFetch ? <div className='onfetchprofile-cont'>
                                    <img id="profile-img" src={getData.profileArr.profile_image_url} />
                                <h2 id="profile-name">{getData.profileArr.name}</h2>
                                <h6 id="profile-bio">{getData.profileArr.short_bio}</h6>
                                    </div> : null
            }

        </div>
    )
}

export default Profile;
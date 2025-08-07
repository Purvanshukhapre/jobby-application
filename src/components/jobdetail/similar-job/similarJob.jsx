import { useEffect } from 'react';
import './similarJob.css';
import { FaStar,FaLocationDot,FaBriefcase } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const SimilarJobs = (props)=>{

    const {similar} = props;


    return(

        <div className='bg-light similar-jobs'>

                <Link to={`/jobs/${similar.id}`} className='link-tag'>
                        <li style={{listStyle:"none"}}>
                    <div className='d-flex'>
                        <img id='job-detail-icon' src={similar.company_logo_url}/>
                        <div>
                                    <h1 id='title-tag'>{similar.title}</h1>
                                <FaStar className='text-warning mb-2 mr-2 icon'/>
                            <span className='description'>{similar.rating}</span>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <div>
                            <FaLocationDot className='mb-1 icon-tag'/>
                            <span className='mr-3 ml-1 description-location'>{similar.location}</span>
                            <FaBriefcase className='mb-1 icon-tag'/>
                            <span className='ml-1 description-location'>{similar.employment_type}</span>
                        </div>
                        <h5 className='description'>{similar.package_per_annum}</h5>
                    </div>
                    <hr style={{border:"1px solid black"}}/>
                        <h5 className='description h5-tag'>Description :</h5>
                    <p className='mt-3 text-justify description'>
                        {similar.job_description}
                    </p>
                </li>
                </Link>

        </div>
    )
}
export default SimilarJobs;
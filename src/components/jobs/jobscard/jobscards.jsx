import { Link } from 'react-router-dom';
import './jobscard.css';
import { FaStar,FaLocationDot,FaBriefcase } from "react-icons/fa6";

const JobsCard = (props)=>{

    const {jobs} = props;

    // console.log(jobs);

    return(
        <li className='bg-light list-cont p-3 mb-4' style={{listStyle:"none"}}>
            <Link to={`/jobs/${jobs.id}`} style={{color:"black"}} className='link-tag'>
                    <div className='d-flex'>
                    <div>
                        <img src={jobs.company_logo_url}/>
                    </div>
                    <div>
                        <h4>{jobs.title}</h4>
                        <FaStar className='mr-2 mb-1 text-warning' style={{fontSize:"18px"}}/>
                        <span style={{fontWeight:"500",fontSize:"18px"}}>{jobs.rating}</span>
                    </div>
            </div>

            <div className='d-flex mt-3 justify-content-between'>

                <div className='d-flex'>

                    <FaLocationDot className='mt-1'/>
                    <span className='ml-1 mr-3'>{jobs.location}</span>
                    <FaBriefcase className='mt-1'/>
                    <span className='ml-1'>{jobs.employment_type}</span>

                </div>

                <h6>{jobs.package_per_annum}</h6>

            </div>

            <hr className='bg-dark'/>

            <h5>Descripation</h5>

            <p style={{textAlign:"justify"}}>{jobs.job_description}</p>

            </Link>
        </li>
    )
}

export default JobsCard;
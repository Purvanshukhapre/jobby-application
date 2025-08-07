import './home.css';
import Navbar from '../navbar/navbar';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className='background-cont'>
            
                <div className='overlay-cont'>

                    <Navbar/>

            <br />

                <div className='home-cont'>

                    <div className='text-cont text-light'>
                        <h2 style={{fontSize:"40px", fontWeight:"bolder"}}>Find The Job That Fits Your Life</h2>

                        <br />

                        <h6 style={{fontSize:"24px", fontWeight:"normal"}}>
                            Millions of people are searching for jobs, salary information,
                            company reviews. Find the job that fits your abilities and potential.
                        </h6>
                    </div>

                    <br />

                    <div>
                        <Link to={"/jobs"} className='btn btn-success' style={{fontSize:"20px",borderRadius:"10px"}}>Explore</Link>
                    </div>

                </div>

                </div>

        </div>
    )
}

export default Home;

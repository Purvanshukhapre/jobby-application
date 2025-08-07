import './notfound.css';
import { Link } from 'react-router-dom';

const PageNotFound = ()=>{


    return (


        <div className='pageNotFound-cont'>

            <img id='notfound' src="https://static.vecteezy.com/system/resources/previews/008/255/803/non_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg" width="500px" />

              <Link to={'/'}>
                    <button className='btn btn-dark'>Home</button>
              </Link>
        </div>
    )
}

export default PageNotFound;
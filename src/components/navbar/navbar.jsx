import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


const Navbar = ()=>{

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navigate = useNavigate();

    const logOut = ()=>{

        Cookies.remove("mytoken");
        navigate("/login");

    }


    return (

        <div className='nav-cont bg-light'>
                <nav className='nav-bar'>
                    <div className='logo'>
                        <h1>Jobby</h1>
                    </div>

                    <div className='hamburger' onClick={toggleMenu}>
                        <div className='bar' style={{border : "2px solid black"}}></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>
                    <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                        <Link to={"/"} style={{ textDecoration: "none" }}><li className='text-dark'>Home</li></Link>
                        <Link to={"/jobs"} style={{ textDecoration: "none" }}><li className='text-dark'>Jobs</li></Link>
                        <input onClick={logOut} type="button" className='btn btn-primary' value="Logout" />
                    </ul>
                </nav>
            </div>

    )
}

export default Navbar;
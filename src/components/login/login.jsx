import { useEffect, useState } from 'react';
import './login.css';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';


const Login =()=>{

    const token = Cookies.get("mytoken");

    const navigate = useNavigate();

    useEffect(()=>{

         if(token !== undefined){
        navigate("/")
         }

    },[])

    const [detail,getData] = useState({
        username : "",
        password : "",
        errMsg : ""
    })


    const onFetchApi =async (e)=>{

        e.preventDefault()

        const api = "https://apis.ccbp.in/login";

        const option = {
            method : "POST",
            body: JSON.stringify(detail),
        }

        try {

            const response = await fetch(api,option);
            const data = await response.json();

            if(response.ok){
                console.log( data )
                getData({...detail,errMsg:""})

                Cookies.set("mytoken",data.jwt_token);
                navigate("/")
            }
            else{
                getData({...detail,errMsg:data.error_msg})
            }
            
        } catch (error) {
            console.log( error );
        }

    }

    return(

        <div className='login-cont'>

                <div className='overlay'>

                        <div className='img-cont'>
                            <img id='login-img' src="https://cdn.wallpapersafari.com/2/55/lxJ6iS.jpg"/>
                        </div>

                        <div className='form-cont'>

                               <form onSubmit={onFetchApi}>

                                         <h1 style={{textAlign:"center"}}>Login Form</h1>

                                            <br />
                                            <br />

                                            <h3 style={{textAlign:"center"}}>Wlecome To Jobby Application</h3>

                                            <br />

                                            <label htmlFor="username">Username :</label>
                                            <input type="text" onChange={((e)=>{getData({...detail,username:e.target.value})})} className='form-control' id='username'/>
                                            <br />
                                            <label htmlFor="password">Password :</label>
                                            <input type="password" onChange={((e)=>{getData({...detail,password:e.target.value})})} className='form-control' id='password'/>
                                            <br />
                                            <div className='d-flex justify-content-center'>
                                                <button type='submit' className='btn btn-success'>Login</button>
                                            </div>
                                            <h6 style={{textAlign:"center",marginTop:"5px ",color:"red"}}>{detail.errMsg}</h6>

                               </form>

                        </div>

                </div>

        </div>

    )
}

export default Login;
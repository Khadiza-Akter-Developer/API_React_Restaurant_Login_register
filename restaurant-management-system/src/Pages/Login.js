import React, { useState } from 'react';
import LogPhoto from "./../images/LogPhoto.jpg";
import Layout from '../components/Layout/Layout';
import "bootstrap/dist/css/bootstrap.min.css"
import "./../styles/Login.css"
import axios from 'axios';

function Login () {

    const [username, setUsername] = useState(" ");
    const [password, setPassword] = useState(" ");

    const handleUsernameChange = (value)=>{
        setUsername(value);
    };
    const handlePasswordChange = (value)=>{
        setPassword(value);
    };

    const handleLog =() =>{
        const data = {
         Id: 0,
         Username: username,
         Password: password,
        };
        const url = 'http://localhost:5121/api/Auth/Login';
  
        axios.post(url, data)
      .then((result) => {
        console.log('Successfully Login', result.data);
      })
      .catch((error) => {
        console.error('Login failed:', error);
    
        if (error.response) {
          console.error('Response status:', error.response.status);
          console.error('Response data:', error.response.data);
        } else {
          console.error('No response received');
        }
      });
    }
return(
        <Layout>
     <div className='main-login' style={{backgroundImage: `url(${LogPhoto})`,
     backgroundRepeat:"no-repeat",
     backgroundSize:"contain", 
     height: "80vh", 
     width:"280vh"}}>

            <div className='wrapper d-flex align-item-center justify-content-left w-100 padding:"10px"' >
            
            <div className='login'>
                <h3 className='mb-4'>Please Login to Your Account</h3>
                <form>
                <div class="form-floating mb-3">
                <input type="username" class="form-control" id="floatingInput" placeholder="Username" 
                onChange={(e) =>handleUsernameChange(e.target.value)}
                />
                <label for="floatingInput">Username</label>
            </div>

            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>handlePasswordChange(e.target.value)}/>
                <label for="floatingPassword">Password</label>
            </div>

            <div className="d-grid xs={6}"> 
            <button type="button" class="btn btn-primary" onClick={handleLog}>Log In</button>
            </div>

            <div class="mt-3 justify-content-center xs={12} text-center">
                <a href='/forgot-password'>Forget Password?</a>
            </div>

            <div className='mt-5 justify-content-left xs={12} text-left'>Do not have an account?
                <a href='/Create New'> Create New</a>
            </div>
                </form>
            </div>
            </div>

            </div>
            </Layout>
      
    )
}
export default Login;

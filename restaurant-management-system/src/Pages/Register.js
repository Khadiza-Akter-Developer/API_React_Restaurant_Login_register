import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import './../styles/Register.css';
import LogPhoto from './../images/LogPhoto.jpg';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (value) => {
    setUsername(value);
  };

  const handleFullNameChange = (value) => {
    setFullName(value);
  };

  const handlePhoneNoChange = (value) => {
    setPhoneNo(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleSave = () => {
    const data = {
      Id: 0,
      Username: username,
      FullName: fullName,
      Email: email,
      PhoneNo: phoneNo,
      Password: password,
    };
  
    const url = 'http://localhost:5121/api/Auth/Register';
  
    axios.post(url, data)
  .then((result) => {
    console.log('Successfully registered', result.data);
  })
  .catch((error) => {
    console.error('Registration failed:', error);

    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    } else {
      console.error('No response received');
    }
  });

  };
  return (
    <Layout>
      <div className='main-login' style={{ backgroundImage: `url(${LogPhoto})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', height: '80vh', width: '380vh' }}>
        <div className='wrapper d-flex align-item-center justify-content-left w-100 padding:"1px" '>
          <div className='register'>
            <h2 className='mb-2 '>Register Here</h2>
            <form className='container'>
              <div className="mb-2">
                <label htmlFor="inputName" className="form-label">Username</label>
                <input type="text" className="form-control" id="inputName" placeholder="Enter Username" value={username} onChange={(e) => handleUsernameChange(e.target.value)} />
              </div>

              <div className="mb-2">
                <label htmlFor="inputName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="Enter Full Name" value={fullName} onChange={(e) => handleFullNameChange(e.target.value)} />
              </div>

              <div className="mb-2">
                <label htmlFor="inputPhoneNo" className="form-label">Phone No</label>
                <input type="PhoneNo" className="form-control" id="inputPhoneNo" placeholder="Enter Phone No" value={phoneNo} onChange={(e) => handlePhoneNoChange(e.target.value)} />
              </div>

              <div className="mb-2">
                <label htmlFor="inputEmail" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Enter Email" value={email} onChange={(e) => handleEmailChange(e.target.value)} />
              </div>

              <div className="mb-2">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Enter Password" value={password} onChange={(e) => handlePasswordChange(e.target.value)} />
              </div>

              <div className="d-grid xs={6}">
                <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

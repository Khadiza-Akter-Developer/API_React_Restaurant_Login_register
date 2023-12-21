import React, { useState } from 'react';

const test = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [employeeCode, setEmployeeCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      // You would typically make an API call to your server here to validate the credentials
      // For simplicity, let's assume a mock API endpoint for demonstration purposes
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, employeeCode }),
      });

      if (response.ok) {
        // Handle successful login, e.g., redirect to another page
        console.log('Login successful');
      } else {
        // Handle unsuccessful login
        setErrorMessage('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('Error during login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Employee Code:</label>
        <input type="text" value={employeeCode} onChange={(e) => setEmployeeCode(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default test;
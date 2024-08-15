import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from '../Assets/Logo.png';
import '../styles/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/api/users', {
            username,
            email,
            passwordHash:password,
        });
        console.log('User signed up:', response.data);
        navigate('/login'); // Navigate to the login page after successful registration
    } catch (err) {
        if (err.response) {
            // Server responded with a status other than 2xx
            console.error('Error response:', err.response.data);
            setError(`Failed to sign up: ${err.response.data.message}`);
        } else if (err.request) {
            // Request was made but no response received
            console.error('Error request:', err.request);
            setError('No response from server. Please try again later.');
        } else {
            // Something else happened while setting up the request
            console.error('Error message:', err.message);
            setError('An error occurred. Please try again.');
        }
    }
};


  const navigateToSignIn = () => {
    navigate('/login'); // Adjust this path as needed
  };

  return (
    <div className="register-section" id="register-section">
      <div className="registerpage">
        <div className="Rleft-panel"></div>
        <div className="Rright-panel">
          <img src={Logo} alt="Logo" className="logo"  style={{height:"100px"}}/>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-g">
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-g">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-g">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="Rsubmit-button">Sign Up</button>
            <div className="signin-option">
              <p>Already have an account? <span onClick={navigateToSignIn}>Sign In</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

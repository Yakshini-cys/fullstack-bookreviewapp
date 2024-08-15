// src/components/SignIn.js
import React, { useState } from 'react';
import Logo from '../Assets/Logo.png';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import axios for making HTTP requests

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  //const [error, setError] = useState(null);
  const navigate = useNavigate();

  const checkUser = async (email, password) => {
    const response = await axios.get("http://localhost:8080/api/users");
    
    return response.data.some(
      (user) => user.email === email && user.passwordHash === password
    );
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userExist = await checkUser(email, password);

    if (userExist) {
      alert("Login Successful");
    // Implement your authentication logic here
                                                               
    // On successful login:
     localStorage.setItem('isAuthenticated', 'true');                            // localStorage.clear();
     navigate('/home',{replace:true});
    } else {
      alert("User does not exist");
     // setError("User does not exist");
    }
  };
  

  const navigateToSignUp = () => {
    navigate('/register');
  };

  return (
    <div className="register-section" id="register-section">
      <div className="loginpage">
        <div className="Lleft-panel"></div>
        <div className="Lright-panel">
          <img src={Logo} alt="Logo" className="Llogo" style={{height:"100px"}}/>
          <form className="signin-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="checkbox-g">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember Me
              </label>
            </div>
           {/* {error && <p className="error-message">{error}</p>} */}
            <button type="submit" className="submit-button">Sign In</button>
            <div className="signup-option">
              <p>Don't have an account? <span onClick={navigateToSignUp}>Sign Up</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

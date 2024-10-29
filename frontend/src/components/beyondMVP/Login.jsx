import React, { useState, useEffect } from 'react';
import './Login.scss';
import axios from "axios";
import { useNavigate, Link, Navigate } from "react-router-dom";





const Login = ({ onLogin }) => {

  // const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    // console.log('isUserAuthenticated', isUserAuthenticated)
    e.preventDefault();
    console.log(e.target.elements)
    const {email,password} = e.target.elements;
    onLogin(email.value, password.value)
    .then(() => navigate('/dashboard'))
    .catch((err) => {
      console.log(err)
      setError(err.response.data.message)
    })

    
  };
  return (
    <div className="all">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>          
          <div className="input-box">
            <input
              type="text"
              placeholder="email"
              name="email"           
              required />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"          
              required />
          </div>
          {error && <span>{error}</span>}
          <button type="submit">Login</button>
          <hr style={{ width: '100%', height: '2px', backgroundColor: 'black' }} />
        </form>
        <div className="register-link">
          <p>Don't have an account?</p>
          <Link to="/register">Register</Link>
        </div>
      </div>

    </div>
  )




}

export default Login;
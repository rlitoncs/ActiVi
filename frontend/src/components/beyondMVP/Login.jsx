import React, { useState, useEffect } from 'react';
import './Login.scss';
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";





const Login = ({ onLogin }) => {

  // const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const navigate = useNavigate();


  const handleSubmit = async (e) => {
    // console.log('isUserAuthenticated', isUserAuthenticated)
    e.preventDefault();
    console.log(e.target.elements)
    const {email,password} = e.target.elements;
    onLogin(email.value, password.value);

    // For now, we're hardcoding a simple login check
    //if (email === 'admin' && password === 'password') {
    // onLogin(email);
    //  navigate('/dashboard'); // Redirect to the dashboard after successful login
    // } else {
    //   //setError('Invalid email or password');
    // }
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
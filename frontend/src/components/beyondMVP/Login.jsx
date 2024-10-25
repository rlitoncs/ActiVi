import React from 'react';
import './Login.scss'
import { FaUser, FaLock } from "react-icons/fa";



const Login = () => {
  return (
    <div className="all">
      <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required/>
      
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />         
        </div>        
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default Login;
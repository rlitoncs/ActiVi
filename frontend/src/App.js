import './App.css';
import Login from './components/beyondMVP/Login';
import Logout from './components/beyondMVP/Logout';
import Layout from './components/navigation/Layout';
import Exercises from './components/pages/Exercises';
import Dashboard from './components/pages/Dashboard';
import FAQ from './components/beyondMVP/FAQ';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import axios from 'axios';





const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('token')) || null);

  const handleLogin = (email, password) => {
    // I understand that a logic will come up here that will check the email in the database then if the email is there, it will check the password. If the password is correct, then it will set the email to true. 
    // 1. the users object will be drag to this place.
    //2. make sure the password is harshed.
    //3. The username is to be showed on the dashboard.
    //
    console.log(email, password);
    axios.post('/api/users/login', {email, password})
    .then(response => {
      console.log(response.data);
      localStorage.setItem('token',JSON.stringify(response.data.data))
      setIsLoggedIn(response.data.data);
    });


   
  
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(null);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1> hello from root page </h1>
    },
    {
      path: "/login",
      element: isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin}  />
    },
    {
      path: "/logout",
      element: <Login onLogin={handleLogin} />,
    },  
    {
      element: <Layout  handleLogout = {handleLogout}/>,
      children: [
        {
          path: "/dashboard",
          element: isLoggedIn ? <Dashboard /> : <Navigate to="/login" />
        },
        {
          path: "/exercises",
          element: isLoggedIn ? <Exercises /> : <Navigate to="/login" />,
        },
        {
          path: "/faq",
          element: <FAQ />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
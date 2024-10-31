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
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('token')) || null);

  const handleLogin = (email, password) => {    
    console.log(email, password);
    return axios.post('/api/users/login', {email, password})
    .then(response => response.data.data)
    .then(token => {      
      localStorage.setItem('token',JSON.stringify(token))
      setCurrentUser(token);
    });
  
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setCurrentUser(null);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1> hello from root page </h1>
    },
    {
      path: "/login",
      element: currentUser ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin}  />
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
          element: currentUser? <Dashboard /> : <Navigate to="/login" />
        },
        {
          path: "/exercises",
          element: currentUser ? <Exercises /> : <Navigate to="/login" />,
        },
        {
          path: "/faq",
          element:  currentUser ? <FAQ /> : <Navigate to="/login" />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
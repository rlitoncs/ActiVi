import './App.css';
import HomeLayout from './components/navigation/HomeLayout';
import Home from './components/beyondMVP/Home';
import Login from './components/beyondMVP/Login';
import Layout from './components/navigation/Layout';
import Exercises from './components/pages/Exercises';
import Dashboard from './components/pages/Dashboard';
import About from './components/beyondMVP/About';
import axios from 'axios';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

const App = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('token')) || null);
  const [userID, setUserID] = useState('');

  const handleLogin = (email, password) => {    
    console.log(email, password);
    return axios.post('/api/users/login', {email, password})
    .then(response => response.data.data)
    .then(token => {      
      setUserID(token.id);
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
      element: <HomeLayout/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
      ] 
    }, 
    {
      path: "/login",
      element: currentUser ? <Navigate to="/account/dashboard" /> : <Login onLogin={handleLogin}  />
    },
    {
      path: "/logout",
      element: <Login onLogin={handleLogin} />,
    },  
    {
      element: <Layout  handleLogout = {handleLogout}/>,
      children: [
        {
          path: "/account/dashboard",
          element: currentUser? <Dashboard userID={userID}/> : <Navigate to="/login" />
        },
        {
          path: "/account/exercises",
          element: currentUser ? <Exercises userID={userID}/> : <Navigate to="/login" />,
        },
        {
          path: "/account/about",
          element:  currentUser ? <About userID={userID}/> : <Navigate to="/login" />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
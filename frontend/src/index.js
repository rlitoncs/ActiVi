import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout(nav, footer) will always display for all paths within children array
    children: [
      {
        path: "/",
        element: <h1> Welcome to our Home Page!</h1>
      },
      {
        path: "/login",
        element: <h1> this is the login page </h1>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

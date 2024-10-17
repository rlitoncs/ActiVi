import './App.css';
import Login from './components/beyondMVP/Login';
import Logout from './components/beyondMVP/Logout';
import Layout from './components/navigation/Layout';
import Exercises from './components/pages/Exercises';
import Dashboard from './components/pages/Dashboard';
import FAQ from './components/beyondMVP/FAQ';
import ExerciseModal from './components/pages/ExerciseModal';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1> hello from root page </h1>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  },  
  {
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/exercises",
        element: <Exercises />
      },
      {
         path: "/exercise-modal",
         element: <ExerciseModal />
      },
      {
        path: "/faq",
        element: <FAQ />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
import './App.css';
import HomeLayout from './components/navigation/HomeLayout';
import Home from './components/beyondMVP/Home';
import Login from './components/beyondMVP/Login';
import Logout from './components/beyondMVP/Logout';
import Layout from './components/navigation/Layout';
import Exercises from './components/pages/Exercises';
import Dashboard from './components/pages/Dashboard';
import FAQ from './components/beyondMVP/FAQ';
import About from './components/beyondMVP/About';
import ExerciseModal from './components/pages/ExerciseModal';


import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    element: <Layout />,
    children: [
      {
        path: "/account/dashboard",
        element: <Dashboard />
      },
      {
        path: "/account/exercises",
        element: <Exercises />
      },
      {
         path: "/account/exercise-modal",
         element: <ExerciseModal />
      },
      {
        path: "/account/about",
        element: <About />
      },

    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/logout",
    element: <Logout />
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/> 
  );
}

export default App;
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/*Navbar */}
      <h1> this is our navbar </h1>

      {/* Placeholder for children components */}
      <Outlet/> 

      {/* Footer */}
      <h1> footer </h1>
    </>
  )
}

export default Layout;
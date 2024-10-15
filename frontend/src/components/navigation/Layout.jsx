import '../../styles/navigation/Layout.scss';
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={"main-container"}>
      <Sidebar />
      <Outlet />
    </div>

  )
}
export default Layout;
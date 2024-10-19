import '../../styles/navigation/Layout.scss';
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
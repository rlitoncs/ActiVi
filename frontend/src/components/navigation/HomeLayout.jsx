import '../../styles/navigation/HomeLayout.scss'
import HomeNavigationBar from './HomeNavigationBar';
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="home-container"> 
      <div className="home-nav-bar-container">
        <HomeNavigationBar />
      </div>
      <div className="home-content-area">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
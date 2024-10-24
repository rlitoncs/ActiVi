import '../../styles/navigation/HomeLayout.scss'
import HomeNavigationBar from './HomeNavigationBar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="home-container"> 
      <div className="home-nav-bar-container">
        <HomeNavigationBar />
      </div>
      <div className="home-content-area-container">
        <Outlet />
      </div>
      <div className="footer-content-container">
        <Footer/>
      </div>
    </div>
  );
}

export default HomeLayout;
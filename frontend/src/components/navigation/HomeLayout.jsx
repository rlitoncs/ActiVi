import '../../styles/navigation/HomeLayout.scss'
import HomeNavigationBar from './HomeNavigationBar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';

const HomeLayout = () => {
  useEffect(() => {
    const body = document.body;

    const checkOverflow = () => {
      if (document.documentElement.scrollHeight >= window.innerHeight) {
        body.style.overflowY = 'scroll'; // Show scrollbar when doc is greater or same height as window
      } 
    };

    checkOverflow(); 
    window.addEventListener('resize', checkOverflow);

    //cleanup
    return () => {
      body.style.overflowY = '';
      window.removeEventListener('resize', checkOverflow); 
    };
  }, []);

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
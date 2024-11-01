import '../../styles/navigation/HomeLayout.scss'
import HomeNavigationBar from './HomeNavigationBar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';

const HomeLayout = (props) => {
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
      <div className={props.children ? "home-content-error" :"home-content-area-container"}>
        <Outlet />
        {props.children } {/*for errors*/}
      </div>
      <div className="footer-content-container">
        <Footer/>
      </div>
    </div>
  );
}

export default HomeLayout;
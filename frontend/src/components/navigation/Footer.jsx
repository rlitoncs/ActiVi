import '../../styles/navigation/Footer.scss'
import HomeLogo from './HomeLogo';
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="activi__footer">
      <div className="footer__logo__container">
        <div className="footer__footer__">
          <div className="footer__footer__container">
            <div className="footer__logo">
              <HomeLogo/>
              <div className="footer__logo__title">ActiVi</div>
            </div> 
            <div className="footer__media__links">
              <a href="https://www.instagram.com/"><FaInstagram /></a>
              <a href="https://x.com/?lang=en"><RiTwitterXFill /></a>
              <a href="https://www.youtube.com/"><FaYoutube /></a>
              <a href="https://www.linkedin.com"><FaLinkedin /></a>
              <a href="https://www.tiktok.com"><FaTiktok /></a>
            </div>
            <div className="footer__logo__details" >
              <div>ActiVi Your Limits</div>
              <div>© 2024 ActiVi. All Rights Served.</div>
            </div>
          </div>
        </div>
        <div className="footer__footer__email">
          <div className="footer__products__links">
            <span className="footer-products-title">PRODUCTS</span>
            <hr></hr>
            <ul className="footer-products">
              <li><a href="#">Equipment</a></li>
              <li><a href="#">Apparel</a></li>
              <li><a href="#">Bottles</a></li>
            </ul>
          </div>
          <div className="footer__products__resources">
            <span className="footer-products-title">RESOURCES</span>
            <hr></hr>
            <ul className="footer-resources">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </div>
          <div className="footer__products__service">
            <span className="footer-products-title">SERVICE</span>
            <hr></hr>
            <ul className="footer-service">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">My Account</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer;
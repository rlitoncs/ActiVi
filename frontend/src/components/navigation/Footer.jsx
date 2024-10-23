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
        <div className="footer__footer__email">
          <section className="footer__email">
            <form className="footer__form">
              <label className="footer__form__label"> ActiVi Your Email Here to Get Latest Updates </label>
              <input
                type="email"
                placeholder="Enter email here"
                // value={state name}
                // onChange {set Statename}
              >
              </input>
            </form>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
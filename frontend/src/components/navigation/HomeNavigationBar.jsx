import '../../styles/navigation/HomeNavigationBar.scss';
import HomeLogo from './HomeLogo';
import { Link} from 'react-router-dom';


const HomeNavigationBar = () => {
  return (
    <nav className="home__nav__header__menu">
      <div className="home__nav__header__items">
        <div className="home__nav__container">
          <div className="home__logo__links">
            <div className="home__logo__container">
              <Link to="/"> <HomeLogo /> </Link>
              <span className="home__activi">ActiVi</span>
            </div>
            <ul className="home__nav__links">
              <li>
                <Link to="/"><button className="home__button__item">Home</button></Link>
              </li>
              <li>
                <Link to="/about"><button className="home__about__item">About</button></Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/login" style={{textDecoration:"none", color: "white"}}> 
              <button className="home__gs">Get Started</button>
            </Link>
          </div>
       </div>
      </div>
    </nav>
  )
}

export default HomeNavigationBar;
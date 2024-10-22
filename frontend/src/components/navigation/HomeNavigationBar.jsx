import '../../styles/navigation/HomeNavigationBar.scss';
import HomeLogo from './HomeLogo';

const HomeNavigationBar = () => {
  return (
    <nav className="home__nav__header__menu">
      <div className="home__nav__header__items">
        <div className="home__nav__container">
          <div className="home__logo__links">
            <div className="home__logo__container">
              <HomeLogo /> 
              <span className="home__activi">ActiVi</span>
            </div>
            <ul className="home__nav__links">
              <li><button className="home__button__item">Home</button></li>
              <li><button className="home__about__item">About</button></li>
              <li><button className="home__contact__item">Contact</button></li>

            </ul>
          </div>
          <div>
            <span className="home__gs">Get Started</span>
          </div>
       </div>
      </div>
    </nav>
  )
}

export default HomeNavigationBar;
import '../../styles/pages/About.scss';
import '../../styles/navigation/Layout.scss';
import '../../styles/navigation/Logo.scss';
import '../../styles/navigation/MenuList.scss';
import Sidebar from '../navigation/Sidebar';

const About = () => {
  return (
    <div className='about-container'>
      <Sidebar />

      <div className='about-content'>
        <div className='about-title'>
          <p>nice to meet you</p>
        </div>

        <div className='about-body2'>
          <p>
            We are Ralph, Henry, and Ann of ActiVi. We believe that fitness is a
            journey, not a destination.
          </p>
        </div>

        <div className='about-body3'>
          <p>
            Our app is designed to help people of all fitness levels reach their
            goals, whether you're just getting started or looking to take your
            workouts to the next level.
          </p>
        </div>

        <div className='about-body4'>
          <p>
            ActiVi makes it easy to stay motivated and committed to a healthier
            lifestyle. We’re here to support you every step of the way,
            empowering you to achieve your best self with workouts tailored to
            your goals, whether it's building strength, improving endurance, or
            enhancing overall wellness.
          </p>
        </div>

        <div className='about-body5'>
          <p>
            Join our community and start your fitness journey with us today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

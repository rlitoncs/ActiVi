import '../../styles/pages/About.scss';
import '../../styles/navigation/Layout.scss';
import '../../styles/navigation/Logo.scss';
import '../../styles/navigation/MenuList.scss';
import Sidebar from '../navigation/Sidebar';

const About = () => {
  return (
    <div className='about-container'>
      <div className='image-sidebar'>
        <Sidebar />
      </div>

      <div className='about-content'>
        <div className='text-and-image'>
          <div className='text-content'>
            <h1 className='about-title'>nice to meet you.</h1>
            <br></br>
            <p>
              We are Ralph, Ann, and Henry of ActiVi. We believe that fitness is
              a journey, not a destination.
            </p>
            <p>
              Our app is designed to help people of all fitness levels reach
              their goals, whether you're just getting started or looking to
              take your workouts to the next level. ActiVi makes it easy to stay
              motivated and committed to a healthier lifestyle.
              <p>
                <br></br>
                We’re here to support you every step of the way, empowering you
                to achieve your best self with workouts tailored to your goals,
                whether it's building strength, improving endurance, or
                enhancing overall wellness.
              </p>
            </p>
          </div>
          <img
            className='journey-image'
            src='https://plus.unsplash.com/premium_photo-1689962253303-df6f8fd16069?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhdGh8ZW58MHx8MHx8fDA%3D'
            alt='Fitness Journey'
          />
        </div>

        <br />
        <label htmlFor='goal'>What is your goal?</label>

        <div className='goal-selection'>
          <select id='goal' name='goal'>
            <option value='lose-weight'>Lose Weight</option>
            <option value='build-muscle'>Build Muscle</option>
            <option value='increase-flexibility'>Increase Flexibility</option>
            <option value='improve-endurance'>Improve Endurance</option>
            <option value='stay-active'>Stay Active</option>
          </select>
          <button type='submit' className='submit-button'>
            Submit
          </button>

          <div className='email-signup'>
            <input
              type='email'
              placeholder='Enter your email'
              className='email-input'
            />
            <button type='submit' className='submit-button'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import '../../styles/pages/About.scss';
import useAboutEmail from '../../hooks/useAboutEmail';
import useAboutGoal from '../../hooks/useAboutGoal';

const About = () => {
  const { handleEmailChange, handleSubmit, email, emailSubmitted } =
    useAboutEmail();
  const { handleGoalClick, handleGoalChange, goalMessage, goalSubmitted } =
    useAboutGoal();
  return (
    <div className='about-container'>
      <div className='text-and-image'>
        <div className='text-content'>
          <h1 className='about-title'>nice to meet you.</h1>
          <br />
          <p>We're Ralph, Ann, and Henry of ActiVi. </p>
          <br />
          <h1>We believe that fitness is a journey, not a destination.</h1>
          <br />
          <p>
            Our app is designed to help people of all fitness levels reach their
            goals, whether you're just getting started or looking to take your
            workouts to the next level. ActiVi makes it easy to stay motivated
            and committed to a healthier lifestyle.
          </p>
          <br />

          <p>
            We’re here to support you every step of the way, empowering you to
            achieve your best self with workouts tailored to your goals, whether
            it's building strength, improving endurance, or enhancing overall
            wellness.
          </p>
          <br />
        </div>

        <div class='video'>
          <iframe
            width='500'
            height='500'
            src='https://www.youtube.com/embed/89yP76HLtjc?autoplay=1&playlist=89yP76HLtjc&loop=1&controls=0&modestbranding=1'
            title='YouTube video player'
            frameborder='0'
            allow='autoplay; encrypted-media'
            referrerpolicy='strict-origin-when-cross-origin'
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className='goal-selection'>
        {goalMessage ? (
          <p className='goal-message'>Goal Submitted!⭐️</p>
        ) : (
          <form className='goal-selection' goalSubmitted={handleGoalClick}>
            <select
              id='goal'
              name='goal'
              className='about-select'
              onChange={handleGoalChange}
              required
            >
              <option value='lose-weight'>Lose Weight</option>
              <option value='build-muscle'>Build Muscle</option>
              <option value='increase-flexibility'>Increase Flexibility</option>
              <option value='improve-endurance'>Improve Endurance</option>
              <option value='stay-active'>Stay Active</option>
            </select>

            <button type='submit' className='submit-button'>
              ⬅ Choose your goal
            </button>
          </form>
        )}

        {emailSubmitted ? (
          <p className='thank-you-message'>Thank you for signing up!🎉</p>
        ) : (
          <form className='email-signup' onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleEmailChange}
              className='email-input'
              required
            />
            <button type='submit' className='submit-button'>
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default About;

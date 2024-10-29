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
            </p>
            <br></br>
            <p>
              We’re here to support you every step of the way, empowering you to
              achieve your best self with workouts tailored to your goals,
              whether it's building strength, improving endurance, or enhancing
              overall wellness.
            </p>
          </div>
          <img
            className='journey-image'
            src='https://plus.unsplash.com/premium_photo-1689962253303-df6f8fd16069?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBhdGh8ZW58MHx8MHx8fDA%3D'
            alt='Fitness Journey'
          />
        </div>
        <br />


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
            <button type='submit' className='submit-button'>Sign Up</button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
};

export default About;

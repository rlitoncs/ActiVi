import '../../styles/beyondMVP/Home.scss';
import { useEffect, useRef, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { FaQuestionCircle } from "react-icons/fa";

const Home = () => {

  const [isHover, setIsHover] = useState(
    {
      hover1: false,
      hover2: false,
      hover3: false
    }
  );

  console.log("hover1", isHover.hover1)
  console.log("hover2", isHover.hover2)
  console.log("hover3", isHover.hover3)

  const scrollContainerRef = useRef(null);
  const backBtnRef = useRef(null);
  const nextBtnRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const backBtn = backBtnRef.current;
    const nextBtn = nextBtnRef.current

    const handleBackClick = () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft -= 1500; // Scroll left
    };
  
    const handleNextClick = () => {
      scrollContainer.style.scrollBehavior = "smooth";
      scrollContainer.scrollLeft += 1500; // Scroll right
    };
  
    if (backBtn) {
      backBtn.addEventListener("click", handleBackClick);
    }
  
    if (nextBtn) {
      nextBtn.addEventListener("click", handleNextClick);
    }

    const handleWheel = (event) => {
      event.preventDefault();
      scrollContainer.scrollLeft += event.deltaY;
      scrollContainer.style.scrollBehavior = "auto";
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel);
    }

    // Clean up the event listener
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('wheel', handleWheel);
      }
      if (backBtn) {
        backBtn.removeEventListener("click", handleBackClick);
      }
      if (nextBtn) {
        nextBtn.removeEventListener("click", handleNextClick);
      }
    };
  }, []);


  return (
    <div className="home__container">
      <section className="home__activi__header">
        <div className="home__image__container">
          <picture>
            <img 
              src="https://images.unsplash.com/photo-1618355281342-d7d7569ab0f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              >
            </img>
          </picture>
          <div className="overlay"></div> {/* Overlay div */}
        </div>

        <div className="home__content__container">
          <h1 className='home__content__title'> ActiVi </h1>
          <p className='home__content__text'>
            Stay committed, because the journey to fitness is a lifestyle, not a destination!
          </p>
          <button className="home_learn_more_btn">Learn More</button>
        </div>
      </section>

      <section className="activi__section__1">
        <div className="activi__content__header">
          <h1 className="activi__content__title"> 
            Discover Your <span style={{color:"#EB8C34"}}>Strength</span>
          </h1>
          <p className="activi__content__details">Track your Exercises and Watch your Transformation Unfold</p>
        </div>

        <div className="activi__content">
          <div className="grid__container">
            <div className="grid__item__1">
              <div className="grid__item__1__content__header">
                <h4 className="grid__item__1__title">Today's Workout </h4>
                <p className="grid__item__1__details"> Simplify Your Workout Logs</p>
              </div>
              <div className="grid__workout__1">
                  <div className="grid__workout__title"> Bench Press</div>
                  <div className="grid__workout__muscle"> Chest </div>
                  <div className="grid__workout__sets__reps"> <NumbersOutlinedIcon/>  3 sets x 12 reps </div>
                  <div className="grid__workout__weight"> <FitnessCenterOutlinedIcon/> 130 lbs</div>
                  <div className="grid__workout__metrics">
                    <div className="grid__workout__calories"> <LocalFireDepartmentOutlinedIcon/> 500 calories </div>
                    <div className="grid__workout__duration"> <AccessTimeOutlinedIcon/> 30 minutes</div>
                  </div>
              </div>
              <div className="grid__workout__2">
                  <div className="grid__workout__title"> Barbell Squats </div>
                  <div className="grid__workout__muscle"> Legs </div>
                  <div className="grid__workout__sets__reps"> <NumbersOutlinedIcon/>  3 sets x 12 reps </div>
                  <div className="grid__workout__weight"> <FitnessCenterOutlinedIcon/> 90 lbs</div>
                  <div className="grid__workout__metrics">
                    <div className="grid__workout__calories"> <LocalFireDepartmentOutlinedIcon/> 500 calories </div>
                    <div className="grid__workout__duration"> <AccessTimeOutlinedIcon/> 25 minutes</div>
                  </div>
              </div>
              <div className="grid__workout__3">
                  <div className="grid__workout__title"> Pull-Ups </div>
                  <div className="grid__workout__muscle"> Back </div>
                  <div className="grid__workout__sets__reps"> <NumbersOutlinedIcon/>  3 sets x 10 reps </div>
                  <div className="grid__workout__weight"> <FitnessCenterOutlinedIcon/> 10 lbs</div>
                  <div className="grid__workout__metrics">
                    <div className="grid__workout__calories"> <LocalFireDepartmentOutlinedIcon/> 400 calories </div>
                    <div className="grid__workout__duration"> <AccessTimeOutlinedIcon/> 35 minutes</div>
                  </div>
              </div>
            </div>

            <div className="grid__item__2">
              <div>
                <div className="grid__item__2__content__header">
                  <h4 className="grid__item__2__title">Exercises </h4>
                  <p className="grid__item__2__details"> Choose the Perfect Exercise</p>
                </div>
              </div>
              <div className="grid__exercise__1"
                   style={{ opacity: isHover.hover1 ? 0.8 : "", cursor: isHover ? "pointer" : "", transition: "opacity 0.8s ease"}} 
                   onMouseOver={() => setIsHover({...isHover, hover1: true})} 
                   onMouseOut={() => setIsHover({...isHover, hover1: false})} >
                  <img  
                  src="https://powertec.com/cdn/shop/articles/0bab5a8c-0d38-4f80-a2fb-2fec01b2b6d4-374298.png?v=1704649065"></img>
                  <span className={isHover.hover1 ? "exercise__show" : "exercise__hide"} >Bench Press</span>
              </div>

              <div className="grid__exercise__2"
                   style={{ opacity: isHover.hover2 ? 0.8 : "", cursor: isHover ? "pointer" : "", transition: "opacity  0.8s ease"}} 
                   onMouseOver={() => setIsHover({...isHover, hover2: true})}  
                   onMouseOut={() => setIsHover({...isHover, hover2: false})} >
                  <img 
                   src="https://t4.ftcdn.net/jpg/07/12/11/59/360_F_712115921_RQT6pqyU4voUwzWnqgtly1h2Rx9f8NMO.jpg"></img>
                  <span className={isHover.hover2 ? "exercise__show" : "exercise__hide"}>Barbell Squats</span>
              </div>

              <div className="grid__exercise__3"
                  style={{ opacity: isHover.hover3 ? 0.8 : "", cursor: isHover ? "pointer" : "", transition: "opacity 0.8s ease"}} 
                  onMouseOver={() => setIsHover({...isHover, hover3: true})}
                  onMouseOut={() => setIsHover({...isHover, hover3: false})} >
                  <img 
                  src="https://livefit.com/cdn/shop/articles/pull_up_couple_why_should_you_do_pullups_1024x1024.jpg?v=1604086529"></img>
                  <span className={isHover.hover3 ? "exercise__show" : "exercise__hide"}>Pull-Ups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activi__section__2">
        <div className="section__2__container">
          {/* Calendar */}
          <div className="section__2__calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar />
            </LocalizationProvider>
          </div>

          {/* Calendar  content*/}
          <div className="s2__calendar">
            <div className="s2__header">
              <h1 className="s2__title"> <span>ActiVi</span> Your Day</h1>
              <p className="s2__details">
                Stay on top of your fitness game with our calendar - plan, track, and achieve
                your goals one step at a time. 
              </p>
              <span className="s2__details__2"> Never Miss A Workout Again!</span>
            </div>
            <div className="s2__calendar__content">
              <div className="s2__grid__container">
                <div className="s2__grid__item__1">
                  <DirectionsRunOutlinedIcon/>
                </div>
                <div className="s2__grid__item__2">
                  <FitnessCenterOutlinedIcon/>
                </div>
                <div className="s2__grid__item__3">
                  <FavoriteBorderOutlinedIcon/>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="activi__section__3">
        <div className="section__3__container">

    
          <div className="s3__faq">
            <div className="s3__faq__header">
              <h1 className="s3__title"> Frequently Asked Questions <FaQuestionCircle /> </h1>
            </div>

            <div className="s3__faq__gallery__wrap">
              <div id="backBtn" ref={backBtnRef}> <ArrowBackOutlinedIcon/> </div>
                <div className="s3__faq__gallery" ref={scrollContainerRef}>
                  <div className="s3__faq__gallery__items">
                    <div className="s3__gallery__item__1">
                      <div className="s3__gallery__title">
                        What is ActiVi?
                      </div>
                      <div className="s3__gallery__details">
                        ActiVi is a Fitness Tracker that helps you log your exercises easily. You can pick a date from a calendar and choose the exercises you did that day. It lets you see all your logged workouts in one place, helping you keep track of your fitness journey.
                      </div>
                    </div>
                    <div className="s3__gallery__item__2">
                      <div className="s3__gallery__title">
                          How do I log my exercises?
                      </div>
                      <div className="s3__gallery__details">
                        To log your exercises, simply pick a date from the calendar and choose from a list of exercises or add your own. Your logged workouts will be stored for easy access.
                      </div>
                    </div>
                    <div className="s3__gallery__item__3">
                      <div className="s3__gallery__title">
                        Can I see my past workouts?
                      </div>
                      <div className="s3__gallery__details">
                        Yes! You can view all your logged exercises for any selected date, making it easy to track your progress over time.
                      </div>
                    </div>
                    <div className="s3__gallery__item__4">
                      <div className="s3__gallery__title">
                        Is the app easy to use?
                      </div>
                      <div className="s3__gallery__details">
                        Absolutely! The app features a simple interface that allows you to navigate easily and log your workouts quickly.
                      </div>
                    </div>
                  </div>

                  <div className="s3__faq__gallery__items">
                    <div className="s3__gallery__item__1">
                        <div className="s3__gallery__title">
                          What types of exercises can I log?
                        </div>
                        <div className="s3__gallery__details">
                          You can choose from a variety of exercises in the app, and you also have the option to add your own exercises if they are not listed.
                        </div>
                      </div>
                      <div className="s3__gallery__item__2">
                        <div className="s3__gallery__title">
                          Can I edit or delete my logged exercises?
                        </div>
                        <div className="s3__gallery__details">
                            Yes, you can edit or delete any logged exercises if you need to make changes.
                        </div>
                      </div>
                      <div className="s3__gallery__item__3">
                        <div className="s3__gallery__title">
                          Is the Fitness Tracker app available on mobile devices?
                        </div>
                        <div className="s3__gallery__details">
                          Desktop Version is the only current platform available
                        </div>
                      </div>
                      <div className="s3__gallery__item__4">
                        <div className="s3__gallery__title">
                          Do I need to create an account to use the Fitness Tracker app?
                        </div>
                        <div className="s3__gallery__details">
                          Yes, creating an account is super easy. necessary to log and save your exercises, allowing you to access your workout history across devices.
                        </div>
                      </div>
                  </div>


                  <div className="s3__faq__gallery__items">
                    <div className="s3__gallery__item__1">
                      <div className="s3__gallery__title">
                        Can I set fitness goals in the app?
                      </div>
                      <div className="s3__gallery__details">
                        Currently, the app focuses on logging exercises. However, future updates may include features for setting and tracking fitness goals.
                      </div>
                    </div>
                    <div className="s3__gallery__item__2">
                      <div className="s3__gallery__title">
                        What happens if I forget to log my exercises for a day?
                      </div>
                      <div className="s3__gallery__details">
                        If you forget to log your exercises, you can always go back to the selected date and add them later.
                      </div>
                    </div>
                    <div className="s3__gallery__item__3">
                      <div className="s3__gallery__title">
                        Is there a limit to the number of exercises I can log?
                      </div>
                      <div className="s3__gallery__details">
                        No, you can log as many exercises as you want for each date without any restrictions.
                      </div>
                    </div>
                    <div className="s3__gallery__item__4">
                      <div className="s3__gallery__title">
                        How can I ActiVi my life?
                      </div>
                      <div className="s3__gallery__details">
                        Simply <a href="#"> Get Started Here!</a>
                      </div>
                    </div>
                  </div>
        
              </div>
              <div id="nextBtn" ref={nextBtnRef}> <ArrowForwardOutlinedIcon/> </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
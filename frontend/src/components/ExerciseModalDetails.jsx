import '../styles/ExerciseModalDetails.scss'
import axios from "axios";
import { useCalendar } from '../providers/CalendarProvider';
import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const ExerciseModalDetails = ({userID, selectedExercise, exercise, addWorkout, openModal, closeModal}) => {
  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState({});
  const { selectedDate } = useCalendar(); 
  const ref = useRef(null);

  const date = {
    year: selectedDate["$y"],
    month: Number(selectedDate["$M"] + 1).toString(),
    day: selectedDate["$D"]
  }
  
  const dateQuery = date.year + "-" + date.month + "-" + date.day;

  useEffect(() => {
    axios.get('/api/exercises')
    .then(response => {
      setExercises(response.data)
    })
  }, []);


  useEffect(() => {
    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  //Helper Functions
  
  const handleAddExercise = () => {
    addWorkout({id: exercise.id, exercise_id: exercise.id, exercise_name: exercise.exercise_name, muscle_group: exercise.muscle_group, dateQuery: dateQuery, user_id: userID})
    closeModal();
  }
  
  const handleBackClick = () => {
    const randomNum = Math.round(Math.random());

    if(randomNum){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      },500)
    }

    const previousExercise = exercises.find(exec => exec.id === exercise.id - 1);
    if (previousExercise) {
      openModal(previousExercise);
    } else {
      openModal(exercises.find(exec => exec.id === exercises.length))
    }
  }
  
  const handleNextClick = () => {
    const randomNum = Math.round(Math.random());

    if(randomNum){
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      },500)
    }
    
    const nextExercise = exercises.find(exec => exec.id === exercise.id + 1);
    if (nextExercise) {
      openModal(nextExercise);
    } else {
      openModal(exercises.find(exec => exec.id === 1))
    }
  }
  
  const handleClickOutside = (event) => {
    if(ref.current && !ref.current.contains(event.target)){
      closeModal();
    }
  }

  return (
    <div className="exercise-details-modal" ref={ref}>

      <div className="exercise-details-modal-close" onClick={closeModal}>
        <CloseIcon />
      </div>

      <div className="exercise-title-modal">
        {selectedExercise.exercise_name}
        <button className="exercise_btn_add" onClick={handleAddExercise} >
          <FontAwesomeIcon icon={faCirclePlus} className="plus-icon" />
        </button>
      </div>
      
      <div className="workout-list-muscle-group" >{selectedExercise.muscle_group}</div>

      <div className="workout-tutorial-video">

      <div className="exercise-video">
        {selectedExercise.video_url && !loading? (
          <>
            <div id="backBtn"> <ArrowBackOutlinedIcon onClick={handleBackClick}/> </div>
            <video controls width="1280" height="720" autoPlay muted>
                <source src={`/${selectedExercise.video_url}`} type="video/mp4" />
              </video>
            <div id="nextBtn"> <ArrowForwardOutlinedIcon onClick={handleNextClick}/> </div>
          </>
          ) : (
              
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center", color: "white", width: "1280px", height:"720px"}}>
              <CircularProgress style={{color:"orange"}}/>
            </div>
          )}
      </div>


      <p className="workout-disclaimer">The videos presented on this platform are intended solely for educational and informational purposes. We do not claim ownership of any copyrighted material included in these videos. All rights to the original content belong to their respective owners </p>
      </div>

      <div className="workout-title-description" > Description </div>
      <p className="workout-details">{selectedExercise.description}</p>

      <div className="workout-title-equipment" > Equipment </div>
      <p className="workout-details">{selectedExercise.equipment}</p>
    </div>

  )
}

export default ExerciseModalDetails
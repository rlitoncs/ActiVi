import '../styles/ExerciseModalDetails.scss'
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';

const ExerciseModalDetails = ({selectedExercise, exercise, addWorkout, closeModal}) => {
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if(ref.current && !ref.current.contains(event.target)){
      closeModal();
    }
  }

  const handleAddExercise = () => {
    addWorkout({exercise_id: exercise.id, exercise_name: exercise.alt, muscle_group: exercise.musclegroup, dateQuery: exercise.dateQuery})
    closeModal();
  }

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, []);

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
      {selectedExercise.video_url ? (
          <video controls width="1280" height="720" autoPlay muted>
            <source src={`/${selectedExercise.video_url}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p> // Fallback message while loading
        )}
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
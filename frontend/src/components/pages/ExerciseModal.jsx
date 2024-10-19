import { useState, useEffect } from 'react';
import Exercises from './Exercises';
import WorkoutList from '../WorkoutList';
import useExerciseModal from '../../hooks/useExerciseModal';
import Modal from '../../styles/pages/Modal.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/Dashboard.scss';

const ExerciseModal = ({
  isModalOpen,
  selectedExercise,
  closeModal,
}) => {
  // if (!isModalOpen || !selectedExercise) return null; // Return null if modal is not open or no exercise is selected

  return (
    <div className='exercise-modal-container'>
      <button className='exercise-modal_close-button'onClick={closeModal}>Close</button>

      <div className='exercise-modal_exercises'>
        <h1>Bench Press</h1>
      </div>

      <div className='exercise-modal_muscle_group'>
        <div>
          # Chest
        </div>
      </div>

      <br></br>

      <div className='exercise-modal_video_url'>
        <div>Tutorial</div>
        <span></span>
      </div>

      <br></br>

      <div className='exercise-modal_exercises'>
        <div classname='exercise-modal_description'></div>
        <div>Description</div>
        <p>{}</p>
        <br></br>
        <div>Equipment</div>
        <p>{}</p>
      </div>

    </div>
  );
};

export default ExerciseModal;

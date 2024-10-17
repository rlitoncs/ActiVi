import { useState, useEffect } from 'react';
import Exercises from './Exercises';
import WorkoutList from '../WorkoutList';
import useExerciseModal from '../../hooks/useExerciseModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/Dashboard.scss';

const ExerciseModal = ({
  isModalOpen,
  selectedExercise,
  openModal,
  closeModal,
}) => {
  if (!isModalOpen || !selectedExercise) return null; // Return null if modal is not open or no exercise is selected

  return (
    <div className='exercise-modal-container'>
      <button className='exercise-modal_close-button' onClick={closeModal}>
        x
      </button>

      <div className='exercise-modal_exercises'>
        <h1>{selectedExercise.name}</h1>
      </div>

      <div className='exercise-modal_muscle_group'>
        <div>
          {selectedExercise.muscleGroup || 'Unknown Muscle Group'}
          </div>
      </div>

      <div className='exercise-modal_video_url'>
        <h1>Tutorial</h1>
        <img
          src={selectedExercise.video_url || '/backend/public/tutorials'}
          alt={`${selectedExercise.exercise_name} Tutorial`}
        />
      </div>

      <div className='exercise-modal_description, exercise-modal_equipment'>
        <h1>Description</h1>
        <p>{selectedExercise.description}</p>
        <h2>Equipment</h2>
        <p>{selectedExercise.equipment}</p>
      </div>
    </div>
  );
};

export default ExerciseModal;

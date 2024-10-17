import { useState, useEffect } from 'react';
import Exercises from './Exercises';
import WorkoutList from '../WorkoutList';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/Dashboard.scss';


const ExerciseModal = () => {
  return (
    <div className='exercise-modal-container'>
      <button className='exercise-modal_close-button'>x</button>

      <div className='exercise-modal_exercises'>
        <h1>Bench Press</h1>
      </div>

      <div className='exercise-modal_muscle_group'>
        <button> Chest </button>
      </div>

      <div className='exercise-modal_photo_url'>
        <h1>Tutorial</h1>
        <img>
        src={Public.tutorials}
        alt=''
        </img>
      </div>

      <div className='exercise-modal_description, exercise-modal_equipment'>
        <h1>Description</h1>
        <h2>Equipment</h2>
      </div>
    </div>
  );
};

export default ExerciseModal;

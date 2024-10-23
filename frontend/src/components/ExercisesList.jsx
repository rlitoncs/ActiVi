import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseListItem from './ExerciseListItem';
import '../styles/ExercisesList.scss';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedMuscle, setSelectedMuscle] = useState('All');

  // Function to handle dropdown change
  const exerciseTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const musclesGroupChange = (event) => {
    setSelectedMuscle(event.target.value);
  }

  useEffect(() => {
    // Fetch data from the backend
    axios.get('/api/exercises')
      .then(response => {
        setExercises(response.data);  // Set the fetched data to the state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filterAll = exercises.filter(exercise => {
    const exerciseType = selectedType === 'Cardio' ? 2 : 1;

    let isType = exercise.exercise_type_id === exerciseType;
    let isMuscle = exercise.muscle_group === selectedMuscle;

    if (selectedType === "All") {
      isType = true;
    }

    if (selectedMuscle === "All") { isMuscle = true; }

    const shouldKeep = isType === true && isMuscle === true;
    return shouldKeep;
  });

  return (
    <div >
      <div className="dropdown">
        <label htmlFor="exercise-type-select" className="dropdown-label">
          Exercise Type
          <span className="dropdown-arrow">&#9662;</span>
        </label>
        <select id="exercise-type-select" onChange={exerciseTypeChange} className="hidden-select">
          <option value="All">All</option>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
        </select>
      </div>
      {/* this is the one we need to adjust to muscle groups */}
      <div className="dropdown">
        <label htmlFor="exercise-type-select" className="dropdown-label">
          Muscles Group
          <span className="dropdown-arrow">&#9662;</span>
        </label>
        <select id="exercise-type-select" onChange={musclesGroupChange} className="hidden-select">
          <option value="All">All</option>
          <option value="Abdominals">Abdominals</option>
          <option value="Biceps">Biceps</option>
          <option value="Calves">Calves</option>
          <option value="Chest">Chest</option>
          <option value="Quadriceps">Quadriceps</option>
          <option value="Shoulders">Shoulders</option>
        </select>
      </div>
      <div className='exercise-list__main'>
        {filterAll.map(exercise => {
          return (<ExerciseListItem
            key={exercise.id}
            id={exercise.id}
            src={exercise.photo_url}
            alt={exercise.exercise_name}
          />
          )
        })}        
      </div>
    </div>
  );
};

export default ExerciseList;



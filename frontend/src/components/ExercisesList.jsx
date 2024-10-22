import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseListItem from './ExerciseListItem';
import '../styles/ExercisesList.scss';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  // Function to handle dropdown change
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  

  useEffect(() => {
    // Fetch data from the backend
    axios.get('/api/exercises')
      .then(response => {
        console.log(response.data);
        setExercises(response.data);  // Set the fetched data to the state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredExercises = selectedType === 'All' 
  ? exercises 
  : exercises.filter(exercise => {
      const typeId = selectedType === 'Cardio' ? 2 : 1; 
      return exercise.exercise_type_id === typeId;
  });

  return (
    <div >
       <div className="dropdown">
        <label htmlFor="exercise-type-select" className="dropdown-label">
          Exercise Type
          <span className="dropdown-arrow">&#9662;</span>
        </label>
        <select id="exercise-type-select" onChange={handleTypeChange} className="hidden-select">
          <option value="All">All</option>
          <option value="Cardio">Cardio</option>
          <option value="Strength">Strength</option>
        </select>
      </div>
      <div className='exercise-list__main'>
      {filteredExercises.map(exercise => {
        return (<ExerciseListItem
          key={exercise.id}
          id={exercise.id}
          src={exercise.photo_url}
          alt={exercise.exercise_name}
        />
        )
      })
      }
      </div>
      
    </div>
  );
};

export default ExerciseList;



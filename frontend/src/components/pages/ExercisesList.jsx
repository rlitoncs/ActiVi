import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseListItem from './ExerciseListItem';
import './ExercisesList.css';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

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
  console.log(exercises.photo_url);
  return (
    <div className='exercise-list__main'>  
        {exercises.map(exercise => {
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
  );
};

export default ExerciseList;


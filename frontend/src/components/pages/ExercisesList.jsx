import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseListItem from './ExerciseListItem';

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
    <div>

      {/*<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>*/}
        {exercises.map(exercise => {
            return (<ExerciseListItem
              key={exercise.id}
              id={exercise.id}
              src={"https://github.com/rlitoncs/ActiVi/blob/seeds/backend/public/images/incline_hammer_curls1.png?raw=true"}
              alt={exercise.exercise_name}
              />
            )
          })
        }
      {/*</div>*/}
    </div>
  );
};

export default ExerciseList;


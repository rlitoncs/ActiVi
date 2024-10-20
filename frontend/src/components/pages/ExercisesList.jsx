import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

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

  return (
    <div>
      <h2>Exercise Images</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {exercises.map(exercise => (
          <img 
            key={exercise.id} 
            src={exercise.photo_url} 
            alt={exercise.exercise_name} 
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseListItem from './ExerciseListItem';
import '../styles/ExercisesList.scss';
import { FaBars, FaSearch } from "react-icons/fa";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedMuscle, setSelectedMuscle] = useState('All');



  const [filteredExercises, setFilteredExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle dropdown change
  const exerciseTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const musclesGroupChange = (event) => {
    setSelectedMuscle(event.target.value);
  }

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // Fetch data from the backend
    axios.get('/api/exercises')
      .then(response => {
        setExercises(response.data);  // Set the fetched data to the state
        setFilteredExercises(response.data);
        console.log(exercises);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(()=> {
    let searchFilter = exercises.filter((exercise) => exercise.exercise_name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(searchFilter,'searchFilter')

     // logic for the Exercise Type and Muscles Group dropdown.
    const realExercises = searchFilter.filter(exercise => {
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
    setFilteredExercises(realExercises);
  }, [searchTerm, selectedMuscle, selectedType ])

  // logic for the Exercise Type and Muscles Group dropdown.
    

  return (
    <div >
      <form>
        <div className="search-container">
          <FaBars className="left-icon" />
          <input
            type="text"
            placeholder="Hinted search text"
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="search-input"
          />
          <FaSearch className="right-icon" />
        </div>
      </form>
      
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
        {filteredExercises.map(exercise => {
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



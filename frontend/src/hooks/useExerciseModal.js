import { useState, useEffect } from 'react';
import axios from "axios";


const useExerciseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [exercise, setExercise] = useState({});

  console.log(selectedExercise);

  useEffect(() => {
    if (isModalOpen)
    {
      axios.get(`/api/exercises/${selectedExercise}`)
      
        .then(response => {
          setSelectedExercise(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        })
    }
    }, [isModalOpen, exercise])

  const openModal = (exercise) => {
    setIsModalOpen(true); // Open the modal
    setSelectedExercise(exercise.id); // Set the clicked exercise as the selected exercise
    setExercise(exercise);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedExercise('');
    
  };

  return {
    isModalOpen, // modal state
    selectedExercise, // selected exercise
    exercise,
    openModal, // function to open the modal
    closeModal, // function to close the modal
  };
};

export default useExerciseModal;

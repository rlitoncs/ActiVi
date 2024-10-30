import { useState, useEffect } from 'react';
import axios from "axios";


const useExerciseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState('');
  const [exercise, setExercise] = useState({});

  useEffect(() => {
    if (isModalOpen)
    {
      axios.get(`/api/exercises/${selectedExercise}`)
      
        .then(response => {
          console.log(response.data);
          setSelectedExercise(response.data[0]);
        })
        .catch(error => {
          console.log(error);
        })
    }
    }, [isModalOpen])

  const openModal = (exercise) => {
    setIsModalOpen(!isModalOpen); // Open the modal
    setSelectedExercise(exercise.id); // Set the clicked exercise as the selected exercise
    setExercise(exercise);
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen); // Close the modal
    
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

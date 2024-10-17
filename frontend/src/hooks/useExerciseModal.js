import { useState, useEffect } from 'react';
import axios from 'axios';

const useExerciseModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const openModal = (exercise) => {
    setSelectedExercise(exercise); // Set the clicked exercise as the selected exercise
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedExercise(null); // Clear the selected exercise
  };

  return {
    isModalOpen, // modal state
    selectedExercise, // selected exercise
    openModal, // function to open the modal
    closeModal, // function to close the modal
  };
};

export default useExerciseModal;

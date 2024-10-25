import  { useState, useEffect } from "react";
import axios from "axios";

const useDelete = () => {
  const [displayModalDelete, setDisplayModalDelete] = useState(false);
  const [workoutID, setWorkoutID] = useState('');
  const [statusDelete, setStatusDelete] = useState({
    error: false,
    loading: false,
    success: false,
  });
  const [submitDelete, setSubmitDelete] = useState(false);
  useEffect(() => {
    if (submitDelete) {
      axios.post(`/api/userWorkouts/delete/${workoutID}`)
        .then(response => {
          console.log(response.data);
          setSubmitDelete(false);
        })
        .catch(error => {
          console.log(error);
        })
    }
    }, [submitDelete])


  // Helper functions
  const deleteWorkout = (workout_id) => {
    setDisplayModalDelete(!displayModalDelete);
    setWorkoutID(workout_id);
  }

  const closeDeleteWorkout = () => {
    setDisplayModalDelete(!displayModalDelete);
  }

  const handleSubmitDelete = (event) => {
    event.preventDefault();

    setStatusDelete(prevStatus => ({ ...prevStatus, loading: true }));

    if (!workoutID){
      setTimeout(() => {
        setStatusDelete(prevStatus => ({ ...prevStatus, loading: false, error: true }));
      }, 2000);
    } else {
      setStatusDelete(prevStatus => ({ ...prevStatus, error: false }));
      setTimeout(() => {
        setStatusDelete(prevStatus => ({ ...prevStatus, loading: false, success: true }));
        setSubmitDelete(true);
        closeDeleteWorkout()
        setStatusDelete(prevStatus => ({ ...prevStatus, error: false, loading: false, success: false }));
      }, 2000)
    }


  }


  return {
    displayModalDelete,
    workoutID,
    statusDelete,
    submitDelete,
    deleteWorkout,
    closeDeleteWorkout,
    handleSubmitDelete
  }
}

export default useDelete;
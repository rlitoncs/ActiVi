import { useState, useEffect } from "react";
import axios from "axios";

const useEdit = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [workout, setWorkout] = useState({});
  const [status, setStatus] = useState({
    error: false,
    loading: false,
    success: false,
  });
  const [submit, setSubmit] = useState(false);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (submit) {
      axios.post(`/api/userWorkouts/${workout.id}`, {formData})
        .then(response => {
          console.log(response.data);
          clearFormData();
          setSubmit(false);
        })
        .catch(error => {
          console.log(error);
        })
    }
    }, [submit])
    
    
  // Helper functions
  const editWorkout = (workout) => {
    setDisplayModal(!displayModal);
    setWorkout(workout);
  }

  const closeEditWorkout = () => {
    setDisplayModal(!displayModal);
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    if (!value){
      const { [name]: _, ...newFormData } = formData;
      setFormData(newFormData);
    }else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: Number(value) }));
    }
  }

  const clearFormData = () => {
    const formKeys = Object.keys(formData);
    for (let key of formKeys){
      delete formData[key]
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, loading: true }));

    const formKeys = Object.keys(formData);

    if (!formKeys.length){
      setTimeout(() => {
        setStatus(prevStatus => ({ ...prevStatus, loading: false, error: true }));
      }, 2000);
    } else {
      setStatus(prevStatus => ({ ...prevStatus, error: false }));
      setTimeout(() => {
        setStatus(prevStatus => ({ ...prevStatus, loading: false, success: true }));

        setTimeout(()=>{
          setStatus(prevStatus => ({ ...prevStatus, error: false, loading: false, success: false }));
          setSubmit(true);
          closeEditWorkout()
        }, 2000)
      }, 2000)
    }

  }

  return {
    displayModal,
    workout,
    status,
    submit,
    editWorkout,
    closeEditWorkout,
    handleChange,
    handleSubmit
  }

}

export default useEdit;
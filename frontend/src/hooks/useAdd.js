import { useState, useEffect } from "react";
import axios from "axios";

const useAdd = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [workout, setWorkout] = useState({}); // { id, dateQuery }
  const [formData, setFormData] = useState({}); // {sets, reps, weight, calories, duration }
  const [userWorkout, setUserWorkout] = useState({});

  const [status, setStatus] = useState({
    error: false,
    loading: false,
    success: false,
  });

  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      console.log(userWorkout);
      axios.post(`/api/userWorkouts`, {userWorkout})
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
  const addWorkout = (workout) => {
    setDisplayModal(!displayModal);
    setWorkout(workout);
  }

  const closeAddWorkout = () => {
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

    if (formKeys.length !== 5){
      setTimeout(() => {
        setStatus(prevStatus => ({ ...prevStatus, loading: false, error: true }));
      }, 2000);
    } else {
      setStatus(prevStatus => ({ ...prevStatus, error: false }));
      setTimeout(() => {
        setStatus(prevStatus => ({ ...prevStatus, loading: false, success: true }));

        setTimeout(()=>{
          setStatus(prevStatus => ({ ...prevStatus, error: false, loading: false, success: false }));
          setUserWorkout(prevUserWorkout => ({...prevUserWorkout, ...workout, ...formData}))
          setSubmit(true);

          closeAddWorkout()
        }, 2000)
      }, 1000)
    }

  }

  return {
    displayModal,
    workout,
    status,
    submit,
    addWorkout,
    closeAddWorkout,
    handleChange,
    handleSubmit
  }

}

export default useAdd;
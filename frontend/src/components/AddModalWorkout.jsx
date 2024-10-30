import '../styles/AddEditModalWorkout.scss';
import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const AddModalWorkout = ({workout, status, closeAddWorkout, handleChange,
  handleSubmit}) => {
    const ref = useRef(null);
  
    const handleClickOutside = (event) => {
      if(ref.current && !ref.current.contains(event.target)){
        closeAddWorkout();
      }
    }
  
    useEffect(() => {
      // Add event listener on mount
      document.addEventListener('mousedown', handleClickOutside);
  
      // Cleanup the event listener on unmount
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
  }, []);


  
  return (
    <div className="edit-details-modal add" ref={ref}>

      <div className="edit-details-modal-close add" onClick={closeAddWorkout}>
        <CloseIcon />
      </div>

      <div className="edit-title-modal add">
        {workout.exercise_name}
      </div>
      
      <div class="workout-list-muscle-group">{workout.muscle_group}</div>

      <div className="edit-form-modal add">
          <form onSubmit={handleSubmit}>
            <h4> Sets / Reps </h4>
            <div className="edit-form-sets-reps add">
              <div className="edit-form-sets add">
                <TextField
                  id="outlined-number"
                  label="Sets"
                  name="sets"
                  type="number"
                  onChange={handleChange}
                  slotProps={{
                    htmlInput: {
                      min: 1, // Set minimum value to 1
                    }
                  }}
                />
              </div> 
              <div className="edit-form-reps add">
                <TextField
                  id="outlined-number"
                  label="Reps"
                  name="reps"
                  type="number"
                  onChange={handleChange}
                  slotProps={{
                    htmlInput: {
                      min: 1, // Set minimum value to 1
                    }
                  }}
                />
              </div>
            </div>

            <h4> Weight </h4>
            <div className="edit-form-weight add"> 
              <TextField
                id="outlined-number"
                label="Weight (lbs)"
                name="weight"
                type="number"
                onChange={handleChange}
                slotProps={{
                  htmlInput: {
                    min: 1, // Set minimum value to 1
                  }
                }}
              />
            </div>

            <h4> Calories </h4>
            <div className="edit-form-calories add"> 
              <TextField
                id="outlined-number"
                label="Calories Burned"
                name="calories_burned"
                type="number"
                onChange={handleChange}
                slotProps={{
                  htmlInput: {
                    min: 1, // Set minimum value to 1
                  }
                }}
              />
            </div>

            <h4> Duration </h4>
            <div className="edit-form-duration add">
              <TextField
                id="outlined-number"
                label="Duration (mins)"
                name="duration"
                type="number"
                onChange={handleChange}
                slotProps={{
                  htmlInput: {
                    min: 1, // Set minimum value to 1
                  }
                }}
              />
            </div>

          <div> 
            <Button className={status.success ? "edit-form-button add success" : "edit-form-button add"} type="submit" >
              {!status.loading && !status.success && "Submit"}
              {status.loading && <CircularProgress style={{ color: "white", width: "20px", height:"20px"}}/> }
              {status.success && (
                <>
                  Added <CheckOutlinedIcon />
                </>
              )}
    
            </Button>
          </div>

          {status.error &&
            <div className="edit-form-error add">
              * All Fields Are Required
            </div>
          }
        </form>
      </div>


    </div>
  )
}

export default AddModalWorkout;
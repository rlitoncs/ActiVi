import '../styles/EditModalWorkout.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const EditModalWorkout = ({workout, status, closeEditWorkout, handleChange,
  handleSubmit}) => {
  
  return (
    <div className="edit-details-modal">

      <div className="edit-details-modal-close" onClick={closeEditWorkout}>
        <CloseIcon />
      </div>
      
      <div className="edit-title-modal">
        {workout.exercise_name}
      </div>

      <div className="edit-form-modal">
          <form onSubmit={handleSubmit}>
            <h4> Sets / Reps </h4>
            <div className="edit-form-sets-reps">
              <div className="edit-form-sets">
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
              <div className="edit-form-reps">
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
            <div className="edit-form-weight"> 
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
            <div className="edit-form-calories"> 
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
            <div className="edit-form-duration">
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
            <Button className="edit-form-button" type="submit" >
              {!status.loading && !status.success && "Submit"}
              {status.loading && <CircularProgress style={{ color: "white", width: "20px", height:"20px"}}/> }
              {status.success && <CheckOutlinedIcon />}
    
            </Button>
          </div>

          {status.error &&
            <div className="edit-form-error">
              * At least one field must be filled 
            </div>
          }
        </form>
      </div>


    </div>
  )
}

export default EditModalWorkout;
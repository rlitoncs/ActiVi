import '../styles/DeleteModalWorkout.scss';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@mui/material/CircularProgress';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const DeleteModalWorkout = ({workoutID, statusDelete, closeDeleteWorkout,
  handleSubmitDelete}) => {
  
  return (
    <div className="delete-details-modal">

      <div className="delete-details-modal-close" onClick={closeDeleteWorkout}>
        <CloseIcon />
      </div>

      
      <div className="delete-form-modal">
        
        <form onSubmit={handleSubmitDelete}>
          <div className="delete-title-modal"> Are you sure you want to delete this workout?</div>
          <div className="delete-form-buttons">
            {!statusDelete.loading && <Button className="btn-cancel" onClick={closeDeleteWorkout}>Cancel</Button> }
            {!statusDelete.loading && <Button className="btn-delete" type="submit">Delete</Button>}
            {statusDelete.loading && <CircularProgress/>}
          </div>
        </form>
      </div>


    </div>
  )
}

export default DeleteModalWorkout;
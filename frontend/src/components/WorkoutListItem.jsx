import '../styles/WorkoutListItem.scss';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const WorkoutListItem = (props) => {

  return (
    <div className="workout-list-item" onClick={() => props.editWorkout(props) }>
      <div className="workout-list-header">
        <div className="workout-list-title">
          {props.exercise_name}
        </div>
        <div className='workout-list-buttons'> 
          <div className='workout-list-edit' onClick={() => props.editWorkout(props) }>
            <EditOutlinedIcon />
          </div> 
          <div className='workout-list-delete'>
            <DeleteOutlineOutlinedIcon />
          </div>
        </div>
      </div>
      <div className='workout-list-details'>
        <div className='workout-list-muscle-group'>
          {props.muscle_group}
        </div>
        <div className="workout-list-sets-reps">
          <NumbersOutlinedIcon/> {props.sets} sets x {props.reps} reps
        </div>
        <div className="workout-list-weight">
          <FitnessCenterOutlinedIcon/> {props.weight} lbs
        </div>
        <div className="workout-list-metrics">
          <div className="workout-list-calories">
            <LocalFireDepartmentOutlinedIcon/> {props.calories_burned} calories
          </div>
          <div className='workout-list-duration'>
            <AccessTimeOutlinedIcon/> {props.duration} minutes
          </div>
        </div>

      </div>
    </div>

  );
}

export default WorkoutListItem;
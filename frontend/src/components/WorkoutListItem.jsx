import '../styles/WorkoutListItem.scss';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import NumbersOutlinedIcon from '@mui/icons-material/NumbersOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';

const WorkoutListItem = ({ duration, calories_burned, is_completed, sets, reps, weight, exercise_name, muscle_group}) => {
  return (
    <div className="workout-list-item">
      <div className="workout-list-title">
        {exercise_name}
      </div>
      <div className='workout-list-details'>
        <div className='workout-list-muscle-group'>
          {muscle_group}
        </div>
        <div className="workout-list-sets-reps">
          <NumbersOutlinedIcon/> {sets} sets x {reps} reps
        </div>
        <div className="workout-list-weight">
          <FitnessCenterOutlinedIcon/> {weight} lbs
        </div>
        <div className="workout-list-metrics">
          <div className="workout-list-calories">
            <LocalFireDepartmentOutlinedIcon/> {calories_burned} calories
          </div>
          <div className='workout-list-duration'>
            <AccessTimeOutlinedIcon/> {duration} minutes
          </div>
        </div>

      </div>
    </div>

  );
}

export default WorkoutListItem;
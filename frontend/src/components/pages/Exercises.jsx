import ExercisesList from '../ExercisesList';
import '../../styles/Exercises.scss';

const Exercises = () => {
  
  return(
    <div className='exercise-main'>     
      <div>
       <h2 className='exec'>Exercises</h2>  
      </div>
      
      <ExercisesList/>         
    </div>
  );
}
export default Exercises;
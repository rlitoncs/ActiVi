import '../../styles/Exercises.scss';
import ExercisesList from '../ExercisesList';
import AddModalWorkout from '../AddModalWorkout';
import useAdd from '../../hooks/useAdd';

const Exercises = () => {

  const { displayModal, workout, status, addWorkout, closeAddWorkout, handleChange,
    handleSubmit } = useAdd();
  
  return(
    <div className='exercise-main'>     
      
      <ExercisesList addWorkout={addWorkout} />
      {displayModal &&
        <AddModalWorkout workout={workout} status={status} closeAddWorkout={closeAddWorkout} handleChange={handleChange} handleSubmit={handleSubmit}/>
      }
    </div>
  );
}
export default Exercises;
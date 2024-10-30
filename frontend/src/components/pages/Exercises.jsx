import '../../styles/Exercises.scss';
import ExercisesList from '../ExercisesList';
import ExerciseModalDetails from '../ExerciseModalDetails';
import AddModalWorkout from '../AddModalWorkout';
import useExerciseModal from '../../hooks/useExerciseModal';
import useAdd from '../../hooks/useAdd';

const Exercises = () => {

  const { displayModal, workout, status, addWorkout, closeAddWorkout, handleChange,
    handleSubmit } = useAdd();

  const { isModalOpen, openModal, closeModal, selectedExercise, exercise } = useExerciseModal();
  
  return(
    <div className='exercise-main'>     
      
      <ExercisesList addWorkout={addWorkout} openModalExercise={openModal} />
      {displayModal &&
        <AddModalWorkout workout={workout} status={status} closeAddWorkout={closeAddWorkout} handleChange={handleChange} handleSubmit={handleSubmit}/>
      }

      {isModalOpen &&
        <ExerciseModalDetails selectedExercise={selectedExercise} exercise={exercise} addWorkout={addWorkout} closeModal={closeModal}/>
      }
    </div>
  );
}
export default Exercises;
import '../../styles/Exercises.scss';
import ExercisesList from '../ExercisesList';
import ExerciseModalDetails from '../ExerciseModalDetails';
import AddModalWorkout from '../AddModalWorkout';
import useExerciseModal from '../../hooks/useExerciseModal';
import useAdd from '../../hooks/useAdd';
import { useEffect } from "react";

const Exercises = ({userID}) => {

  const { displayModal, workout, status, addWorkout, closeAddWorkout, handleChange,
    handleSubmit } = useAdd();

  const { isModalOpen, openModal, closeModal, selectedExercise, exercise } = useExerciseModal();
  
    
  useEffect(() => {
    document.title = "Exercises | ActiVi";
  }, []); 

  return(
    <div className='exercise-main'>     
      
      <ExercisesList userID={userID} addWorkout={addWorkout} openModalExercise={openModal} />
      {displayModal &&
        <AddModalWorkout workout={workout} status={status} closeAddWorkout={closeAddWorkout} handleChange={handleChange} handleSubmit={handleSubmit} openModal={openModal}/>
      }

      {isModalOpen &&
        <ExerciseModalDetails userID={userID} selectedExercise={selectedExercise} exercise={exercise} addWorkout={addWorkout} openModal={openModal} closeModal={closeModal}/>
      }
    </div>
  );
}
export default Exercises;
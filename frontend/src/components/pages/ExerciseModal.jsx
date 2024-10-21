import useExerciseModal from '../../hooks/useExerciseModal';
import Modal from '../../styles/pages/Modal.scss';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/Dashboard.scss';

const ExerciseModal = () => {
  const { isModalOpen, selectedExercise, openModal, closeModal } =
    useExerciseModal();

  const navigate = useNavigate();

  const handleCloseModal = () => {
    closeModal();
    navigate('../Exercises');
  };

  return (
    <div className='exercise-modal-container'>
      <button
        className='exercise-modal_close-button'
        onClick={handleCloseModal}
      >
        Close
      </button>

      <div className='exercise-modal_exercises'>
        <h1>Bench Press </h1> //exercise.exercise_name//
      </div>

      <br></br>

      <div className='exercise-modal_muscle_group'>
        <div># Chest </div> //# exercise.muscle_group//
      </div>

      <br></br>

      <div className='exercise-modal_video_url'>
        <div>Tutorial</div>
        <span></span> //exercise.video_url//
      </div>

      <br></br>

      <div className='exercise-modal_exercises'>
        <div classname='exercise-modal_description'></div>
        <div>Description </div>
        <p></p> //exercise.description//
        <br></br>
        <div>Equipment</div>
        <p></p> //exercise.equipment//
      </div>
    </div>
  );
};

export default ExerciseModal;

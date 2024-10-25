import React from 'react';
import ImageButton from './ImageButton';
import '../styles/ExerciseListItem.scss';
import useExerciseModal from '../hooks/useExerciseModal';


const ExerciseListItem = ({ key, id, src, alt, addWorkout, dateQuery }) => {
  const { isModalOpen, selectedExercise, openModal, closeModal } = useExerciseModal();

  const handleClick = () => {
    console.log(`Clicked on exercise: ${alt}`);
    openModal({ id, src, alt });
  };

  const onAddClick = () => {
    addWorkout({ exercise_id: id, exercise_name: alt, dateQuery });
  }

  return(
    <div className="exercise-list__item">
      <div className='card-content'>
        
      <img 
        className="exercise-list__image"
        id={id}
        src={src}
        alt={alt}        
        onClick={handleClick}      
      />     
      <ImageButton className='add-button' onClick={onAddClick} />
      </div>

      {isModalOpen && selectedExercise && (
        <div className="modal">
          <h3>{selectedExercise.alt}</h3>
          <img src={selectedExercise.src} alt={selectedExercise.alt} />
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};
export default ExerciseListItem;



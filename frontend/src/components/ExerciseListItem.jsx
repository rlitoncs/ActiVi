import React from 'react';
import ImageButton from './ImageButton';
import '../styles/ExerciseListItem.scss';


const ExerciseListItem = ({ key, id, src, alt, addWorkout, dateQuery }) => {

  const handleClick = () => {
    console.log(`Clicked on exercise: ${alt}`);
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
    </div>
  );
};
export default ExerciseListItem;



import React from 'react';
import ImageButton from './ImageButton';
import '../styles/ExerciseListItem.scss';



const ExerciseListItem = (props) => {

  const handleClick = () => {
    alert('Image clicked!'); 
  };

  const onAddClick = () => {
    alert('+ button clicked');
  }

  return(
    <div className="exercise-list__item">
      <div className='card-content'>
        
      <img 
        className="exercise-list__image"
        id={props.id}
        src={props.src}
        alt={props.alt}        
        onClick={handleClick}      
      />     
      <ImageButton className='add-button' onClick={onAddClick} />
      </div>
      
    </div>
  );
};
export default ExerciseListItem;



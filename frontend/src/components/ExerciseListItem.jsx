import React from 'react';
import ImageButton from './ImageButton';
import '../styles/ExerciseListItem.scss';



const ExerciseListItem = (props) => {

  const handleClick = () => {
    alert('Image clicked!'); 
  };

  const onAddClick = () => {
    props.addWorkout({exercise_id: props.id, exercise_name: props.alt, dateQuery: props.dateQuery});
  }

  return(
    <div className="exercise-list__item">
      <div className='card-content'>
        <span className="exercise-list__name">{props.alt}</span>     
        
      <img 
        style={{objectFit: "cover", objectPosition: "top"}}
        className="exercise-list__image"
        id={props.id}
        src={props.src}    
        onClick={handleClick}      
      />
      <ImageButton className='add-button' onClick={onAddClick} />
      </div>
      
    </div>
  );
};
export default ExerciseListItem;



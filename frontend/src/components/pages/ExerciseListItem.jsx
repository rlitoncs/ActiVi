import React from 'react';
import ImageButton from './ImageButton';
import './ExerciseListItem.css';

const sampleExe = {
  "id": 1,
  "exercise_name": "Bench Press",
  "description": "A compound exercise that targets the chest, shoulders, and triceps. The bench press is performed lying on a bench, pushing a barbell or dumbbells upwards from chest level.",
  "equipment": "Barbell, Bench",
  "photo_url": "/images/mock_Image.webp",
  "muscle_group": "Chest, Shoulders, Triceps",
  "exercise_type_id": 2
}

const ExerciseListItem = (props) => {

  const handleClick = () => {
    alert('Image clicked!'); 
  };

  const onAddClick = () => {
    alert('+ button clicked');
  }

  return(
    <div className="exercise-list__item">
      <img 
        className="exercise-list__image"
        id={props.id}
        src={props.src}
        alt={props.alt}
        style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
        onClick={handleClick}      
      />       
      <ImageButton className='add-button' onClick={onAddClick} />   
        
     
    </div>
  );
};

export default ExerciseListItem;



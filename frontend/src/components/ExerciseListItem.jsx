import React from 'react';
import ImageButton from './ImageButton';
import '../styles/ExerciseListItem.scss';
import { useCalendar } from '../providers/CalendarProvider';


const ExerciseListItem = (props) => {

  const { selectedDate } = useCalendar(); 
  const date = {
    year: selectedDate["$y"],
    month: Number(selectedDate["$M"] + 1).toString(),
    day: selectedDate["$D"]
  }

  const dateQuery = date.year + "-" + date.month + "-" + date.day;

  const handleClick = () => {
    props.openModalExercise(props)
  };

  const onAddClick = () => {
    props.addWorkout({id: props.id, exercise_id: props.id, exercise_name: props.exercise_name, muscle_group: props.muscle_group, dateQuery: dateQuery});
  }

  return(
    <div className="exercise-list__item">
      <div className='card-content'>
        <span className="exercise-list__name">{props.exercise_name}</span>     
        
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



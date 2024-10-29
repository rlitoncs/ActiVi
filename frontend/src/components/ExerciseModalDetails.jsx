import '../styles/ExerciseModalDetails.scss'
import CloseIcon from '@mui/icons-material/Close';

const ExerciseModalDetails = ({selectedExercise, closeModal}) => {
  return (
    <div className="exercise-details-modal">

      <div className="exercise-details-modal-close" onClick={closeModal}>
        <CloseIcon />
      </div>

      <div className="exercise-title-modal">
        {selectedExercise.exercise_name}
      </div>
      
      <div className="workout-list-muscle-group">{selectedExercise.muscle_group}</div>
      <div className="workout-tutorial-video">
        <iframe 
          src={selectedExercise.video_url}
          allowfullscreen>
        </iframe>
      </div>

      <div className="workout-title-description" > Description </div>
      <p className="workout-details">{selectedExercise.description}</p>

      <div className="workout-title-equipment" > Equipment </div>
      <p className="workout-details">{selectedExercise.equipment}</p>
    </div>

  )
}

export default ExerciseModalDetails
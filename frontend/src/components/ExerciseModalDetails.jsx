import '../styles/ExerciseModalDetails.scss'
import CloseIcon from '@mui/icons-material/Close';

const ExerciseModalDetails = ({selectedExercise, closeModal}) => {
  console.log(selectedExercise);
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
      {selectedExercise.video_url ? (
          <video controls width="1280" height="720" autoPlay muted>
            <source src={`/${selectedExercise.video_url}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p> // Fallback message while loading
        )}
      </div>

      <div className="workout-title-description" > Description </div>
      <p className="workout-details">{selectedExercise.description}</p>

      <div className="workout-title-equipment" > Equipment </div>
      <p className="workout-details">{selectedExercise.equipment}</p>
    </div>

  )
}

export default ExerciseModalDetails
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
      
      <div className="workout-list-muscle-group" >{selectedExercise.muscle_group}</div>
      <div className="workout-tutorial-video">
      {selectedExercise.video_url ? (
          <video controls width="1280" height="720" autoPlay muted>
            <source src={`/${selectedExercise.video_url}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <p>Loading video...</p> // Fallback message while loading
        )}
      <p className="workout-disclaimer">The videos presented on this platform are intended solely for educational and informational purposes. We do not claim ownership of any copyrighted material included in these videos. All rights to the original content belong to their respective owners </p>
      </div>

      <div className="workout-title-description" > Description </div>
      <p className="workout-details">{selectedExercise.description}</p>

      <div className="workout-title-equipment" > Equipment </div>
      <p className="workout-details">{selectedExercise.equipment}</p>
    </div>

  )
}

export default ExerciseModalDetails
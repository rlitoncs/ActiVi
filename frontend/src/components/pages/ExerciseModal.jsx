import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/Dashboard.scss'
import Exercises from './Exercises';

const ExerciseModal = () => {
  
  return(
  <div>

    <div className='exercise-modal'>
     
    </div>

    <div className='exercise-modal_close-button'>
     <h1></h1>
    </div>

    <div className='exercise-modal_exercises'>
     <h1>Bench Press</h1>
    </div>

    <div className='exercise-modal_muscle_group'>
     <button> Chest </button>
    </div>


    <div className='exercise-modal_photo_url'>
     <h1>Tutorial</h1>
    </div>
  
    <div className='exercise-modal_description, exercise-modal_equipment'>
     <h1>Description</h1>
     <h2>Equipment</h2>
    </div>

  </div>
  )
}

export default ExerciseModal

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/Dashboard.scss'
import Calendar from '../Calendar';
import WorkoutList from '../WorkoutList';
import useEdit from '../../hooks/useEdit';
import useDelete from '../../hooks/useDelete';
import EditModalWorkout from '../EditModalWorkout'
import DeleteModalWorkout from '../DeleteModalWorkout';

const Dashboard = () => {
  const { displayModal, workout, status, submit, editWorkout, closeEditWorkout, handleChange,
    handleSubmit } = useEdit();
  
  const { displayModalDelete, workoutID, statusDelete, submitDelete, deleteWorkout, closeDeleteWorkout, handleSubmitDelete } = useDelete();
   

  return(
    <div className='dashboard-container'>
      <div className="home__image__container">
        
      </div>
      <div className='section-header-calendar'>
        <h1> Welcome Back, Name</h1>
        <Calendar />
      </div>

      <div className='section-workouts-title'>
        <h1>Workouts</h1>
        <hr></hr>
      </div>

      <div className='section-workouts-list'>
        <WorkoutList editWorkout={editWorkout} deleteWorkout={deleteWorkout} submit={submit} submitDelete={submitDelete}/>
        {displayModal &&
          <EditModalWorkout workout={workout} status={status} closeEditWorkout={closeEditWorkout} handleChange={handleChange} handleSubmit={handleSubmit}/>
        }
        {displayModalDelete &&
          <DeleteModalWorkout  workoutID={workoutID} statusDelete={statusDelete} closeDeleteWorkout={closeDeleteWorkout} handleSubmitDelete={handleSubmitDelete}/>
        }

      </div>
    </div>
  )
}

export default Dashboard;
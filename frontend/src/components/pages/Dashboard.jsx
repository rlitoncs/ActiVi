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
      <div className="dashboard__image__container">
        <img
          className="dashboard__hero"
          src={"https://images.unsplash.com/photo-1676312834443-06c9ec87c8f7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        >
        </img>

        <div className="user-avatar-container">
          <img
          src={"https://t3.ftcdn.net/jpg/04/97/66/28/360_F_497662812_7rGW6PMBJR9AbrKcGgN5S1luXYTjH92i.jpg"}
          >
          </img>

          <div className="user-details">
            <div className="user-details-height">
              <span className="user-height">Height</span>
              <span className="user-detail">190cm</span>
            </div >
            <div className="user-details-age">
              <span className="user-age">Age</span>
              <span className="user-detail">28</span>
            </div>
            <div className="user-details-weight">
              <span className="user-weight">Weight</span>
              <span className="user-detail">150 lbs</span>
            </div>
          </div>

        </div>
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
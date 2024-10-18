import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/pages/Dashboard.scss'
import CalendarProvider from '../../providers/CalendarProvider';
import Calendar from '../Calendar';
import WorkoutList from '../WorkoutList';
import useEdit from '../../hooks/useEdit';
import EditModalWorkout from '../EditModalWorkout'

const Dashboard = () => {
  const { displayModal, workout, status, submit, editWorkout, closeEditWorkout, handleChange,
    handleSubmit } = useEdit();

  return(
    <div className='dashboard-container'>
      <CalendarProvider>
      <div className='section-header-calendar'>
        <h1> Welcome Back, Name</h1>
          <Calendar />
      </div>

      <div className='section-workouts-title'>
        <h1>Workouts</h1>
        <hr></hr>
      </div>

      <div className='section-workouts-list'>
        <WorkoutList editWorkout={editWorkout} submit={submit}/>
        {displayModal &&
          <EditModalWorkout workout={workout} status={status} closeEditWorkout={closeEditWorkout} handleChange={handleChange} handleSubmit={handleSubmit}/>
        }
      </div>
      </CalendarProvider>
    </div>
  )
}

export default Dashboard;
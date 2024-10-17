import 'bootstrap/dist/css/bootstrap.min.css';
import CalendarProvider from '../../providers/CalendarProvider';
import '../../styles/pages/Dashboard.scss'
import Calendar from '../Calendar';
import WorkoutList from '../WorkoutList';

const Dashboard = () => {
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
          <WorkoutList />
      </div>
      </CalendarProvider>
    </div>
  )
}

export default Dashboard;
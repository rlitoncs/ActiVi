import '../styles/TotalWorkouts.scss'
const TotalWorkouts = ({count}) => {
  return(
    <div className="total-workouts-container">
      {
        count > 0 ? 
          (
          <>
            <div className="total-workouts-title">
              Total Workouts
            </div>
            <div className="total-workouts-count">
              {count}
            </div> 
          </>
          ) :
          <div className="no-workouts">
            No Scheduled Workouts Today
          </div>

      }
    </div>
  )
}

export default TotalWorkouts;
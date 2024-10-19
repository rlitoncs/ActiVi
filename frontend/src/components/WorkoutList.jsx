import axios from "axios";
import WorkoutListItem from "./WorkoutListItem";
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react"
import { useCalendar } from "../providers/CalendarProvider";
import TotalWorkouts from "./TotalWorkouts";


const WorkoutList = ({editWorkout, deleteWorkout, submit, submitDelete}) => {
  const { selectedDate } = useCalendar(); 
  const [workouts, setWorkouts] = useState({ userWorkouts: [], totalWorkouts: 0 });

  const date = {
    year: selectedDate["$y"],
    month: Number(selectedDate["$M"] + 1).toString(),
    day: selectedDate["$D"]
  }

  const dateQuery = date.year + "-" + date.month + "-" + date.day;

  useEffect(() => {
    axios.get(`/api/userWorkouts/${dateQuery}`)
      .then(response => {
        setWorkouts(response.data); // data comes back as { userWorkouts[{}], totalWorkouts[{}] }
      })
      .catch(error => {
        console.log(error);
      })

  }, [selectedDate, submit, submitDelete])


  return (
      <ul className="workouts-list">
        <Row>
          {
          workouts.userWorkouts.length > 0 &&
          workouts.userWorkouts.map(workout => {
            return (
              <Col xs={12} md={4}>
                <WorkoutListItem 
                    key={workout.id}
                    id={workout.id}
                    duration={workout.duration}
                    calories_burned={workout.calories_burned}
                    is_completed={workout.is_completed}
                    sets={workout.sets}
                    reps={workout.reps}
                    weight={workout.weight}
                    exercise_name={workout.exercise_name}
                    muscle_group={workout.muscle_group}
                    editWorkout={editWorkout}
                    deleteWorkout={deleteWorkout}
                />
              </Col>
            )
          })}
        </Row>
        <Row>
          <TotalWorkouts count={workouts.totalWorkouts}/>
        </Row>
      </ul>
  )
}

export default WorkoutList;
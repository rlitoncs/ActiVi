import axios from "axios";
import WorkoutListItem from "./WorkoutListItem";
import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react"
import { useCalendar } from "../providers/CalendarProvider";


const WorkoutList = () => {
  const { selectedDate } = useCalendar(); 
  const [workouts, setWorkouts] = useState([]);

  const date = {
    year: selectedDate["$y"],
    month: Number(selectedDate["$M"] + 1).toString(),
    day: selectedDate["$D"]
  }

  const dateQuery = date.year + "-" + date.month + "-" + date.day;

  useEffect(() => {
    axios.get(`/api/userWorkouts/${dateQuery}`)
      .then(response => {
        console.log(response.data);
        setWorkouts(response.data);
      })
      .catch(error => {
        console.log(error);
      })

  }, [selectedDate])


  return (
    <ul className="workouts-list">
      <Row>
        {workouts.map(workout => {
          return (
          <Col xs={12} md={4}>
            <WorkoutListItem 
                key={workout.id}
                duration={workout.duration}
                calories_burned={workout.calories_burned}
                is_completed={workout.is_completed}
                sets={workout.sets}
                reps={workout.reps}
                weight={workout.weight}
                exercise_name={workout.exercise_name}
                muscle_group={workout.muscle_group}
            />
          </Col>
          )
        })}
      </Row>
    </ul>
  )
}

export default WorkoutList;
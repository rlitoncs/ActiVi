const db = require('../connection');

const getUserWorkoutDatawithTotal = (selected_date) => {
  // First query: Get user workout data
  const userWorkoutDataQuery = db.query(`
    SELECT user_workouts.id, duration, calories_burned, is_completed, sets, reps, weight, exercise_id, exercises.exercise_name, exercises.muscle_group 
    FROM user_workouts 
    JOIN exercises ON exercise_id = exercises.id 
    WHERE user_id = 1 AND date='${selected_date}' 
    ORDER BY id;
  `);

  // Second query: Get the total count of workouts
  const totalUserWorkoutsQuery = db.query(`
    SELECT COUNT(*)
    FROM user_workouts 
    WHERE user_id = 1 AND date='${selected_date}';
  `);

  return Promise.all([userWorkoutDataQuery, totalUserWorkoutsQuery])
    .then(([workoutData, totalWorkoutsData]) => {
      const userWorkouts = workoutData.rows;
      const totalWorkouts = totalWorkoutsData.rows[0].count; // retrieves count value

      return {
        userWorkouts,
        totalWorkouts
      }
    })
};

const addUserWorkoutData = (userWorkout) => {
  const dateOfWorkout = userWorkout.dateQuery.split('-'); 
  const [year, month, day] = dateOfWorkout;


  return db.query(`
      INSERT INTO User_Workouts 
      (date, duration, calories_burned, is_completed, sets, reps, weight, exercise_id, user_id)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [`${year}, ${month}, ${day}`, userWorkout.duration, userWorkout.calories_burned, false, userWorkout.sets, userWorkout.reps, userWorkout.weight, userWorkout.exercise_id, 1]
    )
  
}

const updateUserWorkoutData = (workout_id , editData) => {
  const editKeys = Object.keys(editData);
  const updatePromises = []; // Array to hold update promises

  for (let key of editKeys) {
    switch (key) {
      case 'sets':
        updatePromises.push(
          db.query(`UPDATE user_workouts SET sets = ${editData[key]} WHERE id = ${workout_id};`)
            .then(() => "Successfully updated sets")
        );
        break;
        
      case 'reps':
        updatePromises.push(
          db.query(`UPDATE user_workouts SET reps = ${editData[key]} WHERE id = ${workout_id};`)
            .then(() => "Successfully updated reps")
        );
        break;

      case 'weight':
        updatePromises.push(
          db.query(`UPDATE user_workouts SET weight = ${editData[key]} WHERE id = ${workout_id};`)
            .then(() => "Successfully updated weight")
        );
        break;

      case 'calories_burned':
        updatePromises.push(
          db.query(`UPDATE user_workouts SET calories_burned = ${editData[key]} WHERE id = ${workout_id};`)
            .then(() => "Successfully updated calories")
        );
        break;

      case 'duration':
        updatePromises.push(
          db.query(`UPDATE user_workouts SET duration = ${editData[key]} WHERE id = ${workout_id};`)
            .then(() => "Successfully updated reps")
        );
        break;
    }
  }

  return Promise.all(updatePromises)
  .then(results => {
    return results; // Return results from all updates
  })
  .catch(error => {
    console.error('Error during update:', error);
    throw new Error('Failed to update workout data');
  });
}

const deleteUserWorkout = (workout_id) => {
  return db.query(`DELETE from user_workouts WHERE id = ${workout_id};`)
    .then(() => "Successfully deleted workout")
}

module.exports = { getUserWorkoutDatawithTotal, addUserWorkoutData, updateUserWorkoutData, deleteUserWorkout };

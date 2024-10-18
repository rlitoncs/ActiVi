const db = require('../connection');

const getUserWorkoutData = (selected_date) => {
  return db.query(`SELECT user_workouts.id, duration, calories_burned, is_completed, sets, reps, weight, exercises.exercise_name, exercises.muscle_group from user_workouts JOIN exercises ON exercise_id = exercises.id WHERE user_id = 1 AND date='${selected_date}' ORDER BY id;`)
    .then(data => {
      return data.rows;
    });
};

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

module.exports = { getUserWorkoutData, updateUserWorkoutData };

const db = require('../connection');

const getUserWorkoutData = (selected_date) => {
  console.log(selected_date);
  return db.query(`SELECT user_workouts.id, duration, calories_burned, is_completed, sets, reps, weight, exercises.exercise_name, exercises.muscle_group from user_workouts JOIN exercises ON exercise_id = exercises.id WHERE user_id = 1 AND date='${selected_date}'; `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUserWorkoutData };

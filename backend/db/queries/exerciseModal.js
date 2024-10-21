const db = require('../connection');

const getExerciseModalData = (exercise_id) => {
  console.log(exercise_id);
  return db.query(`SELECT exercise.id, exercise.exercise_name, exercise.description, exercise.muscle_group, exercise.video_url;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getExerciseModalData };
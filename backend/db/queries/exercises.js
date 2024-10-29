const db = require('../connection');

const getAllExercises = () => {
  return db.query('SELECT * FROM exercises')
    .then(data => {
      return data.rows;
    });
};

const getExerciseIdData = (exercise_id) => {
  return db.query('SELECT exercise_name, description, equipment, video_url, muscle_group FROM exercises WHERE id=$1', [exercise_id])
    .then(data => {
      return data.rows;
    })
}

module.exports = { getAllExercises, getExerciseIdData };

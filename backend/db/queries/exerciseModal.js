const db = require('../connection');

const getExerciseById = (exercise_id) => {
  console.log(exercise_id);
  return db.query(`SELECT * FROM exercises WHERE id = $1;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getExerciseById };
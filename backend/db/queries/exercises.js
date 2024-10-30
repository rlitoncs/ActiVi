const db = require('../connection');

const getAllExercises = () => {
  return db.query('SELECT * FROM exercises')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllExercises };

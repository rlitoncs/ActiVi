const db = require('../connection');

const getUserInfo = (id) => {
  return db.query('SELECT first_name, last_name, age, weight, height, profile_pic FROM users WHERE id=$1;', [id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUserInfo };

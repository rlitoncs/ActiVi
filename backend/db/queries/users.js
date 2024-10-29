const db = require('../connection');

const getAll = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {     
      return data.rows;
    });
};

const getByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1;',[email])
    .then(data => {  
      console.log(data.rows[0])    
      return data.rows[0];
    });
};

module.exports = { getAll, getByEmail};
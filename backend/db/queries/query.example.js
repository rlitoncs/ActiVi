const db = require('../connection');

const getData = () => {
  return db.query('SELECT * FROM customers;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getData };

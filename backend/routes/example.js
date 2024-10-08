const express = require('express');
const router = express.Router();
const exampleQueries = require('../db/queries/query.example');

// GET /example
router.get('/', (req, res) => {
  exampleQueries.getData()
    .then(data => {
      console.log(data);
    })
})


module.exports = router; 
const express = require('express');
const router = express.Router();
const exercisesQueries = require('../db/queries/exercises');

// GET /api/exercises

router.get('/', (req, res) => {
  

  exercisesQueries.getAllExercises()
    .then(data => {
      res.json(data);
    })
})


module.exports = router; 
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

// GET /api/exercises/:id

router.get('/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  exercisesQueries.getExerciseIdData(id)
    .then(data => {
      res.json(data);
    })
})


module.exports = router; 
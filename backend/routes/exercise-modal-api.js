const express = require('express');
const router = express.Router();
const exerciseModalQueries = require('../db/queries/exercises');

// GET /api/exercises/:id

router.get('/:id', (req, res) => {
  const { id } = req.params;

  exerciseModalQueries.getExerciseIdData(id)
    .then(data => {
      res.json(data);
    })
})


module.exports = router; 
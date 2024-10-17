const express = require('express');
const router = express.Router();
const userWorkoutsQueries = require('../db/queries/userWorkouts');

// GET /api/userWorkouts/[:date]

router.get('/:date', (req, res) => {
  const { date } = req.params;

  userWorkoutsQueries.getUserWorkoutData(date) //requires argument selected_date
    .then(data => {
      res.json(data);
    })
})


module.exports = router; 
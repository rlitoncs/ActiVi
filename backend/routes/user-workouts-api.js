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

// GET /api/userWorkouts/[:id]
router.post('/:id', (req,res) => {
  const { id } = req.params;
  const { formData } = req.body;

  userWorkoutsQueries.updateUserWorkoutData(id, formData)
    .then(() => {
      res.sendStatus(200);
    })

})

router.post('/delete/:id', (req, res) => {
  const { id } = req.params;

  userWorkoutsQueries.deleteUserWorkout(id)
    .then(() => {
      res.sendStatus(200);
    })

})

module.exports = router; 
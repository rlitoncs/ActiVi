const express = require('express');
const router = express.Router();
const userWorkoutsQueries = require('../db/queries/userWorkouts');
const { route } = require('./example');

// GET /api/userWorkouts/[:date]
router.get('/:date', (req, res) => {
  const { date } = req.params;

  userWorkoutsQueries.getUserWorkoutDatawithTotal(date) //requires argument selected_date
    .then(data => {
      res.json(data);
    })
  
})


// POST /api/userWorkouts/
router.post('/', (req,res) => {
  const { userWorkout } = req.body;

  userWorkoutsQueries.addUserWorkoutData(userWorkout)
    .then(() => {
      res.sendStatus(200);
    })
})

// POST /api/userWorkouts/[:id]
router.post('/:id', (req,res) => {
  const { id } = req.params;
  const { formData } = req.body;

  userWorkoutsQueries.updateUserWorkoutData(id, formData)
    .then(() => {
      res.sendStatus(200);
    })

})

// POST /api/userWorkouts/delete/[:id]
router.post('/delete/:id', (req, res) => {
  const { id } = req.params;

  userWorkoutsQueries.deleteUserWorkout(id)
    .then(() => {
      res.sendStatus(200);
    })

})

module.exports = router; 
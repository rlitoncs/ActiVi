const express = require('express');
const router = express.Router();
const usersQueries = require('../db/queries/users');

// GET /api/users/[:id]
router.get('/:id', (req, res) => {
  const { id } = req.params;
  usersQueries.getUserInfo(id)
    .then(data => {
      res.json(data);
    })
  
})


module.exports = router; 
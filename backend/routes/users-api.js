const express = require('express');
const router = express.Router();
const usersQueries = require('../db/queries/users');

// GET /api/users

router.get('/', (req, res) => {
  

  usersQueries.getAll()
    .then(data => {
      res.json(data);
    })
})

router.post('/login', (req, res) => {
  console.log(req.body);
  const {email, password} = req.body;
  usersQueries.getByEmail(email)
  .then(data =>{ 
    if(!data) {
      return res.status(400).json({message:"invalid credentials"})
    }

    const passwordMatch = data.password === password;
    //const passwordMatch = bcrypt.compareSync(data.password, password)
    if(!passwordMatch) {
      return res.status(400).json({message:"invalid credentials"})
    }
    delete data.password;
    //const token = jwt.sign(data,'mySecret')
    
    res.json({message:"welcome", data});   
  })  
})

module.exports = router; 
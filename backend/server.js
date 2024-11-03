// load .env data into process.env
require('dotenv').config();

// Web server config
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

const cwd = process.cwd(); 
const public = path.join(cwd, "..", "public");
app.use("/", express.static(public));


// Middleware
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());  // axios by default sends data as JSON
app.use(express.urlencoded({ extended: true })) //parse complex URLencoded data 

// Prep Routes
const exampleRoute = require('./routes/example');
const userWorkoutsApiRoutes = require('./routes/user-workouts-api');
const exercisesApiRoutes = require('./routes/exercises-api');
const usersApiRoutes = require('./routes/users-api');

// Mount Routes
app.use('/example', exampleRoute);
app.use('/api/userWorkouts', userWorkoutsApiRoutes);
app.use('/api/exercises', exercisesApiRoutes);
app.use('/api/users', usersApiRoutes);



app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`)
})
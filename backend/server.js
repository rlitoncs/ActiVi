// load .env data into process.env
require('dotenv').config();

// Web server config
const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(morgan('dev'));
app.use(express.json());  // axios by default sends data as JSON
app.use(express.urlencoded({ extended: true })) //parse complex URLencoded data 

// Prep Routes
const exampleRoute = require('./routes/example');
const userWorkoutsApiRoutes = require('./routes/user-workouts-api');
const exercisesApiRoutes = require('./routes/exercises-api');
const usersApiRoutes = require('./routes/users-api')

// Mount Routes
app.use('/example', exampleRoute);
app.use('/api/userWorkouts', userWorkoutsApiRoutes);
app.use('/api/exercises', exercisesApiRoutes);
app.use('/api/users', usersApiRoutes)

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`)
})
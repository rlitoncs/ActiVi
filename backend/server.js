// load .env data into process.env
require('dotenv').config(); 


// Web server config
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');


const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(morgan('dev'));
app.use(express.json());  // axios by default sends data as JSON
app.use(express.urlencoded({ extended: true })) //parse complex URLencoded data 
app.use(cookieSession({
  name: 'projectSession',
  keys:['key'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


// Prep Routes
const exampleRoute = require('./routes/example');
const userWorkoutsApiRoutes = require('./routes/user-workouts-api');

// Mount Routes
app.use('/example', exampleRoute);
app.use('/api/userWorkouts', userWorkoutsApiRoutes);
app.use('/api/exercises', )



app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`)
})
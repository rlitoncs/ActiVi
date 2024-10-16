DROP TABLE IF EXISTS User_Workouts;
CREATE TABLE User_Workouts (
    id SERIAL PRIMARY KEY NOT NULL,
    date DATE,
    duration INT,
    calories_burned DECIMAL(5, 2),
    is_completed BOOLEAN,
    sets INT,
    reps INT,
    exercise_id INT REFERENCES Exercises(id) ON DELETE CASCADE,
    user_id INT REFERENCES Users(id) ON DELETE CASCADE
);
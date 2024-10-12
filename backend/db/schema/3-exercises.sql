DROP TABLE IF EXISTS Exercises;
CREATE TABLE Exercises (
    id SERIAL PRIMARY KEY NOT NULL,
    exercise_name VARCHAR(255),
    equipment VARCHAR(255),
    photo_url TEXT,
    video_url TEXT,
    muscle_group VARCHAR(255),
    exercise_type_id INT REFERENCES Exercise_Types(id) ON DELETE CASCADE
);

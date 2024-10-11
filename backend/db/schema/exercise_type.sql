DROP TABLE IF EXISTS Exercise_Types;
CREATE TABLE Exercise_Types (
    id SERIAL PRIMARY KEY NOT NULL,
    type_name VARCHAR(255),
    description TEXT
);
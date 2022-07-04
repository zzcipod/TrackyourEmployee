DROP DATABASE IF EXISTS Tracker_db;
CREATE DATABASE Tracker_db;

USE Tracker_db;

CREATE TABLE department_table (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role_table (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_table)
    REFERENCES movies(id)
    ON DELETE SET NULL
);

CREATE TABLE employee_table (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);
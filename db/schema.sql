-- DROP DATABASE IF EXISTS Tracker_db;
-- CREATE DATABASE Tracker_db;

-- USE Tracker_db;

-- CREATE TABLE department_table (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   department_name VARCHAR(30) NOT NULL
-- );

-- CREATE TABLE role_table (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     role_title VARCHAR(30) NOT NULL
--     salary DECIMAL,
--     department_id INT,
--     FOREIGN KEY (department_table)
--     REFERENCES movies(id)
--     ON DELETE SET NULL
-- );

-- CREATE TABLE employee_table (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     movie_id INT,
--     review TEXT NOT NULL,
--     FOREIGN KEY (movie_id)
--     REFERENCES movies(id)
--     ON DELETE SET NULL
-- );

DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

SET GLOBAL sql_mode='';

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY(department_id),
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY(role_id)
    REFERENCES roles(id)
    ON DELETE SET NULL,
    manager_id INT,
    REFERENCES employee(id)
);
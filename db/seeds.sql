-- INSERT INTO department_table (department_name)
-- VALUES (Marketing),
--         (Accounting),
--         (Manucturing);


-- INSERT INTO role_table (role_title, role_salary, department_id)
-- VALUES ("Marketing", 100000, 1),
--         ("Accounting", 100000, 2),
--         ("Accounting", 100000, 2),
--         ("Manucturing", 100000, 3);

-- INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
-- VALUES ("Tom", "Cruise", 1, null),
--        ("Tom", "Hanks", 1, 1),
--        ("Suri", "Cruise", 2, null),
--        ("Maria", "Carlery", 2, 3),

INSERT INTO department (department_name)
VALUES ("Accounting"),
        ("Marketing"),
        ("IT"),
        ("Legal"),
        ("Research and Developement");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Accountant", 95000, 1),
        ("Social Media Intern", 25000, 2),
        ("Developer", 125000, 3),
        ("Counsel", 195000, 4),
        ("Researcher", 75000, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Alice', 'Fannybottoms', 2, null),
       (2, 'Luke', 'Skywalker', 3, null),
       (3, 'Greg', 'Siggins', 3, 2),
       (4, 'Jenna', 'Buettner', 1, null),
       (5, 'Harry', 'Potter', 5, null),
       (6, 'Lizzie', 'McGuire', 5, 5),
       (7, 'Nick', 'Pisano', 1, 4),
       (9, 'Hannah', 'Montana', 5, null),
       (10, 'Oliver', 'Sykes', 5, 9),
       (11, 'Jason', 'Earles', 4, null),
       (12, 'Selena', 'Gomez', 4, 11);

       
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
        ("Management"),
        ("IT");

INSERT INTO roles (title, salary, department_id)
VALUES  ("Accountant", 60000, 1),
        ("Agent", 80000, 2),
        ("Manager", 120000, 3),
        ("Engineer", 120000, 4),
        

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Harry', 'Potter', 2, null),
       (2, 'Ron', 'Weasley', 3, null),
       (3, 'Lord', 'Voldemort', 3, 2),
       (4, 'Hermione', 'Granger', 1, null),
       (5, 'Ginny', 'Weasley', 1, null),
       (6, 'Draco', 'Malfoy', 4, 5),
       (7, 'Neville', 'Longbottom', 2, 4),
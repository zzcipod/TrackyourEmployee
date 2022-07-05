INSERT INTO department_table (department_name)
VALUES (Marketing),
        (Accounting),
        (Manucturing);


INSERT INTO role_table (role_title, role_salary, department_id)
VALUES ("Marketing", 100000, 1),
        ("Accounting", 100000, 2),
        ("Accounting", 100000, 2),
        ("Manucturing", 100000, 3);

INSERT INTO employee_table (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Cruise", 1, null),
       ("Tom", "Hanks", 1, 1),
       ("Suri", "Cruise", 2, null),
       ("Maria", "Carlery", 2, 3),
// const inquirer = require('inquirer'); // V8.2.4 DOCU https://www.npmjs.com/package/inquirer - https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
// const cTable = require('console.table'); //DOCU https://www.npmjs.com/package/console.table
// const mysql = require('mysql2'); // DOCU https://www.npmjs.com/package/mysql2 

// var ui = new inquirer.ui.BottomBar();
// // Mysql Connect to database Step 1.
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // Add MySQL password here
//     password: 'Zz123456789!',
//     database: 'Tracker_db'
//   },
//   console.log(`Connected to the register_db database.`)
// );

// // Content Management System (CMS)
// // ADD FUNCTIONS
// function funcAddEmployee() {
//   console.log("add Employee");
// }

// // VIEW FUNCTIONS
// function funcViewAllEmployees() { //WORKING! ALL DONE EXCEPT FOR MANAGER
//   // query register_db select first last id from table
//   const sql =
//     `SELECT employee_table.id, employee_table.first_name, employee_table.last_name, role_table.role_title AS title, department_table.department_name AS department, role_table.role_salary AS salary
//   FROM employee_table
//   INNER JOIN role_table ON employee_table.role_id=role_table.id
//   INNER JOIN department_table ON role_table.id=department_table.id;`;

//   db.query(sql, (err, rows) => {
//     console.info('sql: ', sql); 
//     console.info('rows: ', rows); 
//     console.log('What Would You Like To Do ---> View All Employees')
//     console.table(rows);
    
//   });
// }
// function funcViewAllRoles() { //WORKING! COMPLETED !!!
//   // query register_db select first last id from table
//   const sql =
//     `SELECT role_table.id AS id, role_table.role_title AS title, department_table.department_name AS department, role_table.role_salary AS salary
//   FROM role_table
//   INNER JOIN department_table ON role_table.department_id=department_table.id;`;

//   db.query(sql, (err, rows) => {
//     console.info('sql: ', sql);
//     console.info('rows: ', rows);
//     console.log('What Would You Like To Do ---> View All Employees')
//     console.table(rows);
    
//   });
// }
// function funcViewAllDepartments() { //WORKING! COMPLETED!!!!
//   // query register_db select first last id from table
//   const sql = `SELECT id, department_name AS name FROM department_table`;

//   db.query(sql, (err, rows) => {
//     console.info('sql: ', sql);
//     console.info('rows: ', rows);
//     console.log('What Would You Like To Do ---> View All Employees')
//     console.table(rows);
    
//   });
// }
// // ADD FUNCTIONS
// function funcAddEmployee() {
//   roleList = [];
//   const sqlCheck = `SELECT id, role_title FROM role_table`;
//   // console.log('got here');
//   db.query(sqlCheck, (err, rows) => {
//     console.info('sql: ', sqlCheck);
//     console.info('rows: ', rows);
//     roleList = rows.map(a => a.role_title);
//     roleListId = rows.map(element => {
//       return {name: element.role_title, value: element.id}
//     })
//     console.log('rolelist: ', roleList);
//     console.log('What Would You Like To Do ---> View All Employees')
//     inquirer.prompt([
//       {
//         type: 'input',
//         name: 'firstName',
//         message: 'What Is The New Employees First Name:'
//       },
//       {
//         type: 'input',
//         name: 'lastName',
//         message: 'What Is The New Employees Last Name:'
//       },
//       {
//         type: 'list',
//         name: 'roleListA',
//         message: 'What is the new employees role?',
//         choices: roleList
//       }
//     ]).then(answers => {
//       console.log(answers);
//       // InsertInto Employee_list
//       const sql = `INSERT INTO employee_list (first_name, last_name, role_id, manager_id)
//       VALUES (?, ?, ?, ?)`;
//       const params = [answers.firstName, answers.lastName, answers.roleChoice, answers.managerChoice];
//     })
//   });
// }
// function funcAddDepartment() {//WORKING! COMPLETED!!!!
//   inquirer.prompt([
//     {
//       type: 'input',
//       name: 'departmentName',
//       message: 'Input New Department Name:'
//     },
//   ]).then(answers => {
//     //INSERT SQL INTO department_table
//     const sql = `INSERT INTO department_table (department_name)
//     VALUES (?)`;
//     const params = [answers.departmentName];
//     db.query(sql, params, (err, result) => {
//       console.log(`Success: New Department: ${answers.departmentName}`);
     
//     });
//   })
// }


// // funcAddDepartment();
// funcChoice();

// function funcChoice() {

//     console.log()
//     inquirer.prompt([
//       {
//         type: 'list',
//         name: 'options',
//         message: 'What would you like to do?',
//         choices: [
//           {
//             name:'View all employees?',
//             value:'viewName'
//           },
//           {
//             name:'View all roles?',
//             value:'viewRole'
//           },
//           {
//             name:'View all departments?',
//             value:'viewDep'
//           }
          
//         ]
//       }
//     ]).then(answers => {
//       console.log(answers);
//     switch (answers.options){
//       case 'viewName':
//         funcViewAllEmployees()
        
//       break

//       case 'viewRole':
//         funcViewAllRoles()

//         break

//         case 'viewDepart':
//           funcViewAllDepartments()

//     }
    
//     })
//   };

const express = require('express');
// Import and require mysql2
const inquirer = require("inquirer");
const mysql = require('mysql2');
const logo = require('asciiart-logo');




const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '123456789',
        database: 'company_db',
    },
    console.log(`Connected to the company_db database.`)
);

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});



///Create directory function////


const createDirectory = () => {

    console.log(
        logo({
            name: 'Employee Tracker',
            borderColor: 'white',
            logoColor: 'bold-white',
        })
            .render()
    );

    const directionQuestion = () => {
        inquirer
            .prompt(
                [{
                    type: 'list',
                    name: 'choice',
                    message: 'What would you like to do?',
                    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
                }

                ]

            )
            //switch case for all functions
            .then(answer => {
                switch (answer.choice) {
                    case 'View All Employees':
                        displayAllEmployees();
                        break;
                    case 'Add Employee':
                        createEmployee();
                        break;
                    case 'Update Employee Role':
                        updateEmployee();
                        break;
                    case 'View All Roles':
                        viewRoles();
                        break;
                    case 'Add Role':
                        addRole();
                        break;
                    case 'View All Departments':
                        viewDepartments();
                        break;
                    case 'Add Department':
                        addDepartment();
                        break;
                    case 'Quit':
                        break;
                }
            })
    }
    directionQuestion();
};


function createEmployee() {
    // renderManagers()
    inquirer
        .prompt(
            [
                {
                    type: 'input',
                    name: 'first_name',
                    message: "What is the employee's first name?",
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: "What is the employee's last name?",
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: "What is the employee's role id?",
                },
                {
                    type: 'confirm',
                    name: 'managerConfirm',
                    message: "Does this employee have a manager?",

                },
                {
                    type: 'input',
                    name: 'manager_id',
                    message: "What is the manager's name?",
                    when: (data) => {
                        if (data.managerConfirm === true) {
                            return true;
                        }
                    }
                },
            ])
        .then(data => {

            const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);`;
            const values = [data.first_name, data.last_name, data.role_id, data.manager_id];
//query and console table
            db.query(sql, values, (err, res) => {
                if (err) {
                    console.log(err)
                }
                console.log('Added to database successful!')
            });
            createDirectory();


        });

}



//updating an employee role
function updateEmployee() {
    inquirer
        .prompt([
            {
                type: 'number',
                name: 'id',
                message: "What is the employee's id?",
            },
            {
                type: 'input',
                name: 'role_id',
                message: "What is employee's new role id?",


            },
        ])

        //query and update
        .then(data => {
            const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
            const values = [data.role_id, data.id];

            db.query(sql, values, (err, res) => {
                if (err) {
                    console.log(err);
                }
                console.log("Role updated successful!")
            });
        
            createDirectory()
        });

};



function addRole() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is new role title?",
            },
            {
                type: 'number',
                name: 'salary',
                message: "What is new role salary?",
            },
            {
                type: 'input',
                name: 'department_id',
                message: "What is this role department ID?",
            },
        ])

        //query and update of role
        .then(data => {
            const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?);`;
            const values = [data.title, data.salary, data.department_id];
            db.query(sql, values, (err, res) => {
                if (err) {
                    console.error(err)
                }
                console.log("Role added successful!");

            });
            createDirectory()
        });


};


function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'department_name',
                message: "What is the new department's name?",
            },
        ])

        //adding department name
        .then(data => {
            const sql = `INSERT INTO department (department_name) VALUES (?);`;
            const value = data.department_name;
            db.query(sql, value, (err, res) => {
                if (err) {
                    console.log(err);
                }
                console.log("Department Added successful!")
            });

            createDirectory();
        });

};



///query functions
function displayAllEmployees() {
    const sql = `SELECT employee.id, 
        employee.first_name,
        employee.last_name, 
        roles.title, 
        roles.salary, 
        department.department_name, 
        CONCAT(manager.first_name, ' ', manager.last_name) 
        AS MANAGER
        FROM employee employee
        LEFT JOIN employee manager
        ON employee.manager_id = manager.id
        JOIN roles
        ON roles.id=employee.role_id
        JOIN department
        ON roles.department_id = department.id; `;
    db.query(sql, (err, res) => {
        console.table(res);

    });
    createDirectory()
};
//displays all roles
function viewRoles() {
    const sql = ` SELECT 
        roles.title,
         roles.id, 
         roles.salary,
        department.department_name
        FROM roles
        RIGHT JOIN department
        ON roles.department_id = department.id
         ;`;
    db.query(sql, (err, res) => {
        try {
            if (res) {
                console.table(res);
            }
        }
        catch (err) {
            console.error(err)
        };
    });
    createDirectory()
};

// displays all departments
function viewDepartments() {
    const sql = `SELECT * FROM department;`;
    db.query(sql, (err, res) => {
        try {
            if (res) {
                console.table(res);
            }
        } catch (err) {
            console.error(err)
        };
    });
    createDirectory()
};


function employeeUpdateQuery({ id, role }) {
//update employee role

    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const values = (role_id, id);

    db.query(sql, values, (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log("Role updated  successful!")
    });
    createDirectory()
};




createDirectory();


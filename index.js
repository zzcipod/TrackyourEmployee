const inquirer = require('inquirer'); // V8.2.4 DOCU https://www.npmjs.com/package/inquirer - https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
const cTable = require('console.table'); //DOCU https://www.npmjs.com/package/console.table
const mysql = require('mysql2'); // DOCU https://www.npmjs.com/package/mysql2 
const { restoreDefaultPrompts } = require('inquirer');

var ui = new inquirer.ui.BottomBar();
// sql2 Connect to database 
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // Add MySQL password here
    password: 'Password',
    database: 'register_db'
  },
  console.log(`Connected to the register_db database.`)
);

// Content Management System (CMS)
// ADD FUNCTIONS
function funcAddEmployee() {
  console.log("add Employee");
}

// VIEW FUNCTIONS
function funcViewAllEmployees() { //WORKING! ALL DONE EXCEPT FOR MANAGER
  // query register_db select first last id from table
  const sql =
    `SELECT employee_table.id, employee_table.first_name, employee_table.last_name, role_table.role_title AS title, department_table.department_name AS department, role_table.role_salary AS salary
  FROM employee_table
  INNER JOIN role_table ON employee_table.role_id=role_table.id
  INNER JOIN department_table ON role_table.id=department_table.id;`;

  db.query(sql, (err, rows) => {
    // console.info('sql: ', sql);
    // console.info('rows: ', rows); 
    // console.log('What Would You Like To Do ---> View All Employees')
    console.table(rows);
    primaryQ();
  });
}
function funcViewAllRoles() { //WORKING! COMPLETED !!!
  // query register_db select first last id from table
  const sql =
    `SELECT role_table.id AS id, role_table.role_title AS title, department_table.department_name AS department, role_table.role_salary AS salary
  FROM role_table
  INNER JOIN department_table ON role_table.department_id=department_table.id;`;

  db.query(sql, (err, rows) => {
    // console.info('sql: ', sql);
    // console.info('rows: ', rows);
    // console.log('What Would You Like To Do ---> View All Employees')
    console.table(rows);
    primaryQ();
  });
}
function funcViewAllDepartments() { //WORKING! COMPLETED!!!!
  // query register_db select first last id from table
  const sql = `SELECT id, department_name AS name FROM department_table`;

  db.query(sql, (err, rows) => {
    // console.info('sql: ', sql);
    // console.info('rows: ', rows);
    // console.log('What Would You Like To Do ---> View All Employees')
    console.table(rows);
    primaryQ();
  });
}
// ADD FUNCTIONS
function funcAddEmployee() {
  roleList = [];
  const sqlCheck = `SELECT id, role_title FROM role_table`;
  // console.log('got here');
  db.query(sqlCheck, (err, rows) => {
    // console.info('sql: ', sqlCheck);
    // console.info('rows: ', rows);
    roleList = rows.map(a => a.role_title);
    roleListId = rows.map(element => {
      return {name: element.role_title, value: element.id}
    })
    // console.log('rolelist: ', roleList);
    // console.log('What Would You Like To Do ---> View All Employees')
    inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'What Is The New Employees First Name:'
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'What Is The New Employees Last Name:'
      },
      {
        type: 'list',
        name: 'roleListA',
        message: 'What is the new employees role?',
        choices: roleList
      }
    ]).then(answers => {
      //console.log(answers);
      //Insert Into Employee_list
      const sql = `INSERT INTO employee_list (first_name, last_name, role_id, manager_id)
      VALUES (?, ?, ?, ?)`;
      const params = [answers.firstName, answers.lastName, answers.roleChoice, answers.managerChoice];
    })
  });
}
function funcAddDepartment() {//WORKING! COMPLETED!!!!
  inquirer.prompt([
    {
      type: 'input',
      name: 'departmentName',
      message: 'Input New Department Name:'
    },
  ]).then(answers => {
    //INSERT SQL INTO department_table
    const sql = `INSERT INTO department_table (department_name)
    VALUES (?)`;
    const params = [answers.departmentName];
    db.query(sql, params, (err, result) => {
      console.log(`Success: New Department: ${answers.departmentName}`);
      primaryQ();
    });
  })
}
// MAIN INIT (STARTUP FUNCTION)
function primaryQ() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'startupQ',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', new inquirer.Separator(), 'QUIT', new inquirer.Separator()],
    }
  ]).then(answers => {
    //console.info('Answer:', answers.startupQ);
    switch (answers.startupQ) {
      case 'View All Employees':
        funcViewAllEmployees();
        break;
      case 'Add Employee':
        funcAddEmployee();
        break;
      case 'Update Employee Role':
        funcUpdateEmployeeRole();
        break;
      case 'View All Roles':
        funcViewAllRoles();
        break;
      case 'Add Role':
        funcAddRole();
        break;
      case 'View All Departments':
        funcViewAllDepartments();
        break;
      case 'Add Department':
        funcAddDepartment();
        break;
      case 'QUIT':
        break;
    }
  }
  )
}
primaryQ();
/**
 * Coded By Byron Dalberg
 * Coded On 7/1/2022
 */
const inquirer = require('inquirer'); // V8.2.4 DOCU https://www.npmjs.com/package/inquirer - https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts
const cTable = require('console.table'); //DOCU https://www.npmjs.com/package/console.table
const mysql = require('mysql2'); // DOCU https://www.npmjs.com/package/mysql2 

// var ui = new inquirer.ui.BottomBar();
// Mysql Connect to database Step 1.
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
    console.info('sql: ', sql);
    console.info('rows: ', rows); 
    console.log('What Would You Like To Do ---> View All Employees')
    console.table(rows);
    
  });
}
function funcViewAllRoles() { //WORKING! COMPLETED !!!
  // query register_db select first last id from table
  const sql =
    `SELECT role_table.id AS id, role_table.role_title AS title, department_table.department_name AS department, role_table.role_salary AS salary
  FROM role_table
  INNER JOIN department_table ON role_table.department_id=department_table.id;`;

  db.query(sql, (err, rows) => {
    console.info('sql: ', sql);
    console.info('rows: ', rows);
    console.log('What Would You Like To Do ---> View All Employees')
    console.table(rows);
    
  });
}
function funcViewAllDepartments() { //WORKING! COMPLETED!!!!
  // query register_db select first last id from table
  const sql = `SELECT id, department_name AS name FROM department_table`;

  db.query(sql, (err, rows) => {
    console.info('sql: ', sql);
    console.info('rows: ', rows);
    console.log('What Would You Like To Do ---> View All Employees')
    console.table(rows);
    
  });
}
// ADD FUNCTIONS
function funcAddEmployee() {
  roleList = [];
  const sqlCheck = `SELECT id, role_title FROM role_table`;
  // console.log('got here');
  db.query(sqlCheck, (err, rows) => {
    console.info('sql: ', sqlCheck);
    console.info('rows: ', rows);
    roleList = rows.map(a => a.role_title);
    roleListId = rows.map(element => {
      return {name: element.role_title, value: element.id}
    })
    console.log('rolelist: ', roleList);
    console.log('What Would You Like To Do ---> View All Employees')
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
      console.log(answers);
      // InsertInto Employee_list
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
     
    });
  })
}


// funcAddDepartment();
funcChoice();

function funcChoice() {
  // roleList = [];
  // const sqlCheck = `SELECT id, role_title FROM role_table`;
  // console.log('got here');
  // db.query(sqlCheck, (err, rows) => {
  //   console.info('sql: ', sqlCheck);
  //   console.info('rows: ', rows);
  //   roleList = rows.map(a => a.role_title);
  //   roleListId = rows.map(element => {
  //     return {name: element.role_title, value: element.id}
  //   })
  //   console.log('rolelist: ', roleList);
    console.log('What Would You Like To Do ---> View All Employees')
    inquirer.prompt([
      {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: [
          {
            name:'View all employees?',
            value:'viewName'
          },
          {
            name:'View all roles?',
            value:'viewRole'
          },
          {
            name:'View all departments?',
            value:'viewDep'
          }
          
        ]
      }
    ]).then(answers => {
      console.log(answers);
    switch (answers.options){
      case 'viewName':
        funcViewAllEmployees()
        
      break

      case 'viewRole':
        funcViewAllRoles()

        break

        case 'viewDepart':
          funcViewAllDepartments()

    }
    
    })
  };

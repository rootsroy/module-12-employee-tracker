const inquirer = require("inquirer");
const questions = require("./lib/questions");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  promptUser();
});

const promptUser = () => {
  inquirer.prompt(questions).then((res) => {
    switch (res.initialPrompt) {
      case "View All Employees":
        getEmployees();
        break;
      // case 'View All Employees By Department':
      //     break;
      // case 'View All Employees By Manager':
      //     break;
      case "Add Employee":
        addEmployee();
        break;
      // case 'Remove Employee':
      //     break;
      case "Update Employee Role":
        updateEmployee();
        break;
      // case 'Update Employee Manager':
      //     break;
      case "View All Roles":
        getRole();
        break;
      case "Add Role":
        addRole();
        break;
      // case 'Remove Role':
      //     break;
      case "View All Departments":
        getDept();
        break;
      case "Add Department":
        addDept(res.department);
        break;
      // case 'Delete Department':
      //     break;
      // case 'View Utilized Budget':
      //     break;
      case "Quit":
        quit();
        break;
    }
  });
};

// promptUser();

module.exports = { promptUser };
const { quit } = require("./utils/index");
const {
  getEmployees,
  addEmployee,
  updateEmployee,
} = require("./utils/employees");
const { getRole, addRole } = require("./utils/roles");
const { getDept, addDept } = require("./utils/department");

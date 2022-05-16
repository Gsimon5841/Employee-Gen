const Manager = require('./Manager');
const Intern = require('./Intern');
const Engineer = require('./Engineer');
const inquirer = require('inquirer');


function Department() {
    this.newDepartment = [];

    Department.prototype.createDepartment = function() {
        inquirer
        .prompt([
           { 
               type: 'text',
               name: 'name',
               message: "Enter the Team Manager's name"
            },
            { 
                type: 'input',
                name: 'Role Id',
                message: "Enter the Team Manager's Role Id"
             },
           
             { 
                type: 'text',
                name: 'email',
                message: "Enter the Team Manager's email"
             },
            
             { 
                type: 'input',
                name: 'Room',
                message: "Enter the Team Manager's Department number"
             },
           
        ])
        .then(({ name, id, email, officeNumber, role }) => {
            this.newDepartment.push(new Manager(name, id, email, role, officeNumber));
    
            this.addEmployee();
          });
      };
    }
    Department.prototype.addEmployee = function () {
        inquirer
          .prompt({
            type: 'list',
            name: 'choice',
            message: 'Which role do you want to create ?',
            choices: ['Engineer', 'Intern', 'Exit'],
          })
          .then(({ choice }) => {
            if (choice === 'Engineer') {
              inquirer
                .prompt([
                  {
                    type: 'text',
                    name: 'name',
                    message: "Enter the Engineer's name?",
                  },
                  {
                    type: 'input',
                    name: 'id',
                    message: "Enter the Engineer's Role Id",
                  },
                  {
                    type: 'text',
                    name: 'email',
                    message: "Enter the Engineer's email",
                  },
                  {
                    type: 'input',
                    name: 'github',
                    message: "Enter the Engineer's Github profile",
                  },
                ])
                .then(({ name, id, email, role, github }) => {
                  this.newDepartment.push(new Engineer(name, id, email, role, github));
      
                  this.addEmployee();
                });
            } else if (choice === 'Intern') {
              inquirer
                .prompt([
                  {
                    type: 'text',
                    name: 'name',
                    message: "Enter the Interns's name",
                  },
                  {
                    type: 'input',
                    name: 'id',
                    message: "Enter the Engineer's Role Id",
                  },
                  {
                    type: 'text',
                    name: 'email',
                    message: "What is the intern's email address?",
                  },
                  {
                    type: 'input',
                    name: 'school',
                    message: 'Which school does the intern attend?',
                  },
                ])
                .then(({ name, id, email, role, school }) => {
                  this.newDepartment.push(new Intern(name, id, email, role, school));
      
                  this.addEmployee();
                });
            } else {
              console.log(this.newDepartment)
              return;
            }
          });
      };


    module.exports = Department;
// requiring neccesary modulus
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../Main/lib/Manager')
const Employee = require('../Main/lib/Employee')
const Engineer = require('../Main/lib/Engineer');
const Intern = require('../Main/lib/Intern');
const generateHTML = require('./src/generateHTML')

// Manager Questions for prompts
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the team manager\'s name?',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'managerId',
        message: 'What is the team manager\'s ID?',
        validate: (answer) => {
            if (answer === '') {
                return 'please provide a valid ID'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the team manager\'s email?',
        validate: (answer) => {
            if (answer === '') {
                return 'please provide a valid ID'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number?',
        validate: (answer) => {
            if (answer === '') {
                return 'please provide a valid ID'
            }
            return true
        }
    },

    {
        type: 'list',
        name: 'member',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I dont want to add any more team members']
       
    },

]

//Engineer Questions for prompt
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is your engineer\'s name',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'engineerId',
        message: 'What is your engineer\'s ID',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is your engineer\'s email',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is your engineer\'s github',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },

    {
        type: 'list',
        name: 'member',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I dont want to add any more team members']
       
    },

]

// Intern Questions for prompt
const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'What is your intern\'s name',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'internId',
        message: 'What is your intern\'s ID',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is your intern\'s email',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is your intern\'s school',
        validate: (answer) => {
            if (answer === '') {
                return 'please enter a valid name'
            }
            return true
        }
    },

    {
        type: 'list',
        name: 'member',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I dont want to add any more team members']
       
    },

]

//array created to store different type of employees
const myTeam = []

// function to start prompt questions for interns
function internInit() {
    inquirer.prompt(internQuestions).then((data) => {
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.school)
        
        myTeam.push(intern)
       

        if(data.member === 'Engineer') {
            engineerInit()
           }
    
          else if(data.member === 'Intern') {
            internInit()
           }
           else {
            writeToFile(myTeam)
           }
           
     });
};

// function to start prompt for engineer questions
function engineerInit() {
    inquirer.prompt(engineerQuestions).then((data) => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        
        myTeam.push(engineer)
        

        if(data.member === 'Engineer') {
            engineerInit()
           }
    
           else if(data.member === 'Intern') {
            internInit()
           }
           else {
            writeToFile(myTeam)
           }
     });
};

// functions using fs to initialize the generateHTML routing it to the dist folder
function writeToFile (data) {
    console.log(data);


    fs.writeFile('./dist/index.html', generateHTML(myTeam), (err) => {
        err ? console.log(err) : console.log('Succesfully generated HTML file')
    })
}

//functions that initialize the whole process with manager questions prompt
function managerInit() {

    inquirer.prompt(managerQuestions).then((data) => {
       const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber)
       
       myTeam.push(manager)
       
//filter if they choose they want to add an engineer or Intern
       if(data.member === 'Engineer') {
        engineerInit()
       }

       else if(data.member === 'Intern') {
        internInit()
       }
       else {
        writeToFile(myTeam) 
       }
       
    });
  
}


//initialize 
managerInit();

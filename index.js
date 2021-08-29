//include packages
const inquirer = require('inquirer');
const {writeFile, copyFile} = require('./src/generate-site')
const generatePage = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

class Directory{
    constructor(){
        this.engineers = [];
        this.interns = [];
    }

    promptTeamManager() {
       inquirer
            .prompt([
                {
                    type:'text',
                    name: 'name',
                    message:"What is the team manager's name?",
                    validate: nameInput => {
                        if (nameInput) {
                            return true;    
                        } else{
                            console.log("Please enter a manager's name!");
                            return false;
                        }
                    }    
                },
                {
                    type:'text',
                    name: 'id',
                    message:"What is the team manager's ID?",
                    validate: idInput => {
                        if(idInput){
                            return true;
                        } else {
                            console.log("Please enter a number for the manager's ID.")
                        }
                    }
                },
                {
                    type:'text',
                    name: 'email',
                    message:"What is the team manager's email?",
                    validate: emailInput => {
                        if(emailInput){
                            return true;
                        } else {
                            console.log("Please enter an email for the manager.")
                        }
                    }
                },
                {
                    type:'text',
                    name: 'officeNumber',
                    message:"What is the team manager's office number?",
                    validate: officeInput => {
                        if(officeInput){
                            return true;
                        } else {
                            console.log("Please enter an office number for the manager.")
                        }
                    }
                },
                {
                    type: 'list',
                    name:'moreEmployee',
                    message: 'Would you like to add another employee?',
                    choices: ['add Engineer','add Intern','or Complete the Team']
                }
            ])   
            .then(({name,id,email,officeNumber,moreEmployee}) =>{
                this.manager = new Manager(name,id,email,officeNumber);

                switch(moreEmployee) {
                    case 'add Engineer':
                        return this.promptEngineer();
                    case 'add Intern':
                        return this.promptIntern();
                    case 'or Complete the Team':
                        return this.constructHTML();
                    default:
                        return console.log('whoops');
                }
            })            

    }   
    
    promptEngineer(){
        inquirer.prompt([
            {
                type:'text',
                name: 'name',
                message:"What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;    
                    } else{
                        console.log("Please enter an engineer's name!");
                        return false;
                    }
                }
            },
            {
                type:'text',
                name: 'id',
                message:"What is the engineer's id?",
                validate: idInput => {
                    if(idInput){
                        return true;
                    } else {
                        console.log("Please enter a number for the engineer's ID.")
                    }
                }
            },
            {
                type:'text',
                name: 'email',
                message:"What is the engineer's email?",
                validate: emailInput => {
                    if(emailInput){
                        return true;
                    } else {
                        console.log("Please enter an email for the engineer.")
                    }
                }
            },
            {
                type:'text',
                name: 'github',
                message:"What is the engineer's github username?",
                validate: gitInput => {
                    if(gitInput){
                        return true;
                    } else {
                        console.log("Please enter a GitHub username for the engineer.")
                    }
                }
            },
            {
                type: 'list',
                name:'moreEmployee',
                message: 'Would you like to add another employee?',
                choices: ['add Engineer','add Intern','or Complete the Team']
            }
        ])   
        .then(({name,id,email,github,moreEmployee}) =>{
            this.engineers.push(new Engineer(name,id,email,github));
                
            switch(moreEmployee) {
                case 'add Engineer':
                    return this.promptEngineer();
                case 'add Intern':
                    return this.promptIntern();
                case 'or Complete the Team':
                    return this.constructHTML();
                default:
                    return console.log('whoops');
            }    
        })   
    }

    promptIntern(){
        inquirer.prompt([
            {
                type:'text',
                name: 'name',
                message:"What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;    
                    } else{
                        console.log("Please enter an intern's name!");
                        return false;
                    }
                }
            },
            {
                type:'text',
                name: 'id',
                message:"What is the intern's id?",
                validate: idInput => {
                    if(idInput){
                        return true;
                    } else {
                        console.log("Please enter a number for the intern's ID.")
                    }
                }
            },
            {
                type:'text',
                name: 'email',
                message:"What is the intern's email?",
                validate: emailInput => {
                    if(emailInput){
                        return true;
                    } else {
                        console.log("Please enter an email for the intern.")
                    }
                }
            },
            {
                type:'text',
                name: 'school',
                message:"What is the intern's school?",
                validate: schoolInput => {
                    if(schoolInput){
                        return true;
                    } else {
                        console.log("Please enter a school for the intern.")
                    }
                }
            },
            {
                type: 'list',
                name:'moreEmployee',
                message: 'Would you like to add another employee?',
                choices: ['add Engineer','add Intern','or Complete the Team']
            }
        ])   
        .then(({name,id,email,school,moreEmployee}) =>{
            this.interns.push(new Intern(name,id,email,school));

            switch(moreEmployee) {
                case 'add Engineer':
                    return this.promptEngineer();
                case 'add Intern':
                    return this.promptIntern();
                case 'or Complete the Team':
                    return this.constructHTML();
                default:
                    return console.log('whoops');
            }
        })       
    }

    constructHTML(){
        writeFile(generatePage(this));
        copyFile();
    };
    
}

let currentProject = new Directory();
currentProject.promptTeamManager();



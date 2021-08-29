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
                    message:"What is the team manager's name?"
                },
                {
                    type:'text',
                    name: 'id',
                    message:"What is the team manager's id?"
                },
                {
                    type:'text',
                    name: 'email',
                    message:"What is the team manager's email?"
                },
                {
                    type:'text',
                    name: 'officeNumber',
                    message:"What is the team manager's office number?"
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
                message:"What is the engineer's name?"
            },
            {
                type:'text',
                name: 'id',
                message:"What is the engineer's id?"
            },
            {
                type:'text',
                name: 'email',
                message:"What is the engineer's email?"
            },
            {
                type:'text',
                name: 'github',
                message:"What is the engineer's github username?"
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
                message:"What is the intern's name?"
            },
            {
                type:'text',
                name: 'id',
                message:"What is the intern's id?"
            },
            {
                type:'text',
                name: 'email',
                message:"What is the intern's email?"
            },
            {
                type:'text',
                name: 'school',
                message:"What is the intern's school?"
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
        console.log(generatePage(this));
    }
    
}

let currentProject = new Directory();
currentProject.promptTeamManager();



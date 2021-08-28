//include packages
const inquirer = require('inquirer');
const { choices } = require('yargs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

class Directory{
    constructor(){

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
                    message: 'Would you like to add another person?',
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
                        return;
                    default:
                        return console.log('whoops');
                }
            })            

    }   
    
    promptEngineer(){
        console.log('Engineer prompts');

    }

    promptIntern(){
        console.log('Intern prompts');

    }
}

new Directory().promptTeamManager();
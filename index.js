//include packages
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

function Generator(){
    Generator.prototype.promptTeamManager = function(){
        inquirer
            .prompt({
                type:'text',
                name: 'name',
                message:"What is the team manager's name?"
            })
            .then(({name}) =>{
                this.manager = new Manager(name);
            })
        }

    }

    const promptTeamIntern = () => {

}

const promptTeamEngineer= () =>{}

new Generator().promptTeamManager();

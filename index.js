// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: "What is this project's title?"
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email?'
	},
	{
		type: 'input',
		name: 'github',
		message: 'What is your GitHub username?'
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please write a brief description of your project'
	},
	{
		type: 'confirm',
		name: 'confirmAbout',
		message: 'Will this project have a license?',
		default: true
	},
	{
		type: 'list',
		name: 'license',
		message: 'What license will be used?',
		choices: ['MIT', 'ISC', 'Apache'],
		when: ({ confirmAbout }) => {
			if (confirmAbout) {
				return true;
			} else {
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'usage',
		message: 'How does your project operate?'
	},
	{
		type: 'input',
		name: 'installation',
		message: 'Are there any installation instructions?'
	},
	{
		type: 'input',
		name: 'contributing',
		message: 'What is required for someone to contribute to your project?'
	},
	{
		type: 'input',
		name: 'tests',
		message: 'How can you run tests?'
	},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, err => {
		if (err) throw err;
	})
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions).then((data) => {
		writeToFile('./dist/README.md', generateMarkdown(data))
	})
}

// Function call to initialize app
init();

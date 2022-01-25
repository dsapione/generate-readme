// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'What is the title?',
		validate: titleInput => {
			if (titleInput) {
				return true;
			} else {
				console.log('Please enter the title!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is your email?',
		validate: emailInput => {
			if (emailInput) {
				return true;
			} else {
				console.log('Please enter email address!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'github',
		message: 'What is your GitHub username?',
		validate: username => {
			if (username) {
				return true;
			} else {
				console.log('Please enter your username!');
				return false;
			}
		}
	},
	// {
	// 	type: '',
	// 	name: '',
	// 	message: '',
	// 	validate: cb => {
	// 		if (cb) {
	// 			return true;
	// 		} else {
	// 			console.log('');
	// 			return false;
	// 		}
	// 	}
	// },
	// {
	// 	type: '',
	// 	name: '',
	// 	message: '',
	// 	validate: cb => {
	// 		if (cb) {
	// 			return true;
	// 		} else {
	// 			console.log('');
	// 			return false;
	// 		}
	// 	}
	// },
	// {
	// 	type: '',
	// 	name: '',
	// 	message: '',
	// 	validate: cb => {
	// 		if (cb) {
	// 			return true;
	// 		} else {
	// 			console.log('');
	// 			return false;
	// 		}
	// 	}
	// },
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

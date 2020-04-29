const inquirer = require('inquirer');
inquirer
	.prompt([{
		type: 'input',
		name: 'username',
		message: 'Input your username',
		prefix: '> '
	}])
	.then(console.log)
	.catch(console.error);

inquirer.ui

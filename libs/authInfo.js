class Question {
	constructor(message = '', name = ''){
		if(!name) name = message;
		return {
			message: message,
			name: name,
			type: 'input',
			prefix: '> '
		}
	}
}

function authInfo(){
	return inquirer
		.prompt([
			new Question('JSESSIONID'),
			new Question('TS01f6c4db'),
			new Question('TS015f22e7'),
			new Question('TSefb86a71027')
		])
}

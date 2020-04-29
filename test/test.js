const request = require('request-promise-native');

let url = 'http://localhost:3000';

function cookie(url = '', cookie = []){
	let jar = request.jar();
	cookie.forEach(i => jar.setCookie(request.cookie(`${i[0]}=${i[1]}`), url));
	return jar;
}

let jar = cookie(url, [['asdf', 'qwer'], ['zxcvb', 'rtu']]);

request(url, {jar: jar}).then(console.log).catch(console.log);

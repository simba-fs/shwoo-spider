const request = require('request');

function cookie(cookie = [], url = ''){
	let jar = request.jar();
	cookie.forEach(i => jar.setCookie(request.cookie(`${i[0]}=${i[1]}`), url));
	return jar;
}

module.exports = cookie;

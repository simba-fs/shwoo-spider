function cookie(url = '', cookie = []){
	let jar = request.jar();
	cookie.forEach(i => jar.setCookie(request.cookie(`${i[0]}=${i[1]}`), url));
	return jar;
}

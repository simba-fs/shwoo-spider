const request = require('request-promise-native');
const cheerio = require('cheerio');
const cookie = require('./cookie.js');

function getUserInfo(id){
	
	if(!id) return new Promise((res, rej) => rej(new Error('id id empty')));
	
	let url = `https://shwoo.gov.taipei/shwoo/product/product00/product?AUID=${id}`;
	let jar = cookie([
		['JSESSIONID', '0DC40E3FE76705BCE85014ACB7FF8312'],
		['TS01f6c4db', '01ca5d79a1ca03e5b3f10c6799d4cce3e2bc0647725579a9d1938a8e316e0f0fe5bd41b12d8f9d8a9c2b00a1bb8eb3cb00d1564a211d9159aed0e7d646a33fd8e4af1501a9'],
		['TS015f22e7', '01ca5d79a15b527dd4660bc5063fc414377c239017b92d66aef36d8df9603679dd47190e2ff8885a21c6c79459db5fa25d3fe2013b'],
		['TSefb86a71027', '08d0cddcf0ab20004671bdb0f5dacba3ff5bb58f20cc6b9988e8fd3419970e73e6cbc7d286f17d500876a459dd113000dc07a206cfe548af87562cff0504dde68f7ebe569da6745e894686034576e66674fda303b9fcd51667d19ca6822ea226']
	], url);
	return request.get(url, {jar: jar}).then(cheerio.load).then($ => {
		// user
		let user = $('.login_out');

		let username = user.children().eq(0).children().eq(0).text()
			.replace(/[\n\t]*/g, '');
		if(/(停權期限至)/.test(username)){
			// not login success
			username = null;
		}else{
			username = username.slice(3, -2);
		}
		return new Promise((res, rej) => res({
			username
		}));
	});
}

module.exports = getUserInfo;

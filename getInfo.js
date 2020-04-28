const request = require('request-promise-native');
const cheerio = require('cheerio');

function getInfo(id){
	
	if(!id) return new Promise((res, rej) => rej(new Error('id id empty')));
		
	let url = `https://shwoo.gov.taipei/shwoo/product/product00/product?AUID=${id}`;
	return request.get(url).then(cheerio.load).then($ => {
		let $table = $('.itable2').children().eq(0);
	
		// item name
		let item = $table.children().eq(0).children().eq(1).text();
	
		// end Date
		let endDate = $table.children().eq(1).children().eq(3).text()
			.replace(/^[\w\/]*~/, '')
			.split(' ');
		endDate[0] = endDate[0].split('/');
		endDate[1] = endDate[1].split(':');
	
		// addr
		let addr = $table.children().eq(4).children().eq(1).text().trim();
	
		// addr2
		let addr2 = $table.children().eq(5).children().eq(1).text()
			.trim()
			.replace(/[\n]/g, ' ');
	
		// info
		let info = $('.active').children().eq(3).text();
	
		return new Promise((res, rej) => res({
			item,
			endDate,
			addr,
			addr2,
			info
		}));
	});
}

module.exports = getInfo;

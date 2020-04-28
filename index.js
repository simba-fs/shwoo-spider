const fs = require('fs');
let id = [];
if(fs.existsSync('./id.json')) id = require('./id.json');
const cron = require('node-cron');
const getInfo = require('./getInfo.js');

let spider = cron.schedule('0 * * * * *', () => {
	let info = [];
	id.slice().forEach(i => {
		info.push(getInfo(i))
	})
	Promise.all(info).then(data => {
		console.clear();
		console.count('time');
		for(let i of data) console.log(i);
	});
});

const fs = require('fs');
const cron = require('node-cron');
const getInfo = require('./libs/getInfo.js');

let id = [];
if(fs.existsSync('./id.json')) id = require('./id.json');

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

// server
const app = require('express')();
const path = require('path');

require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', require('./routes/index.js'));

app.listen(process.env.port, () => console.log(`server listen on ${process.env.port}`));

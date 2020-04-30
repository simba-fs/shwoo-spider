const router = require('express').Router();
const fs = require('fs');
const getInfo = require('../libs/getInfo');

let id = [];
if(fs.existsSync('./id.json')) id = require('../id.json');

router.get('/', (req, res, next) => {
	res.render('index');	
});

router.get('/monitor', (req, res, next) => {
	let info = [];
	id.slice().forEach(i => {
		info.push(getInfo(i))
	})
	Promise.all(info).then(data => {
		res.render('monitor', {data});
	});
});

module.exports = router;

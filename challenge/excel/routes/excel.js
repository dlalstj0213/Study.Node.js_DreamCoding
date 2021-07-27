const path = require('path');
const express = require('express');
const util = require('util');

const xlsx = require(path.join(process.cwd(), 'modules', 'excel.js'));
const Crawler = require(path.join(process.cwd(), 'modules', 'crawler.js'));
const router = express.Router();

router.get('/excel', async (req, res) => {
	console.log('CONNECT GET : /excel');
	const crawler = new Crawler();
	let rankList = [];
	try {
		rankList = await crawler.crawl(
			{ handless: false }
			//{ field1: '화장품/미용', field2: '스킨케어' }
		);
		console.log('WHY?');
		const workbook = await xlsx.write(rankList);
		return res.status(201).json(rankList);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
});

router.post('/excel', (req, res) => {
	console.log('POST: /excel');
	res.status(201).send('POST: /excel');
});

//module.exports.router = router;
module.exports = router;

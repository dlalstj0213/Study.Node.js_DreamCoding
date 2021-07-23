const path = require('path');
const express = require('express');
const util = require('util');

const Excel = require(path.join(process.cwd(), 'modules', 'excel.js'));
const Crawler = require(path.join(process.cwd(), 'modules', 'crawler.js'));
const router = express.Router();

router
	.route('/')
	.get(async (req, res) => {
		const a = await Excel.write({ head: 1 });
		const crawler = new Crawler();
		let rankList = [];
		try {
			rankList = await crawler.crawl(
				{ handless: true },
				{ field1: '화장품/미용', field2: '스킨케어' }
			);
		} catch (error) {
			console.log(error);
			return res.status(500).send(error);
		}
		console.log(util.inspect(rankList, { depth: 5 }));

		res.status(201).json(rankList);
	})
	.post((req, res) => {
		res.status(201).send('POST: /excel');
	});

module.exports.router = router;
// module.exports = router;

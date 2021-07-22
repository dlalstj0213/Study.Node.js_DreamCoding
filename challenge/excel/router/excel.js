const express = require('express');
const Excel = require('../modules/excel.js');
const router = express.Router();

router
	.route('/')
	.get(async (req, res) => {
		const a = await Excel.write({ head: 1 });
		res.status(201).json({ msg: 'GET: /excel' });
	})
	.post((req, res) => {
		res.status(201).send('POST: /excel');
	});

module.exports.router = router;
// module.exports = router;

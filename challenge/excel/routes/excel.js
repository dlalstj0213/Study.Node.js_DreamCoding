const path = require('path');
const express = require('express');
const util = require('util');

const Excel = require('exceljs');
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
		const workbook = await xlsx.write(rankList); // 이 코드를 추가하면 무한 통신 발생, 즉, 파일 쓰기 함수를 사용하면 무한루프 걸림
		return res.status(201).json(rankList);
	} catch (error) {
		console.log(error);
		return res.status(500).send(error);
	}
});

router.post('/excel', async (req, res) => {
	const testData = [
		{
			page: 1,
			items: [
				{ rank: '1', keyword: '원피스' },
				{ rank: '2', keyword: '써스데이아일랜드원피스' },
				{ rank: '3', keyword: '반바지' },
				{ rank: '4', keyword: '여름원피스' },
				{ rank: '5', keyword: '반팔티' },
				{ rank: '6', keyword: '블라우스' },
				{ rank: '7', keyword: '롱원피스' },
				{ rank: '8', keyword: '남자반팔티' },
				{ rank: '9', keyword: '남자반바지' },
				{ rank: '10', keyword: '라코스테원피스' },
				{ rank: '11', keyword: '여성점프수트' },
				{ rank: '12', keyword: '강블리gbl남여공용무지반팔7색' },
				{ rank: '13', keyword: '팬츠' },
				{ rank: '14', keyword: '플라스틱아일랜드원피스' },
				{ rank: '15', keyword: '여성반바지' },
				{ rank: '16', keyword: '메종키츠네반팔' },
				{ rank: '17', keyword: '뷔스티에원피스' },
				{ rank: '18', keyword: '브라렛' },
				{ rank: '19', keyword: '린넨원피스' },
				{ rank: '20', keyword: '스포츠브라' },
			],
		},
	];

	const options = {
		filename: './streamed-test.xlsx',
		useStyles: true,
		useSharedStrings: true,
	};
	const workbook = new Excel.Workbook();
	const worksheet = workbook.addWorksheet('TOP500-테스트');
	const workSheetColums = [
		{ header: '순위', key: 'rank' },
		{ header: '검색어', key: 'keyword' },
	];
	worksheet.columns = workSheetColums;
	testData.forEach((el) => {
		el.items.forEach((item) => {
			worksheet.addRow({ rank: item.rank, keyword: item.keyword }).commit();
		});
	});

	// await workbook
	// 	.commit()
	// 	.then(() => {
	// 		console.log('xlsx written');
	// 	})
	// 	.catch(console.error);

	res.setHeader(
		'Content-Type',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	);
	res.setHeader(
		'Content-Disposition',
		'attachment; filename=' + options.filename
	);
	return workbook.xlsx.write(res).then(function () {
		res.status(200).end();
	});
});

//module.exports.router = router;
module.exports = router;

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const puppeteer = require('puppeteer');
const util = require('util');
const fs = require('fs');
const url = require('../json/url.json');

const maxTotal = 500;
const selectors = {
	rank_btn_next: 'a.btn_page_next',
	rank_list_root: 'ul.rank_top1000_list li',
	rank_item_span: 'span.rank_top1000_num',
	search_category_field1:
		'#content > div.section_instie_area.space_top > div > div.section.insite_inquiry > div > div > div:nth-child(1) > div > div:nth-child(1) > ul > li',
	search_category_field2:
		'#content > div.section_instie_area.space_top > div > div.section.insite_inquiry > div > div > div:nth-child(1) > div > div:nth-child(2) > ul > li',
	search_field_a: 'a.option',
	search_category_field3:
		'#content > div.section_instie_area.space_top > div > div.section.insite_inquiry > div > div > div:nth-child(1) > div > div:nth-child(3) > ul > li',
	search_btn_submit:
		'#content > div.section_instie_area.space_top > div > div.section.insite_inquiry > div > a',
};

class Crawler {
	constructor() {}

	/**
	 * @param opt {{
	 * 		handless:true|false, each:Number, page:true|false
	 * }}
	 * @param search {{
	 * 		field1:string, field2:string, field3:string,
	 * 		timeUnit:string, timeRange:string, startDate:string,
	 * 		endDate:string, device:string, gender:string,
	 * 		age:string
	 * }}
	 */
	async crawl(opt, search) {
		console.log(
			'RUN crawler... | target url:',
			url.NAVER_DATALAB_SHOPPING_INSIGHT_CATEGORY
		);

		// Validation : 파라미터 유효성 검사
		validateParams(opt, search, (a, b) => {
			opt = a;
			search = b;
		});

		const browser = await puppeteer.launch({
			headless: false,
			args: ['--window-size=1920,1080', '--disable-notifications'],
		});

		const page = await browser.newPage();

		await page.setViewport({
			width: 1820,
			height: 880,
		});

		await page.goto(url.NAVER_DATALAB_SHOPPING_INSIGHT_CATEGORY, {
			waitUntil: 'networkidle2',
		});
		await page.waitForTimeout(5000);
		//await page.waitForSelector(selectors.rank_list_root);

		await clickSearchParams(page, search);

		await page.$eval(selectors.search_btn_submit, (element) => {
			element.click();
		});
		await page.waitForSelector(selectors.rank_list_root);

		let rankList = [];
		for (let i = 0; i < 25; i++) {
			if (i !== 0) {
				await page.click(selectors.rank_btn_next);
				await page.waitForSelector(selectors.rank_list_root);
			}
			let rankli = await page.$$(selectors.rank_list_root, function (element) {
				return element.children;
			});

			let items = {};
			items.page = i + 1;
			items.items = [];
			for (let el of rankli) {
				let obj = {};
				obj.rank = await el.$eval(selectors.rank_item_span, (element) => {
					return element.innerText;
				});
				obj.keyword = await el.$eval(selectors.rank_item_span, (element) => {
					return element.nextSibling.data.trim();
				});
				items.items.push(obj);
			}
			rankList.push(items);
		}

		console.log(util.inspect(rankList, { depth: 5 }));

		//await page.close();
		//await browser.close();
		console.log('CLOSE crawler...');
	}
}

function validateParams(opt, search, callback) {
	opt = opt ? opt : {};
	opt instanceof Array
		? new Error(
				'wrong parameter type of opt. please set array to json ( [] -> {} )'
		  )
		: opt;
	opt = {
		handless: opt.handless ? opt.handless : false,
		each: [20, 50, 100].includes(opt.each) ? opt.each : 20,
		page: opt.page ? opt.page : true,
	};
	search = search ? search : {};
	search instanceof Array
		? new Error(
				'wrong parameter type of search. please set array to json ( [] -> {} )'
		  )
		: search;
	search = {
		field1: search.field1 ? search.field1 : '패션의류',
		field2: search.field2 ? search.field2 : '',
		field3: search.field2 && search.field3 ? search.field3 : '',
		timeUnit: search.timeUnit ? search.timeUnit : '일간',
		timeRange: search.timeRange ? search.timeRange : '1개월',
		startDate: search.yyyyMmDd ? search.yyyyMmDd : '',
		endDate: search.endDate ? search.endDate : '',
		device: search.device ? search.device : '',
		gender: search.gender ? search.gender : '',
		age: search.age ? search.age : '',
	};
	/**
	 * 검색 조건별 분야, 기간 값 세팅해야함
	 */
	return callback(opt, search);
}

async function clickSearchParams(page, search) {
	if (search.hasOwnProperty('field1')) {
		// 제 1분류 selectBox의 data list 조회
		let dataCid = await getFieldList(page, selectors.search_category_field1);
		console.log(dataCid);

		if (search.field1 !== '') {
			const cid = dataCid[search.field1];
			await page.$eval(`a[data-cid="${cid}"]`, (element) => {
				element.click();
			});
			await page.waitForSelector(selectors.search_category_field2);
		}
	}

	if (search.hasOwnProperty('field2') && search.field2 !== '') {
		// 제 2분류 selectBox의 data list 조회
		let dataCid = await getFieldList(page, selectors.search_category_field2);

		if (search.field2 !== '') {
			const cid = dataCid[search.field2];
			await page.$eval(`a[data-cid="${cid}"]`, (element) => {
				element.click();
			});
			await page.waitForSelector(selectors.search_category_field3);
		}
		console.log(dataCid);
	}

	if (
		search.hasOwnProperty('field3') &&
		search.field2 !== '' &&
		search.field3 !== ''
	) {
		// 제 3분류 selectBox의 data list 조회
		let dataCid = await getFieldList(page, selectors.search_category_field3);

		if (search.field3 !== '') {
			const cid = dataCid[search.field3];
			await page.$eval(`a[data-cid="${cid}"]`, (element) => {
				element.click();
			});
			await page.waitForTimeout(3000);
		}

		console.log(dataCid);
	}
}

async function getFieldList(page, selectorParent) {
	let dataCid = {};
	let fieldList = await page.$$(selectorParent, function (element) {
		return element.children;
	});
	for (let el of fieldList) {
		let key = await el.$eval(selectors.search_field_a, (element) => {
			return element.innerText;
		});
		let val = await el.$eval(selectors.search_field_a, (element) => {
			return element.getAttribute('data-cid');
		});
		dataCid[key] = val;
	}
	return dataCid;
}

// 로그 찍기
function setLog(html) {
	const logDir = './log';
	!fs.existsSync(logDir) && fs.mkdirSync(logDir);
	fs.promises.writeFile(logDir + '/crawl_log.html', html).catch(console.error);
}

//module.exports.Crawler = Crawler;
export { Crawler };

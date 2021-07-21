const puppeteer = require('puppeteer');
const util = require('util');
const fs = require('fs');

/**
 * 서버에서 puppeteer를 사용할 경우,
 * puppeteer를 npm에서 install하개 되면 자동으로 chromium(크롬 브라우저 기반) 브라우저도 같이 설치되기 때문에
 * 서버에서 가동할 경우 서버 용량이 커야한다. (브라우저를 활용하기 때문에 메모리를 많이 먹는 현상 발생, 1GB 정도 확보 필요)
 */
class Crawler {
	constructor(TARGET_URL) {
		this.TARGET_URL = TARGET_URL;
	}

	async crawl() {
		console.log('RUN crawler... | target url:', this.TARGET_URL);

		// 브라우저 실행
		const browser = await puppeteer.launch({
			headless: false, // false: 화면 핸들링 모습 보여주지않음, true: 화면 핸들링 모습 숨김
			args: ['--window-size=1920,1080', '--disable-notifications'], // window 창 크기 설정
		});

		// 새로운 페이지 호출
		// 한 번 더 newPage()를 호출하면 탭으로 페이지를 열수있음 (즉, 다중 페이지 컨트롤이 가능하다)
		const page = await browser.newPage();

		// 페이지 크기 설정
		/*
		await page.setViewport({
			width: 1920,
			height: 1080,
		});
    */

		// 페이지 접속
		/**
		 * waitUntil 옵션:
		 * load : load 이벤트가 시작되면 탐색이 완료되는 것으로 간주한다.
		 * docntentload : HTML 문서가 완전히 로드 및 파싱되었을 경우(DOMContentLoaded 이벤트) 탐색이 완료되는 것으로 간주한다.
		 * networkidle0 : 최소한 500ms 동안 네트워크 연결이 0개 이상 없을때 탐색이 완료되는 것으로 간주한다.
		 * notworkidle2 : 최소한 500ms 동안 두 개 이상의 네트워 연결이 없을 때 탐색이 완료되는 것으로 간주한다.
		 */
		await page.goto(this.TARGET_URL, { waitUntil: 'networkidle2' });
		//await page.waitForTimeout(3000);
		await page.waitForSelector('ul.rank_top1000_list li');

		// 페이지 파싱
		//const html = await page.content();
		// 로그 찍기
		//setLog(html);

		let rankList = [];
		for (let i = 0; i < 25; i++) {
			if (i !== 0) {
				await page.click('a.btn_page_next');
				await page.waitForSelector('ul.rank_top1000_list li');
			}
			let rankli = await page.$$('ul.rank_top1000_list li', function (element) {
				return element.children;
			});

			let items = {};
			items.page = i + 1;
			items.items = [];
			for (let el of rankli) {
				let obj = {};
				obj.rank = await el.$eval('span.rank_top1000_num', (element) => {
					return element.innerText;
				});
				obj.keyword = await el.$eval('span.rank_top1000_num', (element) => {
					return element.nextSibling.data.trim();
				});
				items.items.push(obj);
			}
			rankList.push(items);
		}

		console.log(util.inspect(rankList, { depth: 5 }));

		await page.close();
		await browser.close();
		console.log('CLOSE crawler...');
	}
}

// 로그 찍기
function setLog(html) {
	const logDir = './log';
	!fs.existsSync(logDir) && fs.mkdirSync(logDir);
	fs.promises.writeFile(logDir + '/crawl_log.html', html).catch(console.error);
}

module.exports.Crawler = Crawler;

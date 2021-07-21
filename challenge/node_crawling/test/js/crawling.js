const axios = require('axios');
const cheerio = require('cheerio');

class CrawlingAxios {
	constructor(TARGET_URL) {
		this.TARGET_URL = TARGET_URL;
	}

	async crawl(method, req) {
		try {
			if (method === 'get') {
				return await axios.get(this.TARGET_URL);
			} else if (method === 'post') {
				return await axios.post(this.TARGET_URL, req);
			}
		} catch (error) {
			console.log(error);
		}
		return new Promise((resolve, reject) => {
			return reject('No matching method found.');
		});
	}

	async getHtml() {
		return await this.crawl('get').then((html) => {
			let ulList = [];

			const $ = cheerio.load(html.data);
			const $bodyList = $('div.title_list');

			$bodyList.each(function (i, element) {
				ulList[i] = {
					rank: 'test',
					//rank: $(this).find('span.rank_top1000_num').text(),
					//name: $(this).find('h3.list a.list_area').text(),
				};
			});

			return ulList;
		});
	}

	postHtml() {
		//this._postHtml().then((res) => console.log(res));
	}
}

module.exports.CrawlingAxios = CrawlingAxios;

const axios = require('axios');
const cheerio = require('cheerio');

class Crawling {
	constructor(TARGET_URL) {
		this.TARGET_URL = TARGET_URL;
		this._getHtml = async () => {
			try {
				return await axios.get(this.TARGET_URL);
			} catch (error) {
				console.log(error);
			}
		};
		this._postHtml = async () => {
			try {
				return await axios.post(this.TARGET_URL, {
					cid: 50000000,
					//timeUnit: 'date',
					startDate: '2021-06-17',
					endDate: '2021-07-17',
					page: 1,
					count: 20,
				});
			} catch (error) {
				console.log(error);
			}
		};
	}

	async getHtml() {
		return await this._getHtml().then((html) => {
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

module.exports.Crawling = Crawling;

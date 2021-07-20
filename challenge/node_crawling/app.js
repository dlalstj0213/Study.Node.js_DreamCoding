console.log('node start!');

/*
const crawling = require('./js/crawling.js');
const naver = new crawling.CrawlingAxios(
	'https://datalab.naver.com/shoppingInsight/sCategory.naver'
);

const result = naver.getHtml();
result.then(console.log);
*/

// https://datalab.naver.com/shoppingInsight/getCategoryKeywordRank.naver
/*
cid: 50000000
timeUnit: date
startDate: 2021-06-18
endDate: 2021-07-18
age: 
gender: 
device: 
page: 1
count: 20
 */

const crawler = require('./js/crawler.js');

const naverCrawler = new crawler.Crawler(
	'https://datalab.naver.com/shoppingInsight/sCategory.naver'
);

naverCrawler.crawl().catch(console.error);

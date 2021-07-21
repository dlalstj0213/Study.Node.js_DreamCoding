import { Crawler } from './res/js/crawler.js';

const crawler = new Crawler();
crawler.crawl(
	{ handless: true },
	{ field1: '화장품/미용', field2: '스킨케어' }
);

const dotenv = require('dotenv');
// import dotenv from 'dotenv';

dotenv.config();

function required(key, defaultValue = undefined) {
	const value = process.env[key] || defaultValue;
	if (value == null) throw new Error(`Key ${key} is undefined`);
	return value;
}

const config = {
	bigkinds: {
		baseURL: required('BIGKINDS_BASE_URL'),
		imageURL: required('BIGKINDS_IMAGE_URL'),
		accessKey: required('BIGKINDS_ACCESS_KEY'),
		searchNews: required('BIGKINDS_SEARCH_NEWS'),
		issueRanking: required('BIGKINDS_ISSUE_RANKING'),
		wordCloud: required('BIGKINDS_WORD_CLOUD'),
		timeLine: required('BIGKINDS_TIME_LINE'),
		queryRank: required('BIGKINDS_QUERY_RANK'),
		searchQuotation: required('BIGKINDS_SEARCH_QUOTATION'),
		todayCategoryKeyword: required('BIGKINDS_TODAY_CATEGORY_KEYWORD'),
		feature: required('BIGKINDS_FEATURE'),
		keyword: required('BIGKINDS_KEYWORD'),
		topnKeyword: required('BIGKINDS_TOPN_KEYWORD'),
	},
};
Object.freeze(config);

module.exports.config = config;

const { config } = require('../config');
const axios = require('axios');

/**
 * 빅카인즈 OPEN API 요청 타입
 */
const REQUEST_TYPE = {
	SEARCH_NEWS: Symbol(),
	SEARCH_NEWS_DETAIL: Symbol(),
	ISSUE_RANKING: Symbol(),
	WORD_CLOUD: Symbol(),
	TIME_LINE: Symbol(),
	QUERY_RANK: Symbol(),
	SEARCH_QUOTATION: Symbol(),
	TODAY_CATEGORY_KEYWORD: Symbol(),
	FEATURE: Symbol(),
	KEYWORD: Symbol(),
	TOPN_KEYWORD: Symbol(),
};
Object.freeze(REQUEST_TYPE);

/**
 * 빅카인즈 OPEN API 클라이언트 클래스
 */
class BigKindsClient {
	/**
	 * REQUEST_TYPE 타입의 매개변수 입력 필수
	 * @param {REQUEST_TYPE} requestType
	 */
	constructor(requestType) {
		this.baseURL = config.bigkinds.baseURL;
		this.accessKey = config.bigkinds.accessKey;
		this.requestType = requestType;

		switch (this.requestType) {
			case REQUEST_TYPE.SEARCH_NEWS:
				this.endPoint = config.bigkinds.searchNews;
				break;
			case REQUEST_TYPE.SEARCH_NEWS_DETAIL:
				this.endPoint = config.bigkinds.searchNews;
				break;
			case REQUEST_TYPE.ISSUE_RANKING:
				this.endPoint = config.bigkinds.issueRanking;
				break;
			case REQUEST_TYPE.WORD_CLOUD:
				this.endPoint = config.bigkinds.wordCloud;
				break;
			case REQUEST_TYPE.TIME_LINE:
				this.endPoint = config.bigkinds.timeLine;
				break;
			case REQUEST_TYPE.QUERY_RANK:
				this.endPoint = config.bigkinds.queryRank;
				break;
			case REQUEST_TYPE.SEARCH_QUOTATION:
				this.endPoint = config.bigkinds.searchQuotation;
				break;
			case REQUEST_TYPE.TODAY_CATEGORY_KEYWORD:
				this.endPoint = config.bigkinds.todayCategoryKeyword;
				break;
			case REQUEST_TYPE.FEATURE:
				this.endPoint = config.bigkinds.feature;
				break;
			case REQUEST_TYPE.KEYWORD:
				this.endPoint = config.bigkinds.keyword;
				break;
			case REQUEST_TYPE.TOPN_KEYWORD:
				this.endPoint = config.bigkinds.topnKeyword;
				break;
			default:
				throw new Error(
					'FAIL constructor() :: check constructor parameter which has to be REQUEST_TYPE type'
				);
		}
	}

	/**
	 * API 호출
	 * @param {*} options
	 * @returns
	 */
	request = async function (options) {
		const body = {
			access_key: this.accessKey,
			argument: { ...options },
		};
		let response;
		try {
			response = await axios.post(`${this.baseURL}${this.endPoint}`, {
				...body,
			});
		} catch (error) {
			throw new Error(error.toString());
		}

		const data = response.data;

		if (data.result === -1)
			throw new Error(`result: ${data.result} >> reason: ${data.reason}`);
		if (response.status !== 200)
			throw new Error(`response status: ${response.status}`);

		return data.return_object;
	};
}

module.exports.BigKindsClient = BigKindsClient;
module.exports.REQUEST_TYPE = REQUEST_TYPE;

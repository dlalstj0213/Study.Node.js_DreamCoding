const { REQUEST_TYPE, BigKindsClient } = require('./bigkinds_client');

const input = '웹 개발자';

const bigkinds = new BigKindsClient(REQUEST_TYPE.SEARCH_NEWS);
//bigkinds.request({});
let arguemnt = {
	query: '카카오톡', // 필수
	published_at: {
		// 필수 YYYY-MM-DD
		from: '2019-01-01',
		until: '2019-03-31',
	},
	provider: [],
	category: [],
	category_incident: [],
	byline: '',
	provider_subject: [],
	subject_info: [],
	subject_info1: [],
	subject_info2: [],
	subject_info3: [],
	subject_info4: [],
	sort: { date: 'desc', _score: 'desc' },
	hilight: 200,
	return_from: 0, // 필수
	return_size: 5, // 필수
	fields: [], // 필수
};

(async () => {
	try {
		var res = await bigkinds.request(arguemnt);
		console.log(res);
	} catch (e) {
		// Deal with the fact the chain failed
	}
})();

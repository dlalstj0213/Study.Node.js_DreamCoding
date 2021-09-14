const { REQUEST_TYPE, BigKindsClient } = require('./bigkinds_client');

const input = '카카오톡 취업하기';
// (async () => {
// 	const bigkinds = new BigKindsClient(REQUEST_TYPE.SEARCH_NEWS);
// 	//bigkinds.request({});
// 	let arguemnt = {
// 		query: '카카오톡', // 필수
// 		published_at: {
// 			// 필수 YYYY-MM-DD
// 			from: '2019-01-01',
// 			until: '2019-03-31',
// 		},
// 		provider: [],
// 		category: [],
// 		category_incident: [],
// 		byline: '',
// 		provider_subject: [],
// 		subject_info: [],
// 		subject_info1: [],
// 		subject_info2: [],
// 		subject_info3: [],
// 		subject_info4: [],
// 		sort: { date: 'desc', _score: 'desc' },
// 		hilight: 200,
// 		return_from: 0, // 필수
// 		return_size: 5, // 필수
// 		fields: [], // 필수
// 	};

// 	try {
// 		const res = await bigkinds.request(arguemnt);
// 		console.log(res);
// 	} catch (e) {
// 		// Deal with the fact the chain failed
// 	}
// })();

// (async () => {
// 	const bigkinds = new BigKindsClient(REQUEST_TYPE.TODAY_CATEGORY_KEYWORD);
// 	let argument = {};
// 	const res = await bigkinds.request(argument);
// 	console.log(res);
// })();

const { commonUtil } = require('../utils/common');

// 1.
let keywords =
	'항공기|0.1714048555587672 항공기_대규모_결항|0.17083741949082015 대규모|0.1702700199700766 항공기_대규모|0.15692294958078706 532편_결항|0.14910529827199845 솔릭|0.1396095846626425 태풍_솔릭|0.10714353565037664 결항|0.0020622143949391588 태풍|0.001001650421856614';
let k = commonUtil.getKeywords(keywords, ' ', '|');

console.log(k.join(' '));

const query = commonUtil.objToSearch(k);

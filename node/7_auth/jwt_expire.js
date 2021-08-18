const jwt = require('jsonwebtoken');

const secret = 'oxetLfW@#nV#*XscK@Eb9CvQF!uGOXZ2';
const token = jwt.sign(
	{
		id: 'minseo',
		isAdmin: false,
	},
	secret, // 임의의 토큰 키 만들기
	{ expiresIn: 2 } // 토큰 만료 시간 추가, 2초 (초단위)
);

console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1pbnNlbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjkyODg3MzV9.1Jyb6HuS-VUFTpaZe7YOY3USbZ6nfgOet3PfZloieqo

// 만료시간 테스트
// 3초 후 토큰 검사
setTimeout(() => {
	jwt.verify(token, secret, (error, decoded) => {
		console.log(error, decoded);
	});
}, 3000);
// 토큰만료 에러 발생: TokenExpiredError: jwt expired

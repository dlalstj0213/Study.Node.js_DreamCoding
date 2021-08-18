const jwt = require('jsonwebtoken');

const secret = 'oxetLfW@#nV#*XscK@Eb9CvQF!uGOXZ2';
const token = jwt.sign(
	{
		id: 'minseo',
		isAdmin: false,
	},
	secret, // 임의의 토큰 키 만들기
	{ expiresIn: 2 }
);

console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1pbnNlbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjkyODg3MzV9.1Jyb6HuS-VUFTpaZe7YOY3USbZ6nfgOet3PfZloieqo

// 위의 jwt 값을 복사하고 https://jwt.io/ 에서 해독기를 돌려보자

// 해독기에서 isAdmin의 값을 true로 바꾼 인코드 값을 가져옴
const hacking =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1pbnNlbyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTI4ODczNX0.7rxBgNJugkis3k9_YI7Lf387J_N0Q1-B7NN8IVRxDVQ';

// 토큰 검사
jwt.verify(hacking, secret, (error, decoded) => {
	console.log(error, decoded);
});
// 에러 발생: JsonWebTokenError: invalid signature
// 즉, 한 번 발행된 토큰은 변경되면 안된다.

const rightToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1pbnNlbyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MjkyODg3MzV9.1Jyb6HuS-VUFTpaZe7YOY3USbZ6nfgOet3PfZloieqo';
// 올바른 토큰 검사
jwt.verify(rightToken, secret, (error, decoded) => {
	console.log(error, decoded);
});

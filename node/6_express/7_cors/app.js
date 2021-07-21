import express from 'express';
import cors from 'cors';
const app = express();

/**
 * CORS란?
 * Cross-origin resource sharing
 * 클라이언트가 서버와 동일한 IP 또는 도메인을 사용하고 있다면 리소스를 제약없이 공유할 수 있지만,
 * 만일 다르다면 원칙적으로 공유가 불가능하다.
 * 그래서 서버가 클라이언트에게 반응을 보낼때 Access-Control-Allow-Origin을 헤더에 추가해 줘야한다.
 */

// 예시 1. 매우 불편
/*
app.use((req, res, next) => {
	console.log('run');
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
	res.setHeader(
		'Access-Control-Allow-Methods',
		'OPTIONS, GET, POST, PUT, DELETE'
	);
	next();
});
*/

// 예시 2. cors 라이브러리 사용 // npm i cors
app.use(
	cors({
		origin: ['http://127.0.0.1:5500'],
		optionsSuccessStatus: 200, // 자동 응답 설정
		credentials: true, // 'Access-Control-Allow-Origin' 동일
	})
); //option도 사용 가능 (origin: 해당 url에서만 공유 가능하게 설정)

app.get('/', (req, res) => {
	res.send('Welcome!');
});

app.listen(8080);

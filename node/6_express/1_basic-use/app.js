import express from 'express';

const app = express();

/**
 * all() 과 use()의 차이점
 */

// '/all' url 경로 한해서만 처리된다.
// 물론 '/all/*' 이와 같이 명시한다면 하위 경로도 처리가능
app.all('/all', (req, res, next) => {
	console.log('all');
	next();
});

// '/use/*' url 경로와 그 하위 경로까지 처리된다.
app.use('/use', (req, res, next) => {
	console.log('use');
	next();
});

/**
 * express의 미들웨어는 설정된 순서에 따라 실행됨을 알 수 있다.
 */

// 배열 형태로도 콜백 함수 정의 가능
app.get(
	'/',
	(req, res, next) => {
		console.log('first-1');
		next();
		// next('route'); //하단의 seconde로 넘어감
		//next(new Error('error'));
	},
	(req, res, next) => {
		// 조건에 따라 응답처리 할시 꼭 return 을 해주자 (안하면 에러남)
		// ex) http://localhost:8080/?id=true
		console.log('first-2');
		if (req.query.id === 'test') {
			return res.send('True');
		}
		res.send('False');
	}
);

app.get('/', (req, res, next) => {
	console.log('second');
});

// error 핸들러
app.use((error, req, res, next) => {
	console.error(error);
	res.status(500).send('Sorry, try later!');
});

app.use((req, res, next) => {
	res.status(400).send('Not available!');
});

/*
app.get('/sky/:id', (req, res, next) => {
	//console.log(req.path);
	//console.log(req.headers);
	console.log(req.params, req.params.id);
	console.log(req.query);

	res.setHeader('key', 'value');
	res.status(201).send('created');
});
*/

app.listen(8080);

import express from 'express';
import fs from 'fs';

const app = express();

/**
 * express@5.0.0 알파 버전 테스트
 */

app.use(express.json());

app.get('/file', (req, res) => {
	// 콜백
	fs.readFile('file1.txt', (err, data) => {
		if (err) res.sendStatus(404);
	});
});

app.get('/file1', (req, res) => {
	// 동기
	try {
		const data = fs.readFileSync('/file1.txt');
		res.send(data);
	} catch (error) {
		res.sendStatus(404);
	}
});

app.get('/file2', (req, res) => {
	// 비동기 promise
	/*
	fs.promises
		.readFile('/file2.txt') //
		.then((data) => res.send(data));
	*/
	return fs.promises
		.readFile('/file2.txt') //
		.then((data) => res.send(data));
});

// await / async
app.get('/file3', async (req, res) => {
	const data = await fs.promises.readFile('/file2.txt');
	res.sendDate(data);
});

app.use((error, req, res, next) => {
	console.log(error);
	res.status(500).json({ message: 'Something went wrong' });
});

/**
 * 결과:
 * 현재 2021-07-20,
 * promise는 에러 핸들링이 되지 않고 (그렇다면 해당 미들웨어에서 예외처리해줘야함)
 * async는 에러 핸들링이 됨을 확인 할 수 있다.
 * (http://localhost:8080/file3 호출후 에러발생시 use() 미들웨어로 넘어감)
 *
 * 하지만 promise가 정의된 미들웨어에서 해당 Promise를 return 하게 되면
 * 다음 미들웨어로 잘 넘어감
 *
 * 즉, use()로 한곳에 에러처리 미들웨어에 넘기고 싶을시에는
 * 해당 Promise를 return 하던지
 * 아니면 async를 표기해주면 원하는 에러처리가 가능하다.
 */

/**
 * 만일 express 5버전 이하 버전 사용시에 해당 에러 프로세스를 구현하고 싶다면
 * express-async-errors 라이브러리를 설치 후,
 * import 'express-async-errors' 만 해주면 자동 적용된다.
 */
app.listen(8080);

import express from 'express';
import fs from 'fs';

const app = express();

/**
 * 처리하고 있는 미들웨어에서 예상/발생 할 수 있는 예외들은
 * 그 에러에 대한 예외처리를 적절히 해줘야한다.
 * 그래야 예외 별로 사용자에게 적절한 status code나 메시지를 줄수 있다.
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
	fs.promises
		.readFile('/file2.txt') //
		.then((data) => res.send(data))
		.catch((error) => res.sendStatus(404));
});

// await / async
app.get('/file3', async (req, res) => {
	try {
		const data = await fs.promises.readFile('/file2.txt');
		res.sendDate(data);
	} catch (error) {
		res.sendStatus(404);
	}
});

/**
 * 만일 예외처리가 안돼있을 경우
 * 안전하게 use()로 처라해놓는 것도 하나의 방법이다
 * (예외 처리가 되어있지 않을 경우 서버가 다운 될 수 있으니 주의하자)
 *
 * 하지만 이 방법은 예외처리가 안되어있는 비동기나 Promise 같은 경우
 * 해당 use()로 넘어오지 않는다는 것을 주의하자.
 * (express@5.x.x 부터는 에러 핸들러를 지원한다고 한다.)
 */
app.use((error, req, res, next) => {
	console.log(error);
	res.status(500).json({ message: 'Something went wrong' });
});

app.listen(8080);

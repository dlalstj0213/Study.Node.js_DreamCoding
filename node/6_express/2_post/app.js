import express from 'express';

const app = express();

/**
 * 그냥 req.body를 가져오면 undifined가 뜬다
 * express에서 바디의 json 내용을 읽기 위해서는
 * 아래의 코드와 같이 먼저 body의 내용을 express.json으로 파싱후
 * 다음 미들웨어로 넘겨준다.
 */
app.use(express.json());
app.post('/post', (req, res, next) => {
	console.log(req.body);
	res.status(201).json(req.body);
});

app.listen(8080);

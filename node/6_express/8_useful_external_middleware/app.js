import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // 쿠키를 읽고 파싱해주는 모듈
import morgan from 'morgan'; // 클라이언트에게 어떤 요청을 받았고 얼마나 걸리는지 등 로그를 남겨줌
import helmet from 'helmet'; // 공통적으로 보안에 필요한 헤드 설정을 해줌

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('combined'));
app.use(morgan('tiny'));

app.use(
	cors({
		origin: ['http://127.0.0.1:5500'],
		optionsSuccessStatus: 200,
		credentials: true,
	})
);
app.use(helmet());

app.get('/', (req, res) => {
	console.log(req.body); // body를 보기 위해서는 app.use(express.json()) 을 정의해줘야한다.
	console.log(req.cookies); // 쿠키를 보기 위해서는 cookie-parser 라이브러리를 사용해서 app.use(cookieParser()); 를 정의해줘야한다.
	res.send('Welcome!');
});

app.listen(8080);

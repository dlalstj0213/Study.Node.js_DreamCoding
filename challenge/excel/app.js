const express = require('express');
const cors = require('cors');
const excelRouter = require('./router/excel.js');
const app = express();

app.use(
	cors({
		//origin: ['http://127.0.0.1:5500'],
		//optionsSuccessStatus: 200, // 자동 응답 설정
		credentials: true, // 'Access-Control-Allow-Origin' 동일
	})
);
app.use(express.json());

app.use('/excel', excelRouter.router);
// app.use('/excel', excelRouter);

app.listen(8080);

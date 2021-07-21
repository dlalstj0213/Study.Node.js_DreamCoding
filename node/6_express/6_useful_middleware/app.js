import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json()); // RES API -> Body parsing func
app.use(express.urlencoded({ extended: false })); //	HTML FORM -> Body parsing func

const options = {
	dotfiles: 'ignore', // 숨겨진 파일 무시하기
	etag: false,
	index: false,
	maxAge: '1d', // 캐시 주기
	redirect: false,
	setHeader: function (res, path, stat) {
		// 헤더에 필요한 데이터 설정
		res.set('x-timestamp', Date.now());
	},
};
// 최상위 폴더기준(root) 'public' 폴더 하위에 클라이언트가 데이터를 받을 수 있게 처리해줌
// option을 통해 더 다양한 설정 가능
app.use(express.static('./6_useful_middleware/public'));
// (express.static) try this url : http://localhost:8080/index.html / http://localhost:8080/table.jpg

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(8080);

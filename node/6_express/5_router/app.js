import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';

const app = express();

app.use(express.json());

/*
// 이러한 방식으로 중복적인 url은 route()로 처리 가능
app
	.route('/posts')
	.get((req, res) => {
		res.status(201).send('GET: /posts');
	})
	.post((req, res) => {
		res.status(201).send('POST: /posts');
	});

app
	.route('/posts/:id')
	.put((req, res) => {
		res.status(201).send('PUT: /posts/:id');
	})
	.delete((req, res) => {
		res.status(201).send('DELETE: /posts/:id');
	});
// 하지만 이렇게 한 파일에서 모든 url을 처리하는 것은 관리하기도 힘들고 가독성도 떨어지니
// 아래의 예시 코드와 /5_router/router 폴더를 확인해보자
*/

app.use('/posts', postRouter);
app.use('/users', userRouter);

// 이런식으로 router로 나누어 개발하면 모듈화가 된다.

app.listen(8080);

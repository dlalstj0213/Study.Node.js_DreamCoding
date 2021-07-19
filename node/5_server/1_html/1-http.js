const http = require('http');
const fs = require('fs');
// const http2 = require('http2');

/**
 * http 서버 가동하기
 */
const server = http.createServer((req, res) => {
	console.log('RUN Server');
	console.log(req.headers);
	console.log(req.httpVersion);
	console.log(req.method);
	console.log(req.url);

	const url = req.url;
	if (url === '/') {
		res.setHeader('Content-Type', 'text/html');
		/**
		 * createReadStream.pipe()를 사용했을 경우
		 * pipe는 비동기적인 함수 이므로, 호출만 해놓고 (작업이 끝나길 기다리지 않고) 다음 코드 라인으로 넘어간다.
		 * 그래서 piping이 되고 있는 중간에 res.end를 호출하게 되면 파이핑이 멈추게 된다.
		 * 즉, pipe이 끝나면 자동으로 end() 처리가 되므로, 수동적으로 호출해줄 필요는 없다.
		 */
		fs.createReadStream('./res/index.html').pipe(res);
	} else if (url === '/courses') {
		fs.createReadStream('./res/courses.html').pipe(res);
	} else {
		fs.createReadStream('./res/not-found.html').pipe(res);
	}
	//res.end();
});

server.listen(8080);

// console.log(http.STATUS_CODES);

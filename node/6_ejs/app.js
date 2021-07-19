const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

const name = 'Minseo';
const courses = [
	{ name: 'HTML' },
	{ name: 'CSS' },
	{ name: 'JavaScript' },
	{ name: 'Node' },
];

const server = http.createServer((req, res) => {
	console.log('RUN Server');

	const url = req.url;
	res.setHeader('Content-Type', 'text/html');
	if (url === '/') {
		ejs.renderFile('./res/index.ejs', { name }).then((data) => res.end(data));
	} else if (url === '/courses') {
		ejs
			.renderFile('./res/courses.ejs', { courses })
			.then((data) => res.end(data));
	} else {
		ejs
			.renderFile('./res/not-found.ejs', { name })
			.then((data) => res.end(data));
	}
	//res.end();
});

server.listen(8080);

// console.log(http.STATUS_CODES);

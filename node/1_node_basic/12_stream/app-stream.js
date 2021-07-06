const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
	//highWaterMark: 8, // 한번에 얼만큼의 데이터를 읽어올지를 설정할 수 있다. (default: 64 kbytes)
	//encoding: 'utf-8',
});

const data1 = [];
readStream.on('data', (chunk) => {
	//console.log(chunk);
	data1.push(chunk);
	console.count('data');
});
/*
readStream.on('end', () => {
	console.log(data1.join(''));
});
*/

readStream.on('error', (error) => {
	console.log(error);
});

// chaining
const data2 = [];
fs.createReadStream('./file.txt', {})
	.on('data', (chunk) => {
		data2.push(chunk);
	})
	.on('end', () => {
		console.log(data2.join(''));
	})
	.on('error', (error) => {
		console.log(error);
	});

let num = 1;

// 1초 마다 콜백함수 실행
const interval = setInterval(() => {
	console.log(num++);
}, 1000);

setTimeout(() => {
	console.log('Timeout!');
	clearInterval(interval);
}, 6000);

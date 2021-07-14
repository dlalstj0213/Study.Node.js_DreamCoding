function sayHello() {
	console.log('Hello ~ !');
}

function calculate(x, y) {
	console.log('calculating....');
	console.log('hello');
	const result = x + y;
	console.log('result :', result);
	console.log('nodemon test1');
	sayHello();
	return result;
}

calculate(1, 2);

const stop = 4;
console.log('-----looping-----');
for (let i = 0; i < 10; i++) {
	console.log('count', i);
	console.log('count7', i);
	if (i === stop) break;
}

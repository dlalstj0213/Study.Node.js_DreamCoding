async function sum(a, b) {
	console.log('active sum()');
	return a + b;
}

async function times(a, b) {
	console.log('active times()');
	a *= a;
	b *= b;
	result = await sum(a, b);
	return sum(result, result);
}

times(2, 2).then(console.log);

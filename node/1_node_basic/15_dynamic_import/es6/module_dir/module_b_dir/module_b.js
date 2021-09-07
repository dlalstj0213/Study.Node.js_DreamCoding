function minus(x, y) {
	const result = x - y;
	console.log(`CALL minus(x, y) = ${result}`);
	return result;
}

function print() {
	console.log('HELLO this is module B');
}

export { minus, print };

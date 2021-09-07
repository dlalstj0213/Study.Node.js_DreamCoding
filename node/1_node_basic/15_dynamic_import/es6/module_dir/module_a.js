function add(x, y) {
	const result = x + y;
	console.log(`CALL add(x, y) = ${result}`);
	return result;
}

function print() {
	console.log('HELLO this is module A');
}

export { add, print };

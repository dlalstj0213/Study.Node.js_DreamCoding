function minus(x, y) {
	const result = x - y;
	console.log(`CALL minus(x, y) = ${result}`);
	return result;
}

module.exports.calc = minus;

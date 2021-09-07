function add(x, y) {
	const result = x + y;
	console.log(`CALL add(x, y) = ${result}`);
	return result;
}

module.exports.calc = add;

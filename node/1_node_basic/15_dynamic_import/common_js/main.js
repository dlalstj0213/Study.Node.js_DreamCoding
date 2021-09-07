// npm i glob
const glob = require('glob');
const path = require('path');

glob.sync('./module_dir/**/*.js').forEach(function (file) {
	console.log(file);
	//const test = require(path.resolve(file));
	const test = require(file);
	console.log(test);
});

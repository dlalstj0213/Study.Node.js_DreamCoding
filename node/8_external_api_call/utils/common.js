module.exports.commonUtil = {
	getKeywords: function (keywords, splitter, ...args) {
		let result = keywords.split(splitter);
		args.forEach((delimiter) => {
			result = result.map((str) =>
				str.indexOf(delimiter) > 0
					? str.substring(0, str.indexOf(delimiter))
					: str
			);
		});
		return [...new Set(result)];
	},
	objToSearch: function (obj) {
		console.log(obj);
		return obj;
	},
};

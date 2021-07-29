const Excel = require('exceljs');

const workSheetColums = [
	{ header: '순위', key: 'rank' },
	{ header: '검색어', key: 'keyword' },
];

async function write(data) {
	let title = '패션의류'; // TODO - 후에 Crawler에서 인기검색어 제목(대구분)을 가져와서 워크시트 이름 설정해야함

	const workbook = new Excel.Workbook();
	const worksheet = workbook.addWorksheet(`TOP500-${title}`);

	worksheet.columns = workSheetColums;

	data.forEach((el) => {
		el.items.forEach((item) => {
			worksheet.addRow({ rank: item.rank, keyword: item.keyword });
		});
	});
	/*
	const t = new Excel.stream.xlsx.WorkbookWriter({
		filename: './streamed-workbook.xlsx',
	});
	*/
	//await workbook.xlsx.writeFile('./streamed-workbook.xlsx');

	return data;
}

async function read() {
	console.log('read activ>>>>>>>>>>>');
	return '';
}

async function download() {}

module.exports.write = write;
module.exports.read = read;
module.exports.download = download;

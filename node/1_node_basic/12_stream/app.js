/**
 * stream을 사용하지 않은 예제 코드
 * 예제 코드 설명 : file.txt를 읽고 난 데이터를 file2.txt에 쓴다.
 * 그리고 읽고 쓰면서 사용된 메모리를 확인한다.
 */

const fs = require('fs');

const beforeMem = process.memoryUsage().rss;
fs.readFile('./file.txt', (_, data) => {
	fs.writeFile('./file2.txt', data, () => {});
	//calculate
	const afterMem = process.memoryUsage().rss;
	const diff = afterMem - beforeMem;
	const consumed = diff / 1024 / 1024;
	console.log(diff);
	console.log(`Consumed Memory : ${consumed}MB`);
});

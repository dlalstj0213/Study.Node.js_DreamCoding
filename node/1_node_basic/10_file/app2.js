const fs = require('fs').promises;

// read a file
fs.readFile('./text-new.txt', 'utf8')
	.then((data) => console.log(data))
	.catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, RHIE! :)').catch(console.error);

fs.appendFile('./file.txt', 'Hello, Hello, RHIE! :)').catch(console.error);

// copy file 1
//fs.copyFile('./file.txt', './file2.txt').catch(console.error);

// copy file 2
// 동일한 파일 이름일시 덮어씌어짐
fs.appendFile('./file.txt', ' Try Copy')
	.then(() => {
		fs.copyFile('./file.txt', './file2.txt').catch(console.error);
	})
	.catch(console.error);

// folder
fs.mkdir('sub-folder').catch(console.error);

//
fs.readdir('./').then(console.log).catch(console.error);

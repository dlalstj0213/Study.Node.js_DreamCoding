/**
 * 계획 .
 * 1. 사용자가 원하는 폴더의 이름을 받아온다.
 * 2. 그 폴더안애 video, captured, duplicated  폴더를 만든다
 * 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, IMG_1234 (IMG_E1234)
 */

const process = require('process');
const path = require('path');
const os = require('os');
const fs = require('fs');

const NO_SUCH_FOLDER = 3;

process.on('exit', (code) => {
	if (code === NO_SUCH_FOLDER)
		console.log(
			`About to exit with code: ${code}` +
				'\nplease enter your target folder name'
		);
});

const folderName = process.argv[2];
//const workingDir = path.join(os.homedir(), 'Pictures', folderName);
const workingDir = path.join(__dirname, '../' + folderName);

if (!folderName || !workingDir) process.exit(NO_SUCH_FOLDER);

const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(capturedDir) && fs.mkdirSync(capturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

fs.promises
	.readdir(workingDir)
	//.then(files => processFiles(files)) // 만일 전달하는 인자와 호출하는 인자가 동일할시 생략 가능
	.then(processFiles)
	.catch(console.error);

function processFiles(files) {
	files.forEach((file) => {
		if (isVideoFile(file)) {
			console.log('it is VideoFile', file);
			move(file, videoDir);
		} else if (isCapturedFile(file)) {
			console.log('it is CapturedFile', file);
			move(file, capturedDir);
		} else if (isDuplicatedFile(files, file)) {
			console.log('it is duplicatedFile', file);
			move(file, duplicatedDir);
		}
	});
}

function isVideoFile(file) {
	let dotPosi = file.lastIndexOf('.');
	if (dotPosi < 0) return false;
	let fileExt = file.substring(dotPosi + 1, file.length).toLowerCase();
	let extList = ['mp4', 'mov'];
	if (extList.indexOf(fileExt) === 0) return true;
	return false;
}
function isCapturedFile(file) {
	const regExp = /(png|aae)$/gm; //정규표현식 사용
	const match = file.match(regExp);
	return !!match;
}
function isDuplicatedFile(files, file) {
	// IMG_XXX -> IMG_EXXX
	if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) return false;

	const edited = `IMG_E${file.split('_')[1]}`;
	const found = files.includes(edited);
	return found;
}

function move(file, targetDir) {
	console.log(`move ${file} to ${path.basename(targetDir)}`);
	const oldPath = path.join(workingDir, file);
	const newPath = path.join(targetDir, file);
	fs.promises.rename(oldPath, newPath).catch(console.error);
}

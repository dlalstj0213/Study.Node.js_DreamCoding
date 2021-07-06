const fs = require('fs'); // 노드모듈의 file system 모듈 가져오기

/**
 * 모든 API는 3가지 형태로 제공되어진다.
 */

/**
 * rename 이라고 하면 rename으로 제공
 * rename() : 비동기
 * 형태 1.
 * rename(..., callback) : 필요한 작업을 완료후 등록한 콜백함수 호출
 * 형태 2.
 * renameSync(...) : Blocking, 따로 콜백함수를 전달하지 않음, renameSync()의 작업이 완료될때 까지 다음 작업을 진행 X (동기), 에러발생시 노드 어플리케이션 다운
 * 형태 3.
 * promises.rename().then().catch(0) : Promise 형태
 */

/**
 * <사용법>
 * 형태 1.
 * rename(..., callback(error, data)) : 보통 여기의 콜백은 에러가 발생하거나 원하는 인자를 받아서 로직처리
 * 형태 2.
 * try { renameSync(...) } catch() : 형태2는 에러발생시 노드어플리케이션이 다운되면 안되니 항상 try catch로 감싸준다.
 */

// renameSync() [동기]
/*
try {
	fs.renameSync('./text1.txt', './text-new.txt');
} catch (error) {
	console.log(error);
}
console.log('renameSync DONE');
*/

// rename() [비동기]
/*
fs.rename('./text1.txt', './text-new.txt', (error) => {
	console.log(error);
}); // Error가 발생하지 않을시 콜백함수의 인자는 null로 넘겨준다.
console.log('rename DONE');
*/

// promises [Promise]
fs.promises
	.rename('./text-new.txt', './text-new.txt')
	.then(() => {
		console.log('DONE!');
	})
	//.catch((error) => console.log(error)) // [자바스크립트 문법] 만일 이렇게 전달 받은 인자가 동일하다면 생량 가능
	.catch(console.error);

/**
 * 노드가 동작하고 있는 프로세스 정보 가져오기
 */

const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// 현재 코드가 다 수행된 다음에 0초 후에 콜백함수 실행
setTimeout(() => {
	console.log('setTimeout');
}, 0);

// nextTick() : 콜스택에 있는 것을 모두 수행한 후에 텍스트큐에 콜백함수를 저장해놓았다가 실행
process.nextTick(() => {
	console.log('nextTick');
});

for (let i = 0; i < 100; i++) {
	console.log('for loop');
}

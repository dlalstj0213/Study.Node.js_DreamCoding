console.log('code1');
setTimeout(() => {
	console.log('setTimeout 0');
}, 0);

console.log('code2');
setImmediate(() => {
	console.log('setImmediate');
}, 0);

console.log('code3');
process.nextTick(() => {
	console.log('process.nextTick');
}, 0);

/**
 * 결과:
 * code1
 * code2
 * code3
 * process.nextTick
 * setTimeout 0
 * setImmediate
 *
 * 즉, nextTick이 Task Queue에 제일 먼저 저장된다.
 */

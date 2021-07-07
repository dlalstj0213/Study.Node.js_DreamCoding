/**
 * 직접 event 만들기
 */

const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
	console.log('first callback - ', args);
};
emitter.on('rhie', callback1); // 이렇게 콜백 인자에 함수로 넣으면 나중에 remove 등 제어가 가능

emitter.on('rhie', (args) => {
	console.log('second callback - ', args);
});

emitter.emit('rhie', { message: 1 });
emitter.emit('rhie', { message: 2 });
emitter.removeListener('rhie', callback1); // 등록된 콜백 리스너 삭제
//emitter.removeAllListeners(); // 전체 콜백 리스너 삭제
emitter.emit('rhie', { message: 3 });

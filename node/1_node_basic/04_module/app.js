//console.log(count); // undefined error

// require() 함수는 모듈, JSON 및 로컬 파일을 가져 오는 데 사용된다.
const counter = require('./counter.js'); // counter.js에 정의된 module.exports 가져오는 코드

counter.increase();
console.log(counter.getCount());

// 실제 임포트 되어진 객체는 어떻게 저장되어 있을까?
//console.log(require);
console.log(require.cache);
// 위의 콘솔 값을 찍어보면 counter.js에서 exports 된 값들이 캐시에 저장되어 있는 것을 확인할 수 있다.

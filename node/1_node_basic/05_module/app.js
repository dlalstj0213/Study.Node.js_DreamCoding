/**
 * 간단한 package init 만들고 module 설정하기
 * 1. 패키지 설정 파일 만들기
 * - $ npm init --yes
 * 2. 설정 : package.json 에서 타입 추가
 * - "type" : "module",
 * 그리고 나서 app.js 에서 자바스크립트에서 사용하는 최신 import, export 방식을 사용가능
 */

//import { increase, getCount } from './counter.js'; // 임포트 방법 1 (해당 js파일에 원하는 export된 변수만 import)
// increase();
// increase();
// increase();
// console.log(getCount());

import * as counter from './counter.js'; // 임포트 방법 2 (해당 js파일에 export된 모든 변수를 임포트하고 alias 설정)

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());

console.log(counter);

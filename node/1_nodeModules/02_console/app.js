/**
 * console
 */
console.log('----------LOG----------');
console.log('logging...');

// log level
console.log('log'); // 개발
console.info('info'); // 정보
console.warn('warn'); // 경보
console.error('error'); // 에러, 사용자 에러, 시스템 에러 ...

// assert
console.log('----------ASSERT----------');
console.assert(2 == 3, 'not same!'); // 참이 아닐때 출력
console.assert(2 == 2, 'same!'); // 참이면 출력 X

// print object
console.log('----------OBJECT----------');
const user = {
	name: 'userName',
	id: 'userId',
	age: 25,
	company: { name: 'ITEvolution' },
};
console.log(user);
console.table(user);
console.dir(user, { showHidden: true, colors: false, depth: 1 }); //dept의 값을 바꾸면서 확인해보기

// measuring time
console.log('----------TIME----------');
console.time('for loop');
for (let i = 0; i < 100; i++) {
	i++;
}
console.timeEnd('for loop');

// counting
console.log('----------COUNT----------');
function a() {
	console.count('a function');
}
a();
a();
console.countReset('a function');
a();

// trace
console.log('----------TRACE----------');
function f1() {
	f2();
}
function f2() {
	f3();
}
function f3() {
	console.log('f3');
	console.trace();
}
f1();

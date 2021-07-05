/**
 * 함수 안에 선언된 this === global = true
 */
function hello() {
	console.log(this);
	console.log(this === global);
}
hello();

/**
 * 클래스 안에 선언된 this === global = false
 */
class A {
	constructor(num) {
		this.num = num;
	}
	memberFunction() {
		console.log('----------CLASS----------');
		console.log(this);
		console.log(this === global);
	}
}

const a = new A(1);
a.memberFunction();

// 즉, 클래스 내부에 선언된 this는 선언한 클래스 자신을 가리키고, 그외 함수 안에 선언된 this는 global을 가리킨다.
// 하지만,

/**
 * 브라우저와의 차이점은 밖에서 쓰이는 this는 글로벌을 가리키나, 노드에서는 module.exports 를 가리킨다.
 */
console.log('---global scope---');
console.log(this);
console.log(this === module.exports);

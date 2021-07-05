let count = 0;

function increase() {
	count++;
}

function getCount() {
	return count;
}

module.exports.getCount = getCount;
//exports.increase = increase // 이 코드와 같이 exports는 module 선언을 생략할 수 있다.
// 하지만 여기서 주의 해야할 점은 중간이나 처음에 exports = {}; 와 같이 초기선언을 해버리면
// 그 이후의 epxorts는 더이상 module의 exports가 아니게 되고 해당 exports를 선언하는 부분에서 Error를 발생 시킬 것이다.
module.exports.increase = increase;

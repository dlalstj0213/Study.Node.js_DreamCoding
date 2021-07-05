# Global

### 브라우저

브라우저 콘솔에서 `hello = 0;` 을 입력하게 되면<br/>
이 `hello`라는 변수는 `window` 의 변수로 담겨져 있는 것을 확인 할 수 있다.

```js
hello = 0;
hello;
window.hello;
```

즉, `window`가 브라우저에서는 `global` 객체임을 알 수 있다.

### Node

반면에 노드에서는 `window`라는 `global` 객체가 존재하지 않는다.

```js
console.log(global);
console.log(window); // undefined error

// 실행 -> $ node app.js
```

위의 코드와 같이 노드에서는 `global`이라는 변수가 이미 `global` 전역 객체로 되어있다.

```js
global.hello = () => {
  console.log('hello');
};

global.hello();
hello();
global.console.log('hello');
```

## 목차

- [Express with TypeScript](#express-with-typescript)
    - [초기 커맨드 입력](#초기-커맨드-입력)
    - [초기 import express 오류](#초기-import-express-오류)
    - [npm start 오류](#npm-start-오류)


# Express with TypeScript

타입스크립트만으로 간단한 API를 만들어 본다.

### 초기 커맨드 입력

```shell
$ tsc --init
$ npm --init
$ npm i --save-dev concurrently nodemon
$ npm i express helmet morgan express-async-errors
```
- 추가 기초 세팅을 확인하고 싶다면 ([클릭](../node_typescript))

### 초기 import express 오류

npm으로 express를 설치 후 `app.ts`에서 express를 import 하게 되면 오류가 발생한다. 왜 그럴까??  

그 이유는 설치한 해당 express 모듈은 자바스크립트만으로 구현되어 있고 모두 Any타입으로 인식되기 때문에 타입스크립트에서 읽어오지 못하는 오류가 발생한다.  
그래서 해당 모듈의 타입만 정의되어져 있는 모듈을 `@types/express`를 설치해야 한다.

```shell
$ npm i @types/express
```

설치한 후, `./node_modules/@types/express/` 경로에서 `index.d.ts` 파일을 열어보면 모두 타입만 정의되어있는 함수만 작성된 것을 볼 수 있다. 이와 같은 모듈 import 오류 발생시 @types에 해당 모듈이 있는지 확인 후 없다면 npm 으로 해당 모듈 타입을 설치하거나 그래도 없다면 직접 정의해줘야 한다.

- DTS-Gen: https://github.com/microsoft/dts-gen
- DefinitelyTyped 레파지토리: https://github.com/DefinitelyTyped/DefinitelyTyped
- 타입스크립트 파일 정의 문서: https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

### npm start 오류

만일 `package.json`에 `"start": "concurrently \"tsc -w\" \"nodemon dist/app\"",` 를 설정하여 `npm start`를 처음 실행했다면 오류가 발생할 수 있다.

그 이유는 `concurrently` 명령어가 작성된 다수의 명령어를 병렬적으로 처리하기 때문에 아직 컴파일되지 않은 JS를 Node가 읽으려 했기 때문이다.

이 오류는 일시적인 것이므로 당황하지 말고 작성했던 ts 파일을 재저장하거나 `npm start`를 다시 입력해주자.

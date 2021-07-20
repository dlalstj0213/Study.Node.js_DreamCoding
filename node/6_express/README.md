# Package.json

## 1. Package.json 생성

```bash
$ npm init -yes
```

## 2. Express 설치

```bash
$ npm i express
```

## 3. 대른 개발자 또는 다른 환경에서 nodemon을 사용할 수 있게 작성

```bash
$ npm i nodemon --save-dev
```

## 4. 2015년 자바스크립트 최신 문법 사용 표기

package.json
```json
"type": "module",
```

> can use `import express from 'express';`

## 5. nodemon 실행 스크립트 작성

```json
"scripts": {
  "start" : "nodemon app"
},
```
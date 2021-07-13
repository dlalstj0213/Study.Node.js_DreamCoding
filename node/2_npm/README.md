- [npm](#npm)
    - [Node Package Manager](#node-package-manager)
  - [npx](#npx)
  - [yarn](#yarn)
  - [Package.json](#packagejson)
    - [npm init](#npm-init)
    - [script](#script)
  - [Licencse](#licencse)
  - [Library Manage](#library-manage)
    - [Incrementing semantic versions in published packages](#incrementing-semantic-versions-in-published-packages)
    - [Using semantic versioning to specify update types your package can accept](#using-semantic-versioning-to-specify-update-types-your-package-can-accept)
    - [npm semver calculator](#npm-semver-calculator)
  - [Search npm packages](#search-npm-packages)
  - [npm command](#npm-command)
    - [프로젝트 패키지 설정 파일 만들기 (순차 진행)](#프로젝트-패키지-설정-파일-만들기-순차-진행)
    - [프로젝트 패키지 설정 파일 만들기 (Default)](#프로젝트-패키지-설정-파일-만들기-default)
    - [패키지 설치](#패키지-설치)
    - [설치 명령어 옵션 설명](#설치-명령어-옵션-설명)
    - [글로벌 패키지 설치](#글로벌-패키지-설치)
    - [패키지 제거 옵션 설명](#패키지-제거-옵션-설명)
    - [설치된 패키지 제거](#설치된-패키지-제거)
    - [패키지 정보 조회 옵션 설명](#패키지-정보-조회-옵션-설명)
    - [패키지 정보 조회](#패키지-정보-조회)
    - [글로벌 패키지 정보 조회](#글로벌-패키지-정보-조회)
    - [설치한 글로벌 패키지 정보 조회](#설치한-글로벌-패키지-정보-조회)
    - [Node.js 업데이트](#nodejs-업데이트)
    - [npm 업데이트](#npm-업데이트)
    - [특정 라이브러리 정보 조회](#특정-라이브러리-정보-조회)
- [유용한 패키지](#유용한-패키지)

# npm

### Node Package Manager

패키지 매니저, 라이브러리 관리자

## npx

npm과 다르게 따로 라이브러리를 해당 OS에 저장하지 않고 바로 라이브러리를 실행시킨다.

## yarn

- by facebook

npm의 성능적인 부분을 개선해서 탄생함. (npm과 서로 호환 가능)

## Package.json

### npm init

`npm init`명령어로 `package.json` 작성시,

1. `package name: (2_npm) [wrtie-패키지이름]` : 패키지 이름 작성
2. `version: (1.0.0) [wrtie-버전]` : 버전 설정 (default:1.0.0)
3. `description: [wrtie-패키지설명]` : 패키지 설명 작성
4. `entry point: (index.js) [write-파일명]` : 프로그램 시작점(시작 폴더) 작성
5. `test command:` : 태스트 명령어 작성
6. `git repository:` : 깃허브 주소 작성
7. `keywords: test` : 만일 프로젝트를 라이브러리 형태로 배포(npm에 배포)할시 주로 사용
8. `author: [write-person-name]` : 제작사 작성
9. `license: (ISC)` : 라이센스 작성 (default:ISC)


### script

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app", 
    "rhie": "node app"
  },
```

- `"start"`
  - npm의 기본적인 명령어 중 하나
  - 스크립트에 `"start"`를 작성하고 `node [write-실행파일.js]` 와 같이 실행 명령어를 작성해주면 `$ npm start` 명령어로 해당 파일을 실행할 수 있다.
- `custom command`
  - `"rhie"` 와 같이 임의의 명령어를 정해줄 수 있다.
  - 이와 같은 명령어는 `$ npm run [스크립트key]`의 명령어로 실행이 가능하다.
  - 예시) `$ npm run rhie`
- npm 에서 사용가능한 기본 명령어 리스트는 `$ npm` 명령어를 통해서 확인해 볼 수 있다.

## Licencse

- [SPDX (https://spdx.org/licenses)](https://spdx.org/licenses)
- [오픈소스 SW 라이선스 종합정보시스템](https://www.olis.or.kr/)

## Library Manage

- [https://docs.npmjs.com/about-semantic-versioning](https://docs.npmjs.com/about-semantic-versioning)

### Incrementing semantic versions in published packages

- version description ex)1.0.0

|version index|description|
|---|---|
|1|**Major**: 전체적인 제품의 기능이 바뀌거나 변경사항이 발생후 재배포시 카운트|
|.0|**Minor**: 작은 기능들을 추가후 재배포시 카운트|
|.0|**Patch**: 출시한 버전의 버그나 오류 수정 후 재배포시 카운트|

### Using semantic versioning to specify update types your package can accept

- Patch releases: 1.0 or 1.0.x or ~1.0.4
- Minor releases: 1 or 1.x or ^1.0.4
- Major releases: * or x

- Example)

```json
"dependencies": {
  "my_dep": "^1.0.0",
  "another_dep": "~2.2.0"
},
```

### npm semver calculator

- [https://semver.npmjs.com](https://semver.npmjs.com)

## Search npm packages

- [search npm packages](https://www.npmjs.com)

## npm command

- [npm Docs: commands](https://docs.npmjs.com/cli/v7/commands)

---

### 프로젝트 패키지 설정 파일 만들기 (순차 진행)

```shell
$ npm init
```
- `package.json` 파일 만들기
  - package.json 은 프로젝트에서 사용하고 있는 여러 라이브러리 정보, 프로젝트 버전 정보를 담고 있다.
- 아무 옵션 없이 그저 `init`만 한다면 차례대로 초기 패키지 정보를 입력 할 수 있다.
- 순차 진행 설명: [Package.json/npm-init](#npm-init)

### 프로젝트 패키지 설정 파일 만들기 (Default)

```shell
$ npm init --yes
```
- `init`명령어에 `--yes` 옵션을 추가해주면 기본적인 정보를 가지고 `package.json`이 만들어 진다.

---

### 패키지 설치

```shell
$ npm install
$ npm install [library-name]
```
- 라이브러리를 프로젝트에 생성하기, 가져오기 (`node_modules` 폴더 하위에 생성됨)
- 특정 버전을 명시하지 않고 설치시 기본으로 최신버전으로 설치되고 Minor버전이 자유자재로 업데이트 될 수 있도록 설정됨. [( Minor 버전? )](#library-manage)

> 즉, 
> `package.json`과 `npm install` 기능으로 인해서 프로젝트를 깃에 올릴때
> `node_modules` 폴더는 올리지 않는다. (그리고 node_modules는 용량이 많이 크다)

```shell
$ npm install [library-name]@[version-number]
```

- 설치할 라이브러리를 특정 버전으로 설치

### 설치 명령어 옵션 설명

```shell
$ npm install -h
$ npm i -h
$ npm add -h
```

- `npm install` 옵션 설명 보기
- `install`, `i`, `add` 중 아무거나 사용 가능 (기본적인 alias 설정 되어있음)

### 글로벌 패키지 설치

```shell
$ npm i -g [library-name]
```

- npm에서 글로벌로 패키지 설치하기

---

### 패키지 제거 옵션 설명

```shell
$ npm remove -h
```

- 패키지 삭제 옵션 설명 보기
- `un`, `unlink`, `remove`, `rm`, `r` 중에 아무거나 사용 가능 (기본적인 alias 설정 되어있음)

### 설치된 패키지 제거

```shell
$ npm un [library-name]
```

- 설치된 특정 라이브러리 삭제


### 패키지 정보 조회 옵션 설명

```shell
$ npm list -h
$ npm la -h
$ npm ll -h
```

- `npm list` 옵션 설명 보기
- `list`, `la`, `ll` 중 아무거나 사용 가능 (기본적인 alias 설정 되어있음)

### 패키지 정보 조회

```shell
$ npm list
```

- 현재 프로젝트에 설치된 패키지 정보 조회

### 글로벌 패키지 정보 조회

```shell
$ npm ll -g
```

- 글로벌로 설치된 패키지 정보 조회

### 설치한 글로벌 패키지 정보 조회

```shell
$ npm ll g --dept=0
```

- 본인이 설치한 전역(글로벌) npm 패키지 정보를 조회

---

### Node.js 업데이트

```shell
$ node -v
```

1. Node.js 현재 버전 확인

```shell
$ npm cache clean -f
```

2. npm 캐쉬 삭제 (오류발생 할 수 있음)

```shell
$ npm install -g n
```

3. n 플러그인 설치 : 노드 버전관리 플러그인 

```shell
$ n lts
```

4. Node.js 버전 설치 [(상세 사용법)](https://github.com/tj/n)
   1. `n latest` : 최신버전
   2. `n lts` : lts 버전
   3. `n stable` : 안정버전

---

### npm 업데이트

```shell
$ npm -v
```

1. npm 현재 버전 확인

```shell
$ npm i -g npm
```

2. npm 업데이트 
   1. `-g` 옵션 없을 시 현재 프로젝트만 적용됨

### 특정 라이브러리 정보 조회

```shell
$ npm view [library-name]
```

- npm 명령어가 불편하다면 npm 공식 사이트에서 조회 가능
- 패키지 검색 : [https://www.npmjs.com](https://www.npmjs.com)

---

# 유용한 패키지
# npm

### Node Package Manager

패키지 매니저, 라이브러리 관리자

## npx

npm과 다르게 따로 라이브러리를 해당 OS에 저장하지 않고 바로 라이브러리를 실행시킨다.

## yarn

- by facebook

npm의 성능적인 부분을 개선해서 탄생함. (npm과 서로 호환 가능)

## Search npm packages

- [search npm packages](https://www.npmjs.com)

## npm command

- [npm Docs: commands](https://docs.npmjs.com/cli/v7/commands)

```shell
$ npm init
```
- `package.json` 파일 만들기
  - package.json 은 프로젝트에서 사용하고 있는 여러 라이브러리 정보, 프로젝트 버전 정보를 담고 있다.
- 아무 옵션 없이 그저 `init`만 한다면 차례대로 초기 패키지 정보를 입력 할 수 있다.

```shell
$ npm init --yes
```
- `init`명령어에 `--yes` 옵션을 추가해주면 기본적인 정보를 가지고 `package.json`이 만들어 진다.


```shell
$ npm install
$ npm install [library name]
```
- 라이브러리를 프로젝트에 생성하기, 가져오기 (`node_modules` 폴더 하위에 생성됨)

### 즉,
`package.json`과 `npm install` 기능으로 인해서 프로젝트를 깃에 올릴때 `node_modules` 폴더는 올리지 않는다. (그리고 node_modules는 용량이 많이 크다)

## Package.json

### `$ npm init`

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


### `script : `

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
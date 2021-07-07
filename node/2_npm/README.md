# npm

### Node Package Manager

패키지 매니저, 라이브러리 관리자

## npx

npm과 다르게 따로 라이브러리를 해당 OS에 저장하지 않고 바로 라이브러리를 실행시킨다.

## yarn

- by facebook

npm의 성능적인 부분을 개선해서 탄생함. (npm과 서로 호환 가능)

## npm command

- [npm Docs: commands](https://docs.npmjs.com/cli/v7/commands)

```shell
$ npm init
```
- `package.json` 파일 만들기
  - package.json 은 프로젝트에서 사용하고 있는 여러 라이브러리 정보, 프로젝트 버전 정보를 담고 있다.

```shell
$ npm install
$ npm install [library name]
```
- 라이브러리를 프로젝트에 생성하기, 가져오기 (`node_modules` 폴더 하위에 생성됨)

### 즉,
`package.json`과 `npm install` 기능으로 인해서 프로젝트를 깃에 올릴때 `node_modules` 폴더는 올리지 않는다. (그리고 node_modules는 용량이 많이 크다)


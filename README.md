# sls-express-template

serverless.js + express

## Install

`serverless.js`가 설치되어 있어야 한다.
```shell script
$ npm i -g serverless
```

프로젝트를 시작한다.
```shell script
$ sls install --url https://github.com/centell/sls-express-template --name myApp 
$ cd myApp
$ npm i
```

### Environment Variable
`direnv` 를 사용하는 경우, `.envrc`로 환경변수를 관리하자. 
```shell script
export AWS_PROFILE=default  # 원하는 AWS profile 를 지정
export SLS_DEBUG=*  # serverless 디버그 메시지 확인
```

```shell script
$ direnv allow 
```

## Usage

### Local Test
```shell script
$ sls offline
```

### Deploy
```shell script
$ sls deploy
```

### Remove
```shell script
$ sls remove
```

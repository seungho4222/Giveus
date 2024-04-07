## Guide for Testing Smart Contracts (B209)
<br/>

### Prerequisites

```bash
$ npm install -g truffle
$ npm i @truffle/hdwallet-provider
$ npm i
```

<br/>

### ```truffle-config.js``` 설정

<br/>
아래 부분을 테스트 환경에 맞게 변경

```js
module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",    
      port: 7545,           
      network_id: "*",    
     },
     ...
  }
}
```

위 --network 옵션을 지정하지 않고 truffle test 실행  시, "development"를 기본으로 지정함.

```bash
$ truffle test --network <network-name>
```
<br/>

### 기본 사용법

```bash
$ truffle compile # 컨트랙트 컴파일
$ truffle migrate # 로컬 네트워크에 컨트랙트 배포
$ truffle migrate --network ssafy # 싸피 네트워크에 컨트랙트 배포
$ truffle test # 컨트랙트 테스트
```


#### 테스트 코드 실행 예

```bash
$ truffle test ./test/NFTCreateorTest.js
$ truffle test ./test/SaleTest.js
```

<br/>
<br/>
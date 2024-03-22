<div align="center">
<h2> 크라우드 펀딩 기부 플랫폼, 기브어스 💗 </h2>
</div>

## 목차
- [개요](#개요)
- [진행 내용](#진행-내용)
- [프로젝트 구성](#프로젝트-구성)
- [4주차 진행 상황](#4주차-진행-상황)
- [화면](#화면)

## 개요
- 프로젝트 이름: GIVEUS
- 프로젝트 진행 기간: 2024.02.26 - 2024.04.05 (6주)
- 프로젝트 팀원
    - front-end: 김내림, 승재홍, 이승호
    - back-end:  박형규, 서지현, 이하늬

## 진행 내용
<img src="/uploads/ed8d691e29373b0ae5a9ba67700f4537/wbs공통.PNG" width="500" height="300"/>

### 1주차
>2024.02.26 - 2024.02.29 : 아이디어 기획
### 2주차
> - 아이디어 기획
> - 요구사항 정의서 작성 ([요구사항 정의서](https://yihoney.notion.site/1e21e94591c1482d99f7bac8f5a79649?pvs=4))<br>
> - 화면 설계
> - ERD 설계
> - 시스템 아키텍처 설계
> - 프로젝트 초기 설정
### 3주차
> - WBS 작성
> - MVP 선정
> - 코딩/커밋 컨벤션 설정
> - MVP 기능 개발
### 4주차
> - MVP 기능 개발

## 프로젝트 구성
### 아키텍처
<img src="/uploads/9da1ff5e0cb2874305834d3bc476e239/아키텍처.png" width="500" height="300"/>

### FRONT
- [관리자](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/frontend-admin?ref_type=heads)
- [사용자](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/frontend?ref_type=heads)
### API
- [관리자 서버](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/backend-admin?ref_type=heads)
- [인증 서버](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/backend-auth?ref_type=heads)
- [유레카 서버](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/backend-eureka?ref_type=heads)
- [펀딩 서버](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/backend-funding?ref_type=heads)
- [게이트웨이 서버](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/backend-gateway?ref_type=heads)
- [알림 서버](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/backend-notification?ref_type=heads)
- [결제 서버](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/backend-payment?ref_type=heads)
- [공통 모듈](https://lab.ssafy.com/s10-blockchain-contract-sub2/S10P22C206/-/tree/develop/backend-common?ref_type=heads)

### ERD
<img src="/uploads/fc456a736fa51cb5a5b8bb11bf5ae60d/GiveUs__1_.png" width="500" height="300"/>

---
## 4주차 진행 상황


| 이름  | 수행 내용                                                                                                |
|-----|------------------------------------------------------------------------------------------------------|
| 김내림 | - 일반 회원 카카오 회원가입 / 로그인<br>- 회원 정보 조회<br>- 포인트 전체 조회, 필터링<br>- 검색 페이지 UI, 최근 검색어<br>- 알림 페이지 UI       |
| 박형규 | - CI/CD<br>- 결제 서버 구축<br>- 카카오 결제 구현중                                                                |
| 서지현 | - 일반 회원 카카오 회원가입 / 로그인<br>- 인증, 알림 서버 구축<br>- 알림 구현중                                                 |
| 승재홍 | - 병원 회원 회원가입 / 로그인<br>- 펀딩 등록<br>- 펀딩 정보 컨트랙트 설계 및 배포(싸피 네트워크)<br>- 병원 회원 블록체인 개인 지갑 생성<br>- 트랜잭션 생성 및 전송 구현중|
| 이승호 | - 펀딩 전체 조회, 필터링, 정렬<br>- 펀딩 상세 (소개, 기부 참여자, 사용 내역)<br>- 후원하기<br>- 후기 상세 조회 <br>- 마이페이지 후원 내역 조회, 필터링 |
| 이하늬 | - 게이트웨이, 유레카, 펀딩, 관리자 서버 구축<br>- 펀딩 조회/등록 API<br>- 파일 업로드 구현중                                        |


### 화면

| 로그인                                                                 | 검색                                                                  | 알림         | 후원내역       |
|---------------------------------------------------------------------|---------------------------------------------------------------------|------------|------------|
| ![login](/uploads/40fcd37eb1d0fcddf080977a803304be/login.png)       | ![search](/uploads/548c84db7e6485f4a7a2876a00e2f925/search.png)     | ![alarm](/uploads/9634f2b1116d10c97a1828b70f87096a/alarm.png) | ![후원내역](/uploads/e7058ea9d8db6089ca8bd973275f4a59/후원내역.png) |
| **펀딩 1**                                                            | **펀딩**                                                              | **펀딩**         | **펀딩**         |
| ![funding1](/uploads/507f1b53585af38d20a49baff90a5292/funding1.png) | ![funding2](/uploads/910490afe9632088d24e5031c7c0d344/funding2.png) |![funding3](/uploads/588592f45ee15a9ec473cdebdd41864a/funding3.png)|![funding4](/uploads/ea453996f5859c212c71c6c58df33435/funding4.png)|
| **포인트 관리 1**                                                            | **포인트 관리 2**                                                            ||
|![포인트관리1](/uploads/e294ffac8c4e399f6c2c1d3832e0503f/포인트관리1.png)|  ![포인트관리2](/uploads/f15e894b8ee67d5f4afc2e77779c1e03/포인트관리2.png)                                                                   ||





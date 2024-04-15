# 🧩 GIVEUS

<img src="./wiki/img/img_logo.png" alt="" width=200 />

### === Contents ===

- [개요](#1-개요)
- [프로젝트 소개](#2-프로젝트-소개)
- [서비스 주요 기능](#3-서비스-주요-기능)
- [관리자 서비스 주요 기능](#4-관리자-서비스-주요-기능)
- [기술 스택](#5-기술-스택)
- [Design](#6-Design)
- [Team](#7-Team)

## 1. 개요

- 개발 기간: 2024.02.26 - 2024.04.05 (6주)
- 삼성 청년 소프트웨어 아카데미(SSAFY) 블록체인 프로젝트  
  `블록체인` `크라우드 펀딩` `기부`

## 2. 프로젝트 소개

블록체인을 통한 병원비 크라우드 펀딩 프로젝트

## 3. 서비스 주요 기능

### 3.1 소셜로그인

| <img src="wiki/gif/회원가입및로그인.gif" alt="소셜로그인" style="width:250px"> |
| :----------------------------------------------------------------------------: |
|                 - 소셜로그인을 통한 회원가입 ( 카카오 로그인 )                 |

### 3.2 메인

| <img src="wiki/gif/홈화면_기부후기+곧종료펀딩.gif" alt="메인" width="250px"> |
| :--------------------------------------------------------------------------: |
|                          - 실시간 기부 참여자 확인                           |
|                             - 총 기부 금액 확인                              |
|                 - 최근 등록된 후기 및 곧 종료되는 펀딩 확인                  |
|                  - 펀딩 선택시 펀딩 상세 조회 페이지로 이동                  |

### 3.3 검색

| <img src="wiki/gif/검색화면.gif" alt="검색" width="250px"> |
| :--------------------------------------------------------: |
|                     - 최근 검색어 저장                     |
|           - 지우기를 통한 최근 검색어 모두 삭제            |
|         - 펀딩 선택시 펀딩 상세 조회 페이지로 이동         |

### 3.4 펀딩 목록

|                               필터                               |                                  정렬                                  |
| :--------------------------------------------------------------: | :--------------------------------------------------------------------: |
| <img src="wiki/gif/펀딩목록조회-2.gif" alt="필터" width="250px"> |    <img src="wiki/gif/펀딩목록조회-1.gif" alt="정렬" width="250px">    |
|          - 펀딩 상태 ( 진행중, 진행완료 ), 나이 필터링           | - 기간순, 참여자순, 최신 등록순, 높은 목표금액순, 낮은 목표금액순 정렬 |
|  - 진행 완료된 펀딩은 병원이 등록한 진료비 사용 내역 확인 가능   |                                                                        |

### 3.5 후원하기

|                                카드 결제                                 |                                포인트 결제                                 |
| :----------------------------------------------------------------------: | :------------------------------------------------------------------------: |
| <img src="wiki/gif/펀딩하기_카드결제_실명.gif" alt="카드" width="250px"> | <img src="wiki/gif/펀딩하기_포인트_닉네임.gif" alt="포인트" width="250px"> |
|           - 금액 버튼을 누르거나 직접 입력하여 후원 금액 설정            |                    - 미리 충전한 포인트만으로 후원 가능                    |
|                - 결제 수단으로 토스페이, 카카오페이 선택                 |                                                                            |
|              - 기부자 공개 여부를 위한 실명 및 닉네임 선택               |                                                                            |
|         - 후원 완료시 기부자 명단 내 기부 내역 실시간 확인 가능          |                                                                            |

### 3.6 알림

| <img src="wiki/gif/알림화면.gif" alt="알림" width="250px"> |
| :--------------------------------------------------------: |
|              - 최근에 온 알림순으로 기본 정렬              |
| - 참여한 펀딩에 대한 진료비 사용 내역이 등록되었을 때 알림 |
|    - 참여한 펀딩에 대한 기부 후기가 등록되었을 때 알림     |
|         - 알림 선택시 펀딩 상세 조회 페이지로 이동         |

### 3.7 마이페이지

|                                     포인트 관리                                     |                                 후원 내역                                 |                                      설정                                       |
| :---------------------------------------------------------------------------------: | :-----------------------------------------------------------------------: | :-----------------------------------------------------------------------------: | -------------------------------- |
| <img src="wiki/gif/마이페이지_포인트관리및충전.gif" alt="포인트관리" width="330px"> | <img src="wiki/gif/마이페이지_후원내역.gif" alt="후원내역" width="330px"> | <img src="wiki/gif/마이페이지_라이트다크설정.gif" alt="모드설정" width="330px"> |
|                               - 현재 보유 포인트 확인                               |                            - 총 후원금액 확인                             |           - 조회 기간, 펀딩상태 ( 전체, 진행중, 진행완료 )으로 필터링           | - 라이트모드, 다크모드 설정 가능 |
|             - 금액 버튼을 누르거나 직접 입력하여 포인트 충전 금액 설정              |                - 펀딩 선택시 펀딩 상세 조회 페이지로 이동                 |                                                                                 |
|                      - 결제 수단으로 토스페이, 카카오페이 선택                      |                                                                           |                                                                                 |
|         - 조회 기간, 포인트 사용 유형 ( 전체, 충전만, 사용만 ) 으로 필터링          |                                                                           |                                                                                 |

---

## 4. 관리자 서비스 주요 기능

### 4.1 펀딩 등록

| ocr 검사                                                     | 1차 등록                                                                                   | 2차 등록 링크 전송                                                                                                               |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| <img src="wiki/gif/ocr.gif" alt="펀딩등록ocr" width="800px"> | <img src="wiki/gif/펀딩등록_추가입력.gif" alt="펀딩등록직접입력" width="800px">            | <img src="wiki/img/펀딩등록_문자.PNG" alt="펀딩등록문자" width="300px">                                                          |
| - OCR 검사를 통해 진단서 내용 자동 입력                      | - 상세 정보는 직접 입력해 펀딩 등록 <br/> - 펀딩 등록 시 펀딩 정보를 블록체인에 저장 <br/> | - 관리자가 펀딩 등록 시 보호자 휴대폰 번호로 세부 정보 등록 링크 전송 <br/> - 보호자가 세부 정보를 입력하면 최종적으로 펀딩 등록 |

### 4.2 펀딩 목록

<img src="wiki/gif/펀딩조회.gif" alt="펀딩조회" width="800px"> <br/>

- 로그인 한 병원 관리자 회원이 등록한 펀딩 전체 조회
- 고유번호, 환자번호, 환자성명, 병명으로 검색

### 4.3 후기 등록

| 사용 내역 등록                                                                                | 후기 등록 링크 전송                                                                                                      |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| <img src="wiki/gif/기금사용내역등록.gif" alt="펀딩기금사용내역등록" width="800px">            | <img src="wiki/img/후원후기_문자.PNG" alt="펀딩후기문자" width="250px">                                                  |
| - OCR 검사를 통해 진료비 사용 내역 자동 입력 </br> - 진료비 사용 내역 등록 시 블록체인에 저장 | - 진료비 사용 내역 등록 시 기부 수혜자에게 후기를 등록하는 링크 전송 </br> - 후기 작성 시 펀딩 참여자 전원에게 알림 전송 |

## 5. 기술 스택

### 5.1 FrontEnd

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-round&logo=react&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/TypeScript-3178c6?style=flat-round&logo=TypeScript&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/vite-646CFF?style=flat-round&logo=vite&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/pwa-5A0FC8?style=flat-round&logo=pwa&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/npm-CB3837?style=flat-round&logo=npm&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/node.js-339933?style=flat-round&logo=nodedotjs&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/axios-5A29E4?style=flat-round&logo=axios&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-round&logo=styledcomponents&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/recoil-3578E5?style=flat-round&logo=recoil&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/reactquery-FF4154?style=flat-round&logo=reactquery&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/firebase-FFCA28?style=flat-round&logo=firebase&logoColor=black">&nbsp;

### 5.2 Backend

**API 서버**

<img src="https://img.shields.io/badge/java-007396?style=flat-round&logo=java&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/gradle-02303A?style=flat-round&logo=gradle&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/springboot-6DB33F?style=flat-round&logo=springboot&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/springsecurity-6DB33F?style=flat-round&logo=springsecurity&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Hibernate-59666C?style=flat-round&logo=Hibernate&logoColor=white">

**DB**

<img src="https://img.shields.io/badge/mysql-4479A1?style=flat-round&logo=mysql&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/redis-DC382D?style=flat-round&logo=redis&logoColor=black">

### 5.3 Infra

<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-round&logo=Docker&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-round&logo=Jenkins&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Nginx-009639?style=flat-round&logo=nginx&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/ubuntu-E95420?style=flat-round&logo=ubuntu&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/sonarqube-4E9BCD?style=flat-round&logo=sonarqube&logoColor=white"><br/><img src="https://img.shields.io/badge/aws ec2-FF9900?style=flat-round&logo=amazonec2&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/amazonrds-527FFF?style=flat-round&logo=amazonrds&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/amazons3-1572B6?style=flat-round&logo=amazons3&logoColor=white">&nbsp;

### 5.4 BlockChain

<img src="https://img.shields.io/badge/web3dotjs-F16822?style=flat-round&logo=web3dotjs&logoColor=black">&nbsp;

### 5.5 Communication

<img src="https://img.shields.io/badge/git-F05032?style=flat-round&logo=git&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/jira-0052CC?style=flat-round&logo=jirasoftware&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/swagger-000000?style=flat-round&logo=Swagger&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/mattermost-0058CC?style=flat-round&logo=mattermost&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/webex-000000?style=flat-round&logo=webex&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/notion-000000?style=flat-round&logo=notion&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/figma-EA4335?style=flat-round&logo=figma&logoColor=white">&nbsp;

## 6. Design

### 6.1 시스템 구조도

<img src="./wiki/img/아키텍처.png" alt="" />

### 6.2 ERD

<img src="./wiki/img/erd.png" alt="" />

## 7. Team

- 팀장: 이하늬
- 팀원:김내림, 박형규, 서지현, 승재홍, 이승호

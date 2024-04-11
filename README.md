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

### 3.1 메인

- 실시간 기부 참여자를 확인할 수 있음
- 총 기부 금액을 확인할 수 있음
- 최근 등록된 후기와 곧 종료되는 펀딩을 확인할 수 있음

### 3.2 펀딩 목록

- 펀딩 상태(진행중, 진행완료)와 나이를 필터링할 수 있음
- 기간순, 참여자순, 최신 등록순, 높은 목표금액순, 낮은 목표금액순으로 정렬 가능
- 참여 인원, 진행상황을 한눈에 확인할 수 있음

### 3.3 펀딩 상세 조회

- 소개 탭에서 펀딩의 세부적인 내용 확인 가능
- 기부자 명단 탭에서 기부 참여인원, 금액을 실시간으로 확인 가능
- 펀딩 종료 후 병원이 등록한 진료비 사용 내역 확인 가능

### 3.4 후원하기

- 금액 버튼을 누르거나 직접 입력하여 후원 금액을 설정할 수 있음
- 보유 포인트를 추가로 사용할 수 있음
- 결제 수단으로 토스페이, 카카오페이를 사용할 수 있음
- 실명으로 기부하거나 닉네임으로 후원할 수 있음

### 3.5 후기 확인

- 기부 수혜자가 등록한 기부 확인 가능

### 3.6 알림

- 최근에 온 알림순으로 정렬됨
- 참여한 펀딩에 대한 진료비 사용 내역이 등록되었을 때 알림
- 참여한 펀딩에 대한 기부 후기가 등록되었을 때 알림
- 알림 선택시 펀딩 상세 조회 페이지로 이동함

### 3.7 포인트 관리

- 조회 기간, 포인트 사용 유형(전체, 충전만, 사용만)으로 필터링할 수 있음
- 포인트 충전 내역, 포인트 사용 내역을 확인할 수 있음

### 3.8 포인트 충전

- 금액 버튼을 누르거나 직접 입력하여 후원 금액을 설정할 수 있음
- 결제 수단으로 토스페이, 카카오페이를 사용할 수 있음

### 3.9 검색

- 최근 검색어을 저장할 수 있음
- 지우기를 통해 최근 검색어를 모두 삭제할 수 있음

## 4. 관리자 서비스 주요 기능

### 4.1 펀딩 등록

- 진단서를 OCR 검사를 통해 상세 정보를 자동 입력되게 함
- 보호자 휴대폰 번호, 펀딩 목표 금액, 펀딩 종료일을 직접 입력해야 함
- 펀딩 등록시 펀딩정보가 블록체인에 동시에 저장됨
- 펀딩 등록시 보호자 휴대폰 번호에 문자로 이미지, 설명을 추가로 작성하는 링크가 전송됨
- 보호자가 추가 정보를 입력하면 최종적으로 펀딩이 등록됨

### 4.2 펀딩 목록

- 펀딩 고유 번호, 환자번호, 환자성명, 생년월일, 병명, 펀딩상태, 목표금액을 확인할 수 있음
- 고유번호, 환자번호, 환자성명, 병명으로 검색 가능

### 4.3 후기 등록

- 병원이 진료비 사용 내역을 OCR을 통해 자동 입력되게 함
- 진료비 사용 내역 등록시 블록체인에 저장됨
- 진료비 사용 내역을 등록하면 자동으로 수혜자한테 후기를 등록하는 링크가 메세지로 전송됨
- 후기를 작성하면 펀딩을 참여했던 모든 사람들에게 알림이 전송됨


## 5. 기술 스택

### 5.1 FrontEnd

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=TypeScript&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/pwa-5A0FC8?style=for-the-badge&logo=pwa&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">&nbsp;<img src="https://img.shields.io/badge/web3dotjs-F16822?style=for-the-badge&logo=web3dotjs&logoColor=black">&nbsp;

### 5.2 Backend

**API 서버**

<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/intellijidea-000000?style=for-the-badge&logo=intellijidea&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Kakao-FFCD00?style=for-the-badge&logo=Kakao&logoColor=white">

**DB**

<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=black">

**CI/CD**

<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/aws ec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/amazons3-1572B6?style=for-the-badge&logo=amazons3&logoColor=white">&nbsp;

**Communication**

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/jira-0052CC?style=for-the-badge&logo=jirasoftware&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/mattermost-0058CC?style=for-the-badge&logo=mattermost&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/webex-000000?style=for-the-badge&logo=webex&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">&nbsp;<img src="https://img.shields.io/badge/figma-EA4335?style=for-the-badge&logo=figma&logoColor=white">&nbsp;

## 6. Design

### 6.1 시스템 구조도

<img src="./wiki/img/아키텍처.png" alt="" />

### 6.2 ERD

<img src="./wiki/img/erd.png" alt="" />

## 7. Team

- 팀장: 이하늬
- 팀원:김내림, 박형규, 서지현, 승재홍, 이승호

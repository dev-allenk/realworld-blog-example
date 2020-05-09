# WEDIUM

> [리얼월드 예제 앱 프로젝트](https://github.com/gothinkster/realworld)의 api를 기반으로 블로그 서비스 클론하기.

## 사용 기술

- Typescript
- Next.js
- styled-components
- redux
- redux-saga

## 디렉토리 구조

<img width="250" alt="리얼월드-디렉토리구조" src="https://user-images.githubusercontent.com/42905468/81405705-279ba600-9173-11ea-8b79-ae137deb7440.png">

- @types - 공통 타입을 정의하거나 npm 모듈의 타입을 재정의.
- api - 비동기 통신을 위한 api 모듈.
- components - 리액트 컴포넌트.
- constants - color, routing path 등 상수값 저장.
- hooks - 리액트 커스텀 훅.
- modules - 액션타입, 액션생성함수, 리듀서를 정의.
- pages - Next.js 페이지 컴포넌트.
- saga - saga 함수.
- store - 리덕스 store.
- utils - 유틸함수.

## 페이지 구성과 기능

### 1. 메인 페이지

- 최근 글 조회.

  ![1  메인 페이지](https://user-images.githubusercontent.com/42905468/81471550-da7c0a80-922c-11ea-954d-db525851cdac.gif)

### 2. 아티클 페이지

- 작성한 글 내용을 볼 수 있다.
- 본문은 마크다운 모듈을 통해 파싱되어 보여진다.
- 작성자인 경우 수정, 삭제 버튼을 통해 글 수정, 삭제 가능.
  ![2  아티클 페이지](https://user-images.githubusercontent.com/42905468/81471556-e10a8200-922c-11ea-8caf-412296f33bab.gif)

### 3. 에디터 페이지

- 글 작성/수정 기능.
- 본문에 마크다운 문법 지원.(react-markdown 모듈 사용)
  ![3  에디터 작성](https://user-images.githubusercontent.com/42905468/81471698-e2887a00-922d-11ea-94bd-63c5d41be0b5.gif)
  ![3  에디터 수정](https://user-images.githubusercontent.com/42905468/81471694-dac8d580-922d-11ea-960e-f75dd6e3a965.gif)

### 4. 프로필 페이지

- 해당 유저의 작성글 목록 조회.
  ![4  프로필 페이지](https://user-images.githubusercontent.com/42905468/81471699-e4523d80-922d-11ea-92ac-99bcd502baed.gif)

### 5. 프로필 수정 페이지

- 유저 정보 수정 기능.
- 로그아웃 기능.
  ![5  프로필 수정](https://user-images.githubusercontent.com/42905468/81471700-e4ead400-922d-11ea-80f7-3c4e55fd2bb7.gif)

### 6. 로그인/회원가입 페이지

- 토큰방식의 로그인/회원가입 기능.

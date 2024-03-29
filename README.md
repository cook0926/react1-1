## 오재영 202130417

<br><br><br><br><br><br>
# <span style="color:#00ffff;">3월 27일 강의 내용 </span>
## Chapter 3. JSX소개
`class x`  
`function o`
### JSX(JavaScript XML)란?

* javascript에 XML을 추가한 확장 문법입니다.

### JSX의 역할


* JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환합니다.

* React 가 createElement 함수를 사용하여 자동으로 자바스크립트로 변환해 줍니다.

* 만일 SJ작업할 경우 직접 createElement함수를 사용해야합니다.

* 앞으로 설명하는 코드를 보면 알 수 있지만 결국 JSX는 가독성을 높여 주는 역할을 합니다.

<br><Br>

![Alt text](image-3.png)

### JSX의 장점
* 코드가 간결해 집니다.
* 가독성이 향상 됩니다
* Injection Attack 이라 불리는 해킹 방법을 방어합으로써 보안에 강합니다.

### JSX 사용법
* 모든 자바스크립트 문법을 지원합니다.
* 자바스크립트 문법에 XML과 HTML을 섞어서 사용합니다.
* 아래 코드의 2번 라인처럼 섞어서 사용하는 것입니다.
* 만일 HTML이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용합니다.



<BR><BR><BR><bR>


## Chapter 4.엘리먼트 렌더링
### 엘리먼트의 정의
* 엘리먼트는 리액트 앱을 구성하는 요소를 의미합니다.
* 공식페이지에는 "엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들" 이라고 설명하고 있습니다.
* 웹사이트의 경우는 DOM 엘리먼트이며 HTML요소를 의미합니다

### 리액트 엘리먼트와 DOM엘리먼트 차이점
* 리액트 엘리먼트는 Virtual DOM의 형태를 취하고 있다.
* DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무겁다.
* 리액트 엘리먼트는 변화한 부분만 갖고 있어 가볍다.


![Alt text](image-4.png)

### 엘리먼트의 생김새

* 리액트 엘리먼트는 자바스크립트 객체의 형태로 존재합니다.
* 컴포넌트(Button 등), 속성(color 등)및 내부의 모든 children을  포함하는 일반 JS 객체입니다.
* 이객체는 마음대로 변경 할 수 없는 불변성을 갖고 있습니다.  
<br><Br>
내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수는 `createElement()` 입니다

### 엘리먼트의 특징
리액트 엘리먼트의 가장 큰 특징은 불변성이다.
한번 생성된 엘리먼트의 children 이나 속성을 바꿀 수 없음

내용이 바뀌면 컴포넌트를 통해 새로운 엘리먼트를 생성하고 엘리먼트와 교체를 하는 방법으로 내용을 바꾼다 이렇게 교체하는 작업을 하기 위해 `Virtual DOM` 을 사용함

<BR> 

![Alt text](image-5.png)

### 렌더링된 엘리먼트 업데이트하기
* 다음 코드는 tick() 함수를 정의하고 있음
* 이 함수는 현재 시간을 포함한 element 생성해서 root div에 렌더링 해줌
* 12라인에 setlnterval() 함수를 이용해서 위에서 정의한 tick()를 1초에 한번씩 호출 하고 있음
* 1초에 한번씩 element를 새로 만들고 그것을 교체함
* 크롬 개발자 도구를 확인해 보면 시간 부분만 업데이트 되는 것을 확인 할 수 있다.


![Alt text](image-6.png)




<br><br><br><br><br><br>
# <span style="color:#00ffff;">3월 20일 강의 내용 </span>

## Chapter 1. 리액트 소개

### 리액트의 정의

* 리액트(React)는 웹 및 네이티브 사용자 인터페이스를 위한 라이브러리입니다.  
* 사용자와 웹사이트의 상호작용을 돕는 인터페이스를 만들기 위한 자바스크립트 기능 모음집입니다.

### 리액트의 장점

1. **빠른 업데이트와 렌더링 속도 (Virtual DOM):** 리액트는 가상 DOM(Virtual DOM)을 사용하여 업데이트와 렌더링 속도를 향상시킵니다. 이는 실제 DOM 조작 대신 가상의 DOM을 사용하여 변화를 추적하고, 최소한의 DOM 조작만을 수행하여 성능을 최적화합니다.

2. **DOM(Document Object Model):** XML, HTML 문서의 각 항목을 계층으로 표현하며 생성, 변경, 삭제할 수 있도록 돕는 인터페이스입니다.

3. **비동기식 렌더링:** 실제 DOM 조작은 동기식이지만, 가상 DOM은 비동기식으로 렌더링됩니다.

![Alt text](image.png)

### 컴포넌트 기반 구조

* 리액트의 모든 페이지는 컴포넌트로 구성됩니다.
* 하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있습니다.
* 리액트는 레고 블록을 조립하는 것처럼 컴포넌트를 조합하여 개발합니다.
* 재사용성이 뛰어나며, 각 컴포넌트는 독립적으로 작동합니다.

### 재사용성
* 반복적인 작업을 줄여주기 때문에 생산성을 높여 줍니다.
* 유지보수가 용이합니다.
* 재사용이 가능하려면 해당 모듈의 의존성이 없어야 합니다.

  ![Alt text](image-1.png)


### 리액트의 단점
 
 1. 방대한 학습량
 2. 높은 상태 관리 복잡도
 
 `*교수님 피셜) 자바스크립트를 아주 잘 알필요가 없다 몰라도됨! 모든간에 지장은 없다*`
 
## Chapter 2. 리액트 시작하기


`npm install -g npm@10.5.0`npm 버전업  
`npx -v`npm 버전보기   
`npx create-react-app test-app`  리액트설치  
`npm start` 리액트실행 app.css 경로에서 실행해야됨!!  

`4058 경로오류`  
`4077 한번더 시도`



 



<br><br><br><br><br><br>


# 3월13일 강의 내용 
### GitHub 사용법
git init  (로그인)  
git config user.name "닉네임"  
git config user.email "cook0926@naver.com"  
it config user.name  (닉네임 확인)  
git config user.email (이메일 확인)

node -v (node 버전 확인하기)

<br>
<br>
<br>

https://bit.ly/3KHObfW 3-1반 깃허브 링크  
https://git-scm.com/book/ko/v2 깃 설명서

<br>
<br>

<h3>HTML 살펴보기</h3>

HTML이란 무엇인가?  
웹사이트의 뼈대를 구성하는 태그들  
SPA(Single Page Application)
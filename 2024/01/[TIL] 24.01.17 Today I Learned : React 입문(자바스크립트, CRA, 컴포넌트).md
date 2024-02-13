# ☀️ 2024.01.17 Today I Learned ☀️
>React 입문 강의 듣기, 알고리즘 코드카타

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
>- [Programmers] 문자열 내 마음대로 정렬하기 (Javascript)

### React 입문
>- React 들어가기 전 자바스크립트 문법정리
- React 개발환경 세팅
- CRA
- 컴포넌트
- 부모 자식 컴포넌트

<br/> 

## 📁 배운 내용 📁
### 01  HTML/JSX 영역 자바스크립트 사용
문장과 버튼을 삽입하여 클릭을 눌렀을때 alert가 뜨도록 하는 예제를 React로 연습해보는데 자연스럽게 늘 하던대로 onclick="함수()"이렇게 해서 함수를 적용해보았는데 기능이 작동되지 않았다. 
```
<span>이것은 내가 만든 App 컴포넌트 입니다</span>
<button onClick="onclickAlert()">클릭!</button>
function onclickAlert() {
    alert("클릭!");
}
```
React의 HTML/JSX 영역에서는 HTML에서 하던 것과는 다르게 자바스크립트 요소를 넣을때 중괄호를 써서 사용해주어야한다. 그래서 onclick을 하고 중괄호를 써준 뒤 함수이름을 작성해서 클릭 됐을때 alert창을 잘 작동시킬 수 있었다.

<span>이것은 내가 만든 App 컴포넌트 입니다</span>
<button onclick={onclickAlert}>클릭!</button>

 

 

02  리엑트의 전체적인 구성

import logo from "./logo.svg";
import "./App.css";

// im : 안쪽
// ex(out) : 바깥쪽

// port(항구)

// App()은 컴퍼넌트고 무조건 대문자로 시작해야 함
function App() {
  // 여기가 자바스크립트를 쓸 수 있는 영역입니다
  // return 문 위에, function 함수 밑에
  const x = 1;
  function testFunc () {

  }
  return (
    // JSX(Javascript + XML - HTML)문법
    // {} 안에다가 자바스크립트 가져올 수 있음
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 

 

03  컴포넌트

코드가 길어지고 반복되는 로직이 생길때 번거로움을 최소화해주기 위해 컴포넌트화를 해준다. 부모 컴포넌트는 자식 컴포넌트를 품고 있는 형태를 가진다. 

// 자식 컴포넌트
function Child() {
  return <div>나는 자식입니다.</div>;
}

// 부모 컴포넌트 (자식 컴포넌트를 품고 있기 때문에 부모 컴포넌트임)
function App() {
  return <Child />;
}
 

컴포넌트화를 해주지 않은 상태로 바로 사용해서 쓸때에는 이 부모 컴포넌트 부분에 위에서 자식 컴포넌트에서 리턴되는 값이 그대로 들어가있게 된다.

// 부모 컴포넌트
function App() {
  return <div>나는 자식입니다.</div>;
}
 

=> 만약 이렇게 같은 값이 반복되는 경우


그대로 부모컨포넌트에 작성을 쭉 해주기 보다는 자식 컴포넌트를 통해 호출하는 식으로 작성해주면 좋다.

import React from "react";

// 자식 컴포넌트
function Child() {
  return <div>나는 아들입니다.</div>;
}

// 부모 컴포넌트 (자식 컴포넌트를 품고 있기 때문에 부모 컴포넌트임)
function App() {
  return (
    <div>
      <div>나는 아들입니다.</div>
      <div>나는 아들입니다.</div>
      <div>나는 아들입니다.</div>
      <div>나는 아들입니다.</div>
      <div>나는 아들입니다.</div>
    </div>
  );
}

export default App;
import React from "react";

// 자식 컴포넌트
function Child() {
  return <div>나는 아들입니다.</div>;
}

// 부모 컴포넌트 (자식 컴포넌트를 품고 있기 때문에 부모 컴포넌트임)
function App() {
  return (
    <div>
      <Child />
      <Child />
      <Child />
      <Child />
      <Child />
    </div>
  );
}

export default App;

 

예제 ) 할아버지, 엄마, 자식 컴포넌트로 연결해보기


import React from "react";

// 할아버지 컴포넌트
function GrandFather() {
  return (
    <div>
      <div>나는 할아버지입니다.</div>
      <Mom />
    </div>
  );
}

// 엄마 컴포넌트
function Mom() {
  return (
    <div>
      <div>나는 엄마입니다.</div>
      <Child />
    </div>
  );
}

// 자식 컴포넌트
function Child() {
  return <div>나는 아들입니다.</div>;
}

// 부모 컴포넌트 (자식 컴포넌트를 품고 있기 때문에 부모 컴포넌트임)
function App() {
  return (
    <div>
      <GrandFather />
    </div>
  );
}

export default App;
🧸회고🧸
새롭게 리엑트를 배우기 시작했다! 아직 얼마 듣지 않았지만 간간히 다르게 사용하거나 하면서 헷갈릴때가 있는데 금요일까지 리엑트 강의를 듣고 부족한 부분은 주말에 공부를 추가적으로 해서 제일 기대했던 과제인 Todolist도 이번에는 열심히 잘 만들어봐야겠다.

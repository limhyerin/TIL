# ☀️ 2024.01.18 Today I Learned ☀️
>React 입문 강의 듣기, 알고리즘 코드카타

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 콜라 문제 (Javascript)

### React 입문
- JSX 문법
- Props 개요, children, 추출
- State
- 불변성 & 순수 함수
- Component
- 실습 : 카운터 앱 만들어보기
- Styling
- 반복되는 컴포넌트, 분리하기

<br/>

## 📁 배운 내용 📁
### 01 Style
기존에 class 지정해주기 위해서 div 태그 옆에 class=""를 사용해서 지정을 해주었는데 JSX에서는 class가 아닌 className으로 지정을 해주어야 한다.
```html
<div class="test-class">
```
```html
<div className="test-class">
```

#### 1) 바로 style을 지정해주고자 할때 아래의 방법대로 지정해준다.
```html
<p style='color: red'>
```
```html
<p style={{color: "red",}}>
```

#### 2) 따로 선언해주고 지정할때는 중괄호를 써서 지정해준다.
```js
const pTagStyle = {
    color:"red",
}
```
```html
<p style={pTagStyle}>
```

<br/>

### 02  Props
부모 컴포넌트가 자식 컴포넌트에게 물려준 데이터, 컴포넌트 간의 정보 교류 방법 <br/>
변수를 하나 적어주고 넘겨줄 데이터 변수를 괄호 안에 적어주면 물려주고자하는 데이터를 물려줄 수 있다

![image](https://github.com/limhyerin/TIL/assets/70150896/71183999-17b0-45af-ba26-abab0e3ddd0c)

```js
// 할아버지 컴포넌트
function GrandFather() {
  const name = "놀부남";
  return (
    <div>
      <div>나는 할아버지입니다.</div>
      <Mom grandFatherName={name} />
    </div>
  );
}

// 엄마 컴포넌트
function Mom(props) {
  const name = "흥부인";
  const gfName = props.grandFatherName;
  return (
    <div>
      <div>나는 엄마입니다.</div>
      <Child grandFatherName={gfName} momName={name} />
    </div>
  );
}

// 자식 컴포넌트
function Child(props) {
  console.log("props", props.momName);
  return (
    <div>
      나는 {props.grandFatherName}의 손자이자 {props.momName}의 아들입니다.
    </div>
  );
``` 

 <br/>

### 03 랜더링
꼭 기억할 부분, 화면에 바로바로 적용되는 것이 랜더링이다.
- 리엑트는 화면이 랜더링할지를 state의 변화에 따라 결정한다
- 단순 변수는 무시한다!
```js
onChange={function(event) { // input 필드 안에서 어떠한 변화가 일어날때 어떻게 할것인가?
          console.log("event", event.target.value); // event 될때마다(입력될때마다) 그 값이 event.target.value로 값이 들어옴
        }}
```
![image](https://github.com/limhyerin/TIL/assets/70150896/e051e38f-6197-4fba-9d3a-9c12df52dddd)

<br/> 

### 04 password 안보이게 하는 방법
```
<input type="password"/>
```
![image](https://github.com/limhyerin/TIL/assets/70150896/fb13229e-124c-46c2-a723-06ff93de4099)

<br/> 
 
### 05 객체 복사하기
같은 값을 가지면 같은 주소에 있는 값을 참조하는 변수와는 달리 객체는 주소를 참조하기 때문에 같은 값을 가지더라도 다른 주소의 값을 가지고 온다
```js
const obj2 = {...obj1};
```

<br/>

### 06 객체 랜더링하기
![image](https://github.com/limhyerin/TIL/assets/70150896/8d4e7d26-6c0c-400e-bf7e-7cc4eeb3f9ec)
![image](https://github.com/limhyerin/TIL/assets/70150896/17ec08d7-0b64-45ae-8b93-d5132cb769a3)

```js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [obj, setObj] = useState({
    name: "one",
    age: 21,
  })
  return (
    <div>
      <div>{obj.name}</div>
    <button onClick={() => {
      obj.name = "two";
      const obj2 = {...obj};
      setObj(obj2);
      }}> 변경! </button>
    </div>
  );
}

export default App;
```

<br/>

### 07 카운터 +,  - 연습해보기
![image](https://github.com/limhyerin/TIL/assets/70150896/8c949682-999f-4d6c-a8b3-57be1f62a6dd)
```js
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const plusButtonHandler = () => {
    const newPlusCount = count + 1;
    setCount(newPlusCount);
  }
  return (
  <div>
    <div>{count}</div>
    <div>
      <button onClick={() => {
        //alert('- 눌렸어요');
        const newCount = count-1;
        setCount(newCount);
      }}>-</button>
      <button onClick={plusButtonHandler}>+</button>
    </div>
  </div>
  );
}

export default App;
```
 
### 08 Style 주기 - CSS
![image](https://github.com/limhyerin/TIL/assets/70150896/e7ca2e10-1741-4a18-b6c4-3a209e5d3f28)
```js
import React from "react";
import "./App.css";

const App = () => {
  const users = [
    {id:1, age:30, name:"송중기"},
    {id:2, age:24, name:"송강"},
    {id:3, age:21, name:"김유정"},
    {id:4, age:29, name:"구교환"},
  ];
  return (
    <div className="app-style">
    {
      users.map(function(item) {
        return <div className="component-style">{item.age} - {item.name}</div>;
      })
    }
    </div>
  );
};

export default App;
``` 

근데 map함수를 쓸때 반복적으로 return 하는 부분은 key={item.id} 이렇게 처럼 반드시 태그를 붙여 주어야 한다.
```js
return <div key={item.id} className="component-style">{item.age} - {item.name}</div>;
``` 

state로 바꿔주기위해
```js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  // const users = [
  //   {id:1, age:30, name:"송중기"},
  //   {id:2, age:24, name:"송강"},
  //   {id:3, age:21, name:"김유정"},
  //   {id:4, age:29, name:"구교환"},
  // ];
  
  const [users, setUsers] = useState([
     {id:1, age:30, name:"송중기"},
     {id:2, age:24, name:"송강"},
     {id:3, age:21, name:"김유정"},
     {id:4, age:29, name:"구교환"},
    ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  const clickAddHandler = (event) => {
    // 1. 새로운 형태의 이놈을 만든다
    // 이놈 : {id:1, age:30, name:"송중기"},
    // 2. 이놈을 배열에 더한다.
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name, 
    }
    setUsers([...users, newUser]) // 원래 있었던 배열을 싹 풀고 저거를 추가함
  }

  return (
    <div>
      이름 : &nbsp;
      <input 
        value={name}
        onChange={nameChangeHandler}
      />
      <br/>
      나이 : &nbsp;
      <input 
        value={age}
        onChange={ageChangeHandler}
      />
      <br/>
      <button onClick={clickAddHandler}>추가</button>
      <div className="app-style">
      {
        users.map(function(item) {
          return <div key={item.id} className="component-style">{item.age} - {item.name}</div>;
        })
      }
      </div>
      </div>
  );
};

export default App;
```
![image](https://github.com/limhyerin/TIL/assets/70150896/890bd7f8-c9e3-495c-9eb5-f383036300ca)

<br/>
 
## 📁 배운점/개선 사항 📁
>props children 다시 공부 <br/>
배운 내용 다시 공부하기 <br/>

<br/>
 
## 🧸회고🧸
자바스크립트 끝나고 리액트를 들어갔는데 사실 아직도 화살표 함수가 익숙하지 않은데 강의 내내 function함수로 썼을 때랑 화살표함수를 썼을 때 두가지 버전으로 계속 보여주셔서 이해가 더 잘됐던 것 같다. 강의 들으면서 따라서 코딩도 쳐보고 했는데 잘 이해가 됐다가도 다음 강의를 듣다보면 살짝 까먹었는데 반복해주셔서 너무 좋았구 내일은 전체적으로 다시 강의 들으면서 정리해둔 자료 보면서 개인과제 시작해야겠다

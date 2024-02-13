# ☀️ 2024.01.24 Today I Learned ☀️
>리액트 숙련 강의 및 정리

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 최소직사각형 (Javascript)

### React 숙련
- Styled-components 사용법
- GlobalStyles 전역 스타일링
- Sass란
- useState 기존 방법과 함수형 업데이트 방법

<br/> 

## 📁 배운 내용 📁
### 01 styled-components 사용법
#### 1) VSconde 플러그인 설치 : vscode-styled-components
#### 2) npm add styled-components
#### 3) import styled from "styled-components"; 이걸 통해서 스타일이 된 컴포넌트를 만들 수 있다.

<br/> 

### 02 GlobalStyles
: 전역적으로 스타일을 지정할 수 있음(전역 스타일링),<br/>
Styled-components → 해당 컴포넌트 내에서만!

<br/> 

### 03 Sass(Syntactically Awesome Style Sheets)란?
: CSS를 전통적인 방법보다 효율적으로 사용하기 위해 만들어진 언어

<br/> 

### 04 useState
가장 기본적인 hook. 함수형 컴포넌트 내에서 가변적인 상태를 갖게 함 ex) 카운터, todolist
```js
const [state, setState] = useState(초기값);
```
![image](https://github.com/limhyerin/TIL/assets/70150896/70e282bf-016c-4924-924e-1e011ce9532d)
```js
import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <>
    <div>Number State : {number}</div>
    <button onClick={() => {
      setNumber(number+1);
    }}>
      누르면 UP!
    </button>
    </>
  )
}

export default App;
``` 

<br/>

### 함수형 업데이트..!!
setNumber(number+1) 대신 사용할 수 있는 부분
```html
<button onClick={() => {
  // 기존 업데이트 방법
  // setNumber(number+1)

  // 함수형 업데이트 방법
  setNumber((currentNumber)=> {
    return currentNumber + 1;
  });
}}>
누르면 UP!
</button>
```
화살표 함수 이렇게 되어 있는데 한줄로 줄일려면 중괄호랑 return 이랑 세미콜론 없애주면 됌
```js
setNumber((currentNumber)=> {
    return currentNumber + 1;
});
```
```js
setNumber((currentNumber)=> currentNumber + 1);
``` 

<br/>

### 기존방법과 함수형 업데이트의 차이?
기존벙법에서 만약 3번을 써야한다면 1씩만 늘어나는 것을 볼 수 있다. 불필요한 랜더링을 피하기 이위해서 배치 업데이트를 사용했음.

- 각각 실행되는 것이 아니라 배치성으로 처리된다
- 배치 업데이트 : 한꺼번에 변경된 내용을 한번만 반영


![image](https://github.com/limhyerin/TIL/assets/70150896/bcbbd3ab-293e-4c48-872f-ec8bb32787a7)
```js
setNumber(number+1);
setNumber(number+1);
setNumber(number+1);
```

### 함수형 업데이트를 사용하면?
- 명령어들을 순차적으로 한번씩 처리
- 인자(currentNumber)부분에 현재의 값이 들어오기 때문에 최신값을 유지할 수 있음

![image](https://github.com/limhyerin/TIL/assets/70150896/9c2bff30-b9db-4f0a-bed7-39671f35146d)

```js
setNumber((currentNumber)=> currentNumber + 1);
setNumber((currentNumber)=> currentNumber + 1);
setNumber((currentNumber)=> currentNumber + 1);
```

<br/>
 
## 📁 개선 사항 📁
>개인과제 : TodoList 수정 및 보완 사항 + 스탠다드반 과제(다시 todolist 코드짜보기)<br/>
1. 삭제하기 버튼 클릭 시, 삭제 여부를 묻는 alert창 띄우기<br/>
2. 어떤 todo도 등록하지 않았다면<br/>
  - Working : 아직 등록한 todo가 없습니다
  - Done : 아직 완료된 todo가 없습니다
3. 컴포넌트 다시 제대로 분리하기<br/>
-> 기능들만 묶어놔서 App.jsx가 깔끔하지 못하고 코드가 너무 김 <br/>
4. useState를 참조되는 컴포넌트에 넣기<br/>
5. id값 중복없는 다른 값으로 주기<br/>
  - UUID, ShortID, date.now() ...

<br/>

## 🧸회고🧸
리액트 숙련과정을 들어가면서 강의가 훅훅 안넘어가는 것 같다.. 열심히 해야지 내일부터는 강의들으면서 스탠다트반 과제를 진행해야할 것 같다!

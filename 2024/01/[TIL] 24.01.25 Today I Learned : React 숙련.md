# ☀️ 2024.01.25 Today I Learned ☀️
>리액트 숙련 강의 및 정리

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 두 개 뽑아서 더하기 (Javascript)

### React 숙련
- React Hooks - useState/ useEffect/ useRef/ useContext/ React.memo/ useCallback/ useMemo

<br/> 

## 📁 배운 내용 📁
### [ Hooks ]
#### 1. useState
: 가장 기본적인 hook으로 함수현 컴포넌트 내에서 가변적인 상태를 갖게 한다.

#### 2. useEffect
: 랜더링될 때마다 특정한 작업을 수행하도록 설정하는 Hook <br/>
어떤 컴포넌트가 화면에 보여졌을때 무언가를 실행하고 싶다면 사용) <br/>
useEffect를 사용하는데, 어떤 함수를 컴포넌트가 렌더링 될 때 단 한번만 실행하고 싶으면 의존성 배열을 [ ] 빈 상태로 넣으면 된다.<br/>

#### 3. useRef
: Dom 요소에 접근할 수 있도록 하는 Hook <br/>
저장공간 - state와 비슷한 역할을 하지만 ref에 저장한 값은 렌더링을 일으키지 않음 <br/>
DOM - <input /> 태그에는 ref라는 속성이 있다. 랜더링되자마자 특정 input이 focusing 되야 한다면 사용 <br/>

#### 4. useContext
: 어떤 컴포넌트도 바로 최상위 컴포넌트의 데이터를 받아서 사용할 수 있도록 하는 것 (prop drilling 문제 해결)<br/>
* prop drilling : 부모 - 자식 - 그 자식 - 그 자식의 자식으로 되어있을 경우 값을 넘겨줄때 최상위 부모의 값을 넘겨주는 자식들 중에 해당 데이터가 필요없지만 값을 넘겨주어야 하는 존재들이 있을 것이고 그렇다보면 내려받은 데이터인 props가 어디로부터 왔는지 파악이 힘들어진다 <br/>

![image](https://github.com/limhyerin/TIL/assets/70150896/596a31e9-7b82-4c70-aa93-f86d44458917)

context 폴더를 만들어서 해당 폴더에 context 파일을 만들고
```js
import { createContext } from "react";
export const FamilyContext = createContext(null);
```
최상위 컴포넌트에 context파일을 import해준 후, FamilyContext.provider를 통해 houseName과 pocketMoney를 내려준다. 그 자식 컴포넌트는 해당 데이터를 사용하지 않기 때문에 자식만 호출해준다.
```js
// GrandFather.jsx
import React from "react";
import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext";

function GrandFather() {
  const houseName = "스파르타";
  const pocketMoney = 10000;

  return (
    <FamilyContext.Provider value={{ houseName, pocketMoney }}>
      <Father />
    </FamilyContext.Provider>
  );
}

export default GrandFather;
```
```js
// Father.jsx
import React from "react";
import Child from "./Child";

function Father() {
  return <Child />;
}

export default Father;
``` 

마지막으로 그 자식의 자식 컴포넌트에서 FamilyContext를 통해 data를 받아와서 그 데이터의 houseName 값과 pocketMoney 값을 내려받아서 사용하면 된다.
```js
// Child.jsx

import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

function Child({ houseName, pocketMoney }) {
  const stressedWord = {
    color: "red",
    fontWeight: "900",
  };

  const data = useContext(FamilyContext);
  console.log("data", data);

  return (
    <div>
      나는 이 집안의 막내에요.
      <br />
      할아버지가 우리 집 이름은 <span style={stressedWord}>{data.houseName}</span>
      라고 하셨어요.
      <br />
      게다가 용돈도 <span style={stressedWord}>{data.pocketMoney}</span>원만큼이나
      주셨답니다.
    </div>
  );
}

export default Child;
``` 

#### 5. 최적화 (React.memo, usecallback, useMemo)
: 불필요한 렌더링이 자주 발생하지 않도록 최적화하는 방법

- memo(React.memo) : 컴포넌트를 캐싱
- useCallback : 함수를 캐싱
- useMemo : 값을 캐싱
  
#### 1) Memo

부모 컴포넌트가 리-렌더링 될 때 자식 컴포넌트도 리-렌더링 된다면 자식 컴포넌트의 입장에서는 바뀐게 없는 상태에서 렌더링이 되어야하기 때문에 이것 해결하기 위한 도구이다.

만약 Box1.jsx, Box2.jsx, Box3.jsx라는 컴포넌트가 있고 최상위 컴포넌트인 App.jsx 리-렌더링될때, 아래 컴포넌트들도 모두 리-렌더링이 된다면 React.memo를 이용해서 컴포넌트를 메모리에 저장해두고 필요할 때 가져다 쓰게된다.
```js
export default React.memo(Box1);
export default React.memo(Box2);
export default React.memo(Box3);
``` 

#### 2) useCallback

숫자를 카운트하는 코드에서 Box1이 초기화를 진행하는 코드라면 이 함수를 메모리 공간에 저장해놓고, 특정 조건이 아닌 경우엔 변경되지 않도록 한다.
```js
const onInitButtonClickHandler = () => {
  initCount();
};
```
```js
// App.jsx

// 변경 전
const initCount = () => {
  setCount(0);
};

// 변경 후
const initCount = useCallback(() => {
  setCount(0);
}, []);
``` 

#### 3) useMemo
맨 처음 해당 값을 반환할 때마다 이미 저장한 값을 꺼내와서 사용하는 기법 (=캐싱)
```js
// as-is
const value = 반환할_함수();

// to-be
const value = useMemo(()=> {
	return 반환할_함수()
}, [dependencyArray]);
``` 

<br/>

## 📁 개선 사항 📁
개인과제 : TodoList 수정 및 보완 사항 + 스탠다드반 과제(다시 todolist 코드짜보기) <br/>
1. 삭제하기 버튼 클릭 시, 삭제 여부를 묻는 alert창 띄우기 <br/>
2. 어떤 todo도 등록하지 않았다면 <br/>
  - Working : 아직 등록한 todo가 없습니다 
  - Done : 아직 완료된 todo가 없습니다
3. 컴포넌트 다시 제대로 분리하기 <br/>
-> 기능들만 묶어놔서 App.jsx가 깔끔하지 못하고 코드가 너무 김  <br/>
4. useState를 참조되는 컴포넌트에 넣기 <br/>
5. id값 중복없는 다른 값으로 주기 <br/>
  - UUID, ShortID, date.now() ...

<br/>

## 🧸회고🧸
오늘 들을려고 계획했던 범위만큼 강의를 다 들어서 너무 다행인데 memo 부분에서 사실 듣다가 놓쳐서 오늘 배운 내용들도 전체적으로 다시 공부를 해봐야할 것 같다. 그리고 TodoList 개인과제도 이것저것 이 기능 쓰려면 어떤게 필요한지 찾고 적용하고 하다보니 참고를 안하면 다시 또 가물가물해져서 하나하나 다시 공부해봐야겠다

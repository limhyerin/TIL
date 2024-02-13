# ☀️ 2024.01.30 Today I Learned ☀️
- Dynamic Routes
- useParms
- prev
- useEffect
- useRef

<br/>

## 📁 배운 내용 📁
구조분해할당을 한 count와 setCount는 객체
```js
const [count, setCount] = useState(0);
```
초기값으로 0을 임의로 설정해두어서 변수가 아닐까 생각을 했었지만 객체의 형태로 참조형 변수처럼 불변성을 유지하면서 변화를 감지한다고 한다.

<br/> 

### Dynamic Routes
동적 라우팅으로 path에 유동적인 값을 넣어서 특정 페이지로 이동하도록 구현한 방법 <br/>
<br/>
만약, 여러개의 work 페이지가 있고 하나의 works페이지에서 각각 개별적인 work페이지를 구현하도록 하려면 아래와 같이 path에 /works/1, /works/2, /works/3 이런식으로 구현할 수도 있을 것이다. 하지만 페이지의 개수가 많아진다면 더이상 이런식으로 코드를 짜기가 힘들기때문에 Dynamic Routes 기능을 이용한다.
```js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Works from "../pages/Works";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/1" element={<Works />} />
	<Route path="/works/2" element={<Works />} />
	<Route path="/works/3" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
``` 

그리고 /works/ 위치의 뒤에 들어가는 값을 각 페이지들이 구분될 수 있는 값을 넣어주면 된다. <br/>
그중에서도 독립적으로 구분되는 id값을 이용하여 :id를 사용하면 useParams 훅에서 조회할 수 있는 값이 된다. <br/>
```html
<Route path="works/:id" element={<Work />} />
```
![image](https://github.com/limhyerin/TIL/assets/70150896/d053e344-798b-458d-9d8d-d7971d085982)

useParms라는 훅을 통해서 path에 있는 값 조회할 수 있게 해줌
```js
// Works.js

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const data = [
  { id: 1, todo: '리액트 배우기' },
  { id: 2, todo: '파이썬 배우기' },
  { id: 3, todo: '자바스크립트 배우기' },
  { id: 4, todo: '자바 배우기' },
  { id: 5, todo: 'C언어 배우기' },
  { id: 6, todo: '인공지능 배우기' },
];

function Works() {
  return (
    <div>
      {data.map((work) => {
        return (
          <div key={work.id}>
            <div>할일: {work.id}</div>
            <Link to={`/works/${work.id}`}>
              <span style={{ cursor: 'pointer' }}>➡️ Go to: {work.todo}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
``` 

<br/>

### [ 스탠다드 정리 ]
```js
const [count, setCount] = useState(0);
```
배열 안에 구조분해할당 되어있는 count와 setCount는 객체 <br/>
=> 객체의 형태로 참조형 변수처럼 불변성을 유지하면서 변화 감지 <br/>

<br/> 

#### 카운트
```js
return (
	<div>
        <p>Count : {count}</p>
        <button onClick{() => {
            setCount(count+1);
        }}>
            Increase
        </button>
	</div>
)
``` 
-> 배치 업데이트 == 일괄처리

#### prev
prev : 이전 값을 가져와서 사용
```js
setCount((prev) => prev+1);
setCount((prev) => prev+2);
setCount((prev) => prev+3);
``` 

#### useEffect
```js
useEffect(콜백함수, 배열);
``` 

내부적인 콜백함수를 돌려준다. 배열안에는 보통 state가 들어감 <br/>
빈 배열의 경우 최초 렌더링 시, 시행하는 것으로 보통 데이터베이스 통신로직이 이곳에 들어감 <br/>
```js
useEffect(() => {
	// 내부 로직
    console.log("test!!!");
},[]);
``` 

만약 배열이 없다면 그냥 console.log를 하는 것과 동일
```js
useEffect(() => {
	// 내부 로직
    console.log("test!!!");
});
``` 

화면에는 카운트 값이 1부터 쭉쭉 올라가는데 console.log에는 0부터 찍히는 이유? <br/>
배치 업데이트가 콘솔로그보다 늦게 실행되서 업데이트 전 값이 출력 <br/>

<br/>

해결 : .then / aysnc-await로 해결 <br/>
```js
setCount(count+1);
console.log(count);
```

useEffect를 사용해서 확인할 수 있다 <br/>
```js
useEffect(() => {
	console.log("count => ", count)
},[count]);
``` 

<br/>

#### useRef
- 참조를 만드는 훅
- Dom요소 접근
- 참조되어 있지 않으면 값을 저장하기도 함
- 랜더링을 다시 일으키지 않고 화면상에 나타내지 X (console.log로 보면 나옴), 한번에 값 보여짐 

input 태그는 html 처럼 보이지만 리액트에서 사용하고 있는 JSX 문법
```
<input ref={} />
```

<br/>

## 🧸회고🧸
공부해야할 훅이 많아서 쭉 다시 공부해보고 연습해봐야겠다

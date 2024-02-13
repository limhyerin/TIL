# ☀️ 2024.01.29 Today I Learned ☀️
 
<br/>

## 📁 배운 내용 📁
### 01 react-router-dom ?
여러페이지를 오가면서 이동할 수 있는데 여러가지 페이지를 가진 웹을 만들 수 있게 해줌

<br/>

### 02 react-router-dom 설치
#### (1) yarn의 경우
```
yarn add react-router-dom
``` 

#### (2) npm의 경우
```
npm i react-router-dom
``` 

#### 03 react-router-dom Hooks - useNavigate
버튼을 클릭했을 때 보내고자하는 path로 페이지를 이동시킬 수 있도록 하는 것
![image](https://github.com/limhyerin/TIL/assets/70150896/695d9069-f2fb-421d-ac0d-b5e0a90a26c7)

![image](https://github.com/limhyerin/TIL/assets/70150896/8f925a07-a0f3-4719-b3e6-b0e7a61df7ca)

<br/>
```js
// Home.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div>
        Home
        <br />
        <button onClick={() => {
            navigate('/works');
        }}>works로 이동</button>
    </div>
  )
}

export default Home
```
```js
// Works.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Works() {
    const navigate = useNavigate();
  return (
    <div>
        Works
        <br />
        <button onClick={()=> {
            navigate('/');
        }}>Home으로 이동</button>
    </div>
  )
}

export default Works
```

<br/>

## 🧸회고🧸
hook 개념 다시 공부를 다시 해야할 것 같다. 어디서 쓰이고 어떻게 사용하는지 개념 다시 잡기

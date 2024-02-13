![image](https://github.com/limhyerin/TIL/assets/70150896/750cdc5f-f549-4844-b618-f848b46ca877)# ☀️ 2024.01.23 Today I Learned ☀️
>개인과제 분석

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 카드 뭉치 (Javascript)

### React 입문
- node_modules가 Github에 업로드가 되지 않는 이유
- todo의 id값을 줄때 중복되는 문제 발생
- UUID 사용법
- App.jsx 파일 return 안에는 간략하고 깔끔하게 작성하는 것이 중요

<br/>

## 📁 배운 내용 📁
![image](https://github.com/limhyerin/TIL/assets/70150896/20101b84-2215-4b5e-8f1c-e35895b94650)


### 01 node_modules가 Github에 업로드가 되지 않는 이유
👉 일단, 파일 자체가 너무 무겁다 <br/>
👉 이 폴더가 없더라도 재현이 가능하기 때문 (package.json) <br/>
👉 gitignore에 작성이 되어있기 때문 <br/>

 <br/> 

### 02 todo의 id값을 줄때 중복되는 문제 발생
```js
const newTodo = {
    id: todo.length + 1, //UUID 혹은 ShortID로 변경해보기
    title: title, 
    body: body,
}
``` 

todo.length+1을 통해 처음부터 순서대로 값을 1씩 늘려가며 id값을 할당하게 되는데 만약 3이 delete된다면 그 다음에 생성되는 todo의 index는 todo의 length값에 +1을 한 값을 주기 때문에 4가 할당되게 된다. 그렇게 된다면 이미 있었던 id값인 4와 중복이 되기 때문에 문제가 발생할 수 있다.
![image](https://github.com/limhyerin/TIL/assets/70150896/31910059-1391-4ecd-a7c2-749aafe47c1e)
이를 해결하기 위해 id값을 중복없는 값을 주는 방안으로 변경하는 것이 좋다. 그래서 중복되지 않는 고유한 id를 할당해주기 위해 uuid 라이브러리를 통해 UUID를 사용하거나 ShortID, data.now를 사용하는 등 다양한 방법이 있다.

<br/> 

### 03 UUID 사용법
#### 1) 설치 (npm/ yarn)
```
npm install uuid
```
```
yarn add uuid
``` 

<br/>

#### 2) 사용법
```js
import {v4 as uuidv4} from 'uuid'
const id = uuidv4()
``` 

<br/>
 
### 04 App.jsx 파일 return 안에는 간략하고 깔끔하게 작성하는 것이 중요
```html
<Layout>
  <Containner>
</Layout>
```
```html
<div className="layout-1200">
  <Header>
  <AddTodo>
  <Todo>
</div>
```

<br/>

## 📁 개선 사항 📁
>개인과제 : TodoList 수정 및 보완 사항
### 1. 삭제하기 버튼 클릭 시, 삭제 여부를 묻는 alert창 띄우기
### 2. 어떤 todo도 등록하지 않았다면
  - Working : 아직 등록한 todo가 없습니다 <br/>
  - Done : 아직 완료된 todo가 없습니다 <br/>
### 3. 컴포넌트 다시 제대로 분리하기
-> 기능들만 묶어놔서 App.jsx가 깔끔하지 못하고 코드가 너무 김 
### 4. useState를 참조되는 컴포넌트에 넣기
### 5. id값 중복없는 다른 값으로 주기
  - UUID, ShortID, date.now() ...

<br/>

## 🧸회고🧸
컴포넌트 분리하는 부분에서 그냥 자주쓰는 "기능들만" 묶어놓으면 된다고만 생각했는데 App.jsx 파일을 간결하게 작성해주는게 좋은지 오늘 처음 알았다.. 아직 코드 피드백을 받지는 않았지만 벌써부터 많은 피드백을 주실 것 같아서 두렵다..ㅎㅎ 다시 잘 수정해보기

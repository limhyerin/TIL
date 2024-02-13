# ☀️ 2024.01.22 Today I Learned ☀️
>TodoList 기능 구현 및 css 구현

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 2016년 (Javascript)

### Project - TodoList
- 제목, 내용 입력하고 추가버튼 클릭시 todo 생성
- 생성된 todo Working 밑에 생성
- Working todo 삭제하기, 완료 버튼
- Working todo 삭제하기 버튼 클릭 시, todo 삭제
- Working todo 완료 버튼 클릭 시, Done 밑에 표시
- Done 삭제하기 버튼 클릭 시, todo 삭제
- Done 취소 버튼 클릭 시, Working 밑에 다시 올리기
- 자주 사용되는 컴포넌트 분리
- css 꾸미기

<br/>

## 🛠️ 발생한 문제 1 🛠️
Todolist 기능구현 단계에서 Todo의 제목과 내용을 입력하고 추가하기 버튼을 클릭했을때, Working 아래에 추가한 todo를 생성하는데 성공했다. 그리고 해당 todo를 클릭하면 Done에 각각의 todo가 추가되는데, Working에서도 그대로 todo가 남아있으며 삭제시에 모두 같이 삭제되는 문제가 발생했다
![image](https://github.com/limhyerin/TIL/assets/70150896/2f52d4d5-25d8-4ef2-a099-bb8bca5faa3a)

<br/>

## 🔔 해결 🔔
먼저 초기값의 isDone은 false이고, Working 밑에 생성되는 todo의 완료 버튼을 클릭할 시, isDone에 true 값을 주어 서로 분리되도록 하고 다시 Done에서 취소버튼을 클릭하면 isDone의 값이 false가 되도록 해주었다.

### Working
```html
<div className="app-style">
{
    todo.filter((item) => !item.isDone).map((item) => (
      <Todo key={item.id} item={item} clickHandler1={clickDelHandler} clickHandler2={clickDoneHandler} btn1={"삭제하기"} btn2={"완료"}/>
    ))
}
</div>
```

### Done
```html
<div className="app-style">
{
    todo.filter((item) => item.isDone).map((item) => (
      <Todo key={item.id} item={item} clickHandler1={clickDelHandler} clickHandler2={clickCancelHandler} btn1={"삭제하기"} btn2={"취소"}/>
    ))
}
</div>
```
![image](https://github.com/limhyerin/TIL/assets/70150896/c0f007e6-be4f-4f88-b79f-2cb049855ec9)


<br/>
 
## 🛠️ 발생한 문제 2 🛠️
todo의 제목, 내용을 입력하고 추가하기 버튼을 클릭했을때, working아래에 todo가 생기고 이 todo의 완료버튼을 클릭시 Done에 todo가 생성되게 되는데 todo안에 있는 버튼을 클릭했을때 모든 기능이 제대로 동작하지 않는다.
![image](https://github.com/limhyerin/TIL/assets/70150896/4fd8a5bd-4613-4216-9c22-adf51be3a315)

<br/> 

## 🔔 해결 🔔
onclick을 깜박해서 작성하지 않아서 작동하지 않았던 거였다...! 다시는 이런 실수를 하면 안되겠다
```html
<button onClick={() => clickDelHandler(item.id)}>삭제하기</button>
<button onClick={() => clickCancelHandler(item.id)}>취소</button>
```

<br/> 
 
## 📁 배운점/개선 사항 📁
### 1. JSX 문법이란 무엇일까요?
JSX는 하나의 파일에 자바스크립트와 HTML을 동시에 작성하여 편리 <br/>
JSX란 Javascript + XML 의 약자로써 자바스크립트와 XML이 합쳐진 문법 <br/>

### 2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요?
Hooks 라는 기능이 도입되면서 함수형 컴포넌트에서도 상태를 관리할 수 있게 되었습니다 <br/>
useState 를 통해 컴포넌트에서 바뀌는 값 관리하기 <br/>

### 3. 애플리케이션의 상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요?
>> 추후 작성예정

### 4. 기능 구현을 위해 불변성 유지가 필요한 부분이 있었다면 하나만 설명해 주세요.
불변성이란 값이나 상태를 변경할 수 없는 것을 의미

### 5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 컴포넌트로 분리해 보셨나요? 그렇다면 어떠한 이점이 있었나요?
>> 추후 작성예정

<br/>

## 🧸회고🧸
반복되는 컴포넌트를 분리해보는 것을 오늘 해보았는데 어디서 써야할지 감이 안잡혀서 그냥 쭉 코드를 작성해보다가 반복되는 부분이 Working 밑에 생성되는 todo와 Done 밑에 생성되는 todo 부분이여서 이 부분을 분리해보자하고 todo.jsx 파일에 반복되는 코드와 매개변수로 받을 것들을 작성해서 사용해봤는데 너무 편했다! 근데 다시 작성해보라고 하면 또 버벅거릴 것 같아서 다시 연습해봐야겠다..

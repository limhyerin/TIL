# ☀️ 2024.01.19 Today I Learned ☀️
>알고리즘 코드 카타, 자바스크립트 다시 연습

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 문자열 내 마음대로 정렬하기 (Javascript)

### React 입문
- React 자바스크립트 연습
- foreach
- filter
- map
- reduce
- push
- pop

<br/>

## 📁 배운 내용 📁
```js
const initialArray = [
    "apple",
    "banana",
    "cherry",
    "elderberry",
    "watermelon",
    "grape",
  ];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
``` 

### 01 foreach
foreach문을 통해 Array 배열에 있는 요소들을 하나하나 다 빼와서 붙여주고 마지막에 따라붙는 ,와 공백을 없애주기 위해 slice를 사용하여 첫번째 요소부터 -2인덱스전까지 출력하도록 해준다
![image](https://github.com/limhyerin/TIL/assets/70150896/b8bb5487-ef94-442c-b021-67f2937ee1c9)

```js
const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit} ,`;
    });
    // tempResult = tempResult.slice(0, -2);
    // setResult(tempResult);
    setResult(tempResult.slice(0, -2));
  };
```

<br/>

### 02 filter
검색한 단어가 있는지 필터링을 하고 꼭 모든 글자를 다 입력하지 않더라도 includes를 통해 입력한 값에 해당하는 문자혹은 문자열이 배열안에 있다면 Result에 반환하도록 한다.
![image](https://github.com/limhyerin/TIL/assets/70150896/7208dc42-905c-4709-8f91-c242775b48f5)

```js
const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // 얘를 필터링을 할지 말지를 결정한다.
      if (fruit.includes(query)) {
        return true;
      } else {
        return false; // 여기서 결정한다.
      }
    });
    setResult(filteredList.join(", "));
  };
 ```

<br/>

### 03 map
map함수를 통해 배열의 값들을 원하는 값으로 바꿔서 다시 출력하도록 할 것인데 그 중에서도 각 배열의 요소들을 대문자로 변경하여 출력하도록 한다. toUpperCase를 통해 각 요소들을 하나하나 대문자로 바꿔주고 배열을 하나의 문자열로 join하여 출력한다
![image](https://github.com/limhyerin/TIL/assets/70150896/1946188e-9bf3-4aff-83e7-dc891b96f08f)

```js
const handleMap = () => {
    // array를 대문자로 변환하여 출력
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };
```

<br/>

### 04 reduce
reduce의 acc는 배열의 첫번째 인덱스에 있는 값이 들어가고 그 뒤로는 undefined 값이 들어가게 된다. 그리고 cur에는 배열의 첫번째 요소를 제외한 나머지가 들어가게 된다
![image](https://github.com/limhyerin/TIL/assets/70150896/cba137d1-fa50-4b0c-a681-0623bffbd9b1)

```js
const handleReduce = () => {
    const reducedListText = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
    });
    setResult(reducedListText);
  };
```

<br/>

### 05 push
입력한 값이 없는 상태로 push 버튼을 클릭한다면 값이 없다는 alert창을 띄우고 false를 반환한다. 그리고 값을 입력했다면 newArr 배열을 새롭게 만들어서 기존의 array 배열을 풀어서 뒤에 입력값을 넣어준다. 그리고 array의 값을 추가된 값으로 변경시켜준다.
![image](https://github.com/limhyerin/TIL/assets/70150896/c4cd662f-eff5-4cc6-900e-7db5e5057f45)

```js
const handlePush = () => {
    if (!query) {
      alert("값이 없습니다!");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr); // 추가된 값을 원본 값에 저장하는것
    setResult(newArr.join(", ")); // 배열 뒤에 값을 붙이는 것
  };
```

<br/>

### 06 pop
pop함수는 뒤에 있는 값들을 제거해주는 함수로 Array 배열에 담겨있는 요소들을 맨뒤에 인덱스의 값부터 삭제 시켜주게 된다.
![image](https://github.com/limhyerin/TIL/assets/70150896/cc3eefda-c682-4ad6-ac04-f351f95fe742)

```js
const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };
 ```

각각 button을 클릭했을때 해당 함수로 정의해둔 기능들이 구현될 수 있도록 한다.
```html
<button onClick={handleForEach}>forEach</button>
<button onClick={handleFilter}>filter</button>
<button onClick={handleMap}>map</button>
<button onClick={handleReduce}>Reduce</button>
<button onClick={handlePush}>Push</button>
<button onClick={handlePop}>Pop</button>
``` 

 

# 전체코드
```js
import { useState } from "react";
import "./App.css";
function App() {
  const initialArray = [
    "apple",
    "banana",
    "cherry",
    "elderberry",
    "watermelon",
    "grape",
  ];
  const [array, setArray] = useState(initialArray);
  const [result, setResult] = useState("");
  const [query, setQuery] = useState("");
  /** 함수들 */
  const handleForEach = () => {
    let tempResult = "";
    array.forEach(function (fruit) {
      tempResult += `${fruit} ,`;
    });
    // tempResult = tempResult.slice(0, -2);
    // setResult(tempResult);
    setResult(tempResult.slice(0, -2));
  };
  const handleFilter = () => {
    const filteredList = array.filter(function (fruit) {
      // 얘를 필터링을 할지 말지를 결정한다.
      if (fruit.includes(query)) {
        return true;
      } else {
        return false; // 여기서 결정한다.
      }
    });
    setResult(filteredList.join(", "));
  };
  const handleMap = () => {
    // array를 대문자로 변환하여 출력
    const mappedList = array.map(function (fruit) {
      return fruit.toUpperCase();
    });
    setResult(mappedList.join(", "));
  };
  // const handleReduce = () => {
  // reduce 누적된 값으로 환산하다 이런 느낌
  //  array.reduce(function(acc, cur) {
  //    console.log(acc); // apple, undefined, undefined, ...
  //    console.log(cur); // banana, cherry, elderberry, watermelon, grape
  //    return ;
  // });
  const handleReduce = () => {
    const reducedListText = array.reduce(function (acc, cur) {
      return `${acc}, ${cur}`;
    });
    setResult(reducedListText);
  };
  const handlePush = () => {
    if (!query) {
      alert("값이 없습니다!");
      return false;
    }
    const newArr = [...array, query];
    setArray(newArr); // 추가된 값을 원본 값에 저장하는것
    setResult(newArr.join(", ")); // 배열 뒤에 값을 붙이는 것
  };
  const handlePop = () => {
    const newArr = [...array];
    newArr.pop();
    setArray(newArr);
    setResult(newArr.join(", "));
  };

  return (
    <div>
      <h1>Array API Practice</h1>
      <div>
        <input
          value={query}
          onChange={function (e) {
            setQuery(e.target.value);
          }}
        />
      </div>
      <div>
        <button onClick={handleForEach}>forEach</button>
        <button onClick={handleFilter}>filter</button>
        <button onClick={handleMap}>map</button>
        <button onClick={handleReduce}>Reduce</button>

        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
      </div>
      <div>
        <strong>Array</strong> : {array.join(", ")}
      </div>
      <div>
        <strong>Result</strong> : {result}
      </div>
    </div>
  );
}
export default App;
```

<br/>

## 📁 배운점/개선 사항 📁
- JSX에서 다양한 자바스크립트 함수를 적용하는 법
- 추가 과제 풀면서 더 익숙해지기 + 화살표 함수 연습 많이 하기

<br/>

## 🧸회고🧸
스탠다드반 강의 들으면서 엄청 자세하고 하나하나 다 알려주셔서 너무 이해가 잘됐다..쵝오 <br/>
개인과제에서 구현해야하는 부분에 많이 적용해볼 수 있을 것 같아서 반복적으로 해보고 추가과제하면서 익숙해져야겠다

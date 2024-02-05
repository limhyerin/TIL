# 💡오늘의 목표💡
Javascript 기본문법 강의 듣고 정리/ 분리해서 다시 작성 예정..

<br/>

# 📖오늘 배운 내용📖
## 01 연산자

### 1) 산술 연산자
```js
// 1. 더하기 연산자
console.log(1+1); // 2
console.log(1+"1"); // 11
```
```js
// 2. 빼기 연산자
console.log(1-"2"); // -1
console.log(1-2); // -1
```
```js
// 3. 곱하기 연산자(*)
console.log(2*3); // 6
console.log("2"*3); // 6
```
```js
// 4. 나누기 연산자(/)
console.log(4/2); // 2
console.log("4"/2); // 2
```
```js
// 5. 나누기 연산자(/) vs 나머지 연산자(%)
console.log(5/2); //2.5
console.log(5%2); // 1
```

<br/> 

#### 2) 할당연산자
```js
// 등호 연산자(=)
let x = 10;
console.log(x)
```
```js
// 더하기 등호 연산자(+=)
x += 5; // x = x+5
console.log(x);
```
```js
// 빼기 등호 연산자(-=)
x -= 5;
console.log(x);
```
```js
//  곱하기 등호 연산자
let a = 10;
a += 2;

console.log(a);
``` 

 <br/>

#### 3) 비교 연산자

 **(1) 일치 연산자(===)**
타입까지 일치해야 true를 반환하는 연산자
```js
console.log(2 === 2); // true
console.log("2" === 2); // false
console.log(2 === "2"); // false
```

 **(2) 불일치 연산자**
타입가지 일치해야 반환하는 연산자
```js
console.log(2 !== 2); // false
console.log("2" !== 2); // true
console.log(2 !== "2"); // true
``` 

 **(3) 작다 연산자(<)**
```js
console.log(2 < 3); // true
console.log(2 <= 3); // true
console.log(3 <= 3); // true
console.log(4 <= 3); // false
``` 

<br/> 

#### 4) 논리 연산자
 (1) 논리곱 연산자 : 모두 true일대 true 반환
```js
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
``` 

 (2) 논리합 연산자 : 두 값 중 하나라도 true인 경우 true
```js
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); //true
console.log(false || false); // false
```

 (3) 논리 부정 연산자
```js
console.log(!true);
let a = true;
console.log(!a);
``` 

<br/> 

#### 5) 삼항 연산자
조건에 따라 값을 선택 참이면 첫번재 값, 거짓이면 두번째 값
```js
let x = 10;
let result = x>5 ? "크다":"작다";
console.log(result);
``` 

🔎 추가 예제 : 3항 연산자를 이용해서 y가 10보다 작은 경우 작다를 출력, 10보다 크다면 크다를 출력해보기
```js
let y = 20;
let result1 = y < 10 ? "작다":"크다";
``` 

<br/>

### 02 함수

#### 1) 함수 선언문
두 개의 숫자를 입력받아서 덧셈을 한 후 내보내는 함수
```js
function add(x, y) {
    return x+y;
}
``` 
 

#### 2) 함수 표현식
```js
let add2 = function(x,y) {
    return x+y;
}

// 함수 호출 시 add(입력값,입력값);
console.log(add(1,2));
``` 

#### 3) 화살표 함수

 (1) 기본적인 화살표 함수
```js
function add(x,y) {
    return x+y
}

let arrowFun01 = (x,y) => {
    return x+y
}
``` 

 (2) 한줄로 표현
```js
let arrowFun02 = (x,y) => x+y;

function testFunc(x) {
    return x;
}

//화살 표 함수로!!!
let arrowFunc03 = (x) => x;
``` 

<br/>

### 03 변수(전역변수, 지역변수)

#### 1) 전역변수
```js
let x = 10; // 전역 변수

function printX() {
    console.log(x);
}

console.log(x);
printX();
``` 

 

#### 2)  지역 변수
```js
function printX() {
    let x = 10; // 지역 변수
    console.log(x);
}

console.log(x); // error
printX();
``` 

<br/>

### 04 조건문 | if, else if, else

#### 1) if문
```js
// 1-1 if 문
let x = 10;

if (x>0) {
    console.log("x는 양수입니다");
} 
```
```js
// 1-2
let y = "hello world"
// y의 길이가 5보다 크거나 같으면 길이를 console.log로 출력
if (y.length >= 5){
    console.log(y.length);
}
```
#### 2) if -else문
```js
// 2. if -else 문
let x = 10;
if (x>0) {
    // main logic #1
    console.log("x는 양수입니다");
} else {
    // main logic #2
    console.log("x는 음수입니다")
}
```
#### 3) if -else if - else 문
```js
// 3. if - else if - else 문
let x = 10;
if (x >= 20) {
    // main logic #1
    console.log("x는 20이상입니다");
} else if (x >= 10 && x < 20) {
    // main logic #2
    console.log("x는 10이상입니다")
} else {
    // main logic #3
    console.log("x는 음수입니다")
}
``` 

#### 4) if 조건문 중첩
```js
// 조건 문 중첩
let age = 20;
let gender = "여성";

// 미성년자 구분
if(age >= 18) {
    console.log("성인입니다");
    if(gender === "여성"){
        console("성인 여성입니다");
    } else {
        console("성인 남성입니다");
    }
} else {
    console("미성년입니다")
    if(gender === "여성"){
        console("미성년 여성입니다");
    } else {
        console("미성년 남성입니다");
    }
}
``` 

#### 5) switch
```js
// 4. switch
// 변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
// default
let fruit = "사과";

switch(fruit) {
    case "사과":
        console.log('사과입니다');
        break;
    case "바나나":
        console.log('바나나입니다');
        break;
    case "키위":
        console.log('키위입니다');
        break;
    default:
        console.log("아무것도 아닙니다");
        break;
}
``` 

<br/> 

### 05 조건부 실행
```js
// 조건부 실행
let x = 10;

// if (x > 0) {
//    console.log("x는 양수입니다");
//}


// and 조건(&&)
// 앞에 조건을 만족하면 뒤에를 실행하라
x > 0 && console.log("x는 양수입니다");
//or 조건(||)
// 삼항 연산자와 단축평가
let y;
let z = y || 20;

console.log(z);
``` 

<br/> 

### 06 객체
객체 : key - vlaue pair
하나의 변수에 여러개의 값을 넣을 수 있음
#### 1) 객체 생성 방법

  **(1) 기본적인 객체 생성 방법**
```js
let person = {
    name:"홍길동",
    age:30,
    gender:"남자",
};
```
 **(2) 생성자 함수를 이용한 객체 생성 방법**
```js
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

let person1 = new Person("홍길동", 30, "남자");
let person2 = new Person("홍길순", 20, "여자");
```

#### 2) 접근하는 방법
```js
console.log("1", person.name);
console.log("2", person.age);
console.log("3", person.gender);
``` 

#### 3) 객체 메소드
객체가 가진 여러가지 기능 : Object.~~~
  **(1) Object.key() :key를 가져오는 메소드**
```js
let person = {
    name:"홍길동",
    age:30,
    gender:"남자",
};

let keys = Object.keys(person);
console.log("keys => ", keys);
``` 

  **(2) values**
```js
let values = Object.values(person);
console.log("values => ", values)
```

  **(3) entries**
key의 value를 묶어서 배열로 만든 배열!! (2차원 배열)
```js
let entries = Object.entries(person);
console.log("entries => ", entries);
```

  **(4) assign**
객체 복사 및 변경
```js
let newPerson = {};
Object.assign(newPerson, person);
console.log("newPerson => ", newPerson);
let newPerson = {};
Object.assign(newPerson, person, {age:31});
console.log("newPerson => ", newPerson);
``` 

  **(5) 객체 비교**
```js
let person1 = {
    name:"홍길동",
    age:30,
    gender:"남자",
};

let person2 = {
    name:"홍길동",
    age:30,
    gender:"남자",
};

console.log("answer => ", person1 === person2); // false, 객체는 별도의 공간에 값을 저장하고 그렇기 때문에 주소를 저장한다. 그래서 false가 나온것

// 객체 문자열화 해서 비교하기 (JSON.stringify(객체))
console.log(JSON.stringify(person1) === JSON.stringify(person2));
``` 

  **(6) 객체 병합**
```js
let person1 = {
    name:"홍길동",
    age:30,
};

let person2 = {
    gender:"남자",
};

// ... : spread perator(객체를 풀어서 병합시키는 것)
let perfactMan = {...person1, ...person2};
console.log(perfactMan);
``` 

<br/>

### 07 배열

#### 1) 생성

**[ 배열 ]**
**1. 생성**
(1) 기본 생성
```js
let fruit = ['사과', '바나나', '오렌지'];
```

**2. 크기 지정**
```js
let number = new Array(5);

console.log(fruit.length); // 3
console.log(number.length); // 5
```

#### 2) 요소 접근
**1. 요소 접근**
```js
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
```

 #### 3) 배열 메소드
**1. push**
```js
let fruit1 = ['사과', '바나나', '오렌지'];
console.log("1 => ", fruit1);

fruit1.push('오렌지');
console.log("2 => ", fruit1);
```

**2. pop**
```js
let fruits = ["사과", "바나나"];
console.log("1 => ", fruits);
fruits.pop(); // 배열에 있던 마지막 요소가 없어짐
console.log("2 => ", fruits);
```

**3. shift**
```js
let fruits_s = ["사과", "바나나", "키위"];
console.log("1 => ", fruits_s);
fruits_s.shift(); // 배열에 있던 마지막 요소가 없어짐
console.log("2 => ", fruits_s);
```

**4. unshift**
```js
let fruits_us = ["사과", "바나나", "키위"];
console.log("1 => ", fruits_us);
fruits_us.unshift("포도"); // shift랑 반대로 첫번째 자리에 추가
console.log("2 => ", fruits_us);
```

**5. splice**
```js
let fruits = ["사과", "바나나", "키위"];
fruits.splice(1,1, "포도"); // 위치, 삭제할 개수, 추가할 사항
fruits.splice();
console.log(fruits);
```

**6. slice**
```js
let fruits_s = ["사과", "바나나", "키위"];
let slicedFruits = fruits_s.slice(1,2); //  제외하고 저장 첫번째 인덱스, 나머지 인덱스-1
console.log(slicedFruits);
``` 
<br/>
 
### 08 forEach, map, filter, find
```
let numbers = [1,2,3,4,5];

// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function(item){
    console.log('item입니다 => '+item);
});
``` 

<br/>

 ### 09 map
항상 원본 배열의 길이만큼 return 됨
```js
let newNumbers = numbers.map(function(item){
    return item*2;
});

console.log(newNumbers);
``` 

<br/>

### 10 filter
```js
let numbers = [4,1,5,3,5];

let newNumbers = numbers.filter(function(item){
    return item === 5;
});

console.log(newNumbers);
``` 

<br/>

### 11 find
원하는 조건의 값 중 맨 처음 값만 출력
```js
let numbers = [4,1,5,3,5];

let newNumbers = numbers.find(function(item){
    return item === 5;
});

console.log(newNumbers);
```

<br/>

### 12 반복문
#### 1) for 문
// for, while => ~하는 동안 : 반복문
// for (초기값; 조건식; 증감식) {}
```js
for(let i = 0; i<10; i++) {
    console.log(i);
}
```
#### 2) 배열과 for문
```js
const arr = ["one","two","three","four","five"];
for(let j = 0; j <arr.length; j++) {
    console.log(j);
    console.log(arr[j]);
}
``` 

**🔎 추가 예제 : 0부터 10까지의 수 중에서 2의 배수만 console.log로 출력하는 방식**
```
let arr = []
for (let i =0; i<=10; i++){
    if(i >= 2) {
        if(i%2===0){
            console.log(i+"는 2의 배수 입니다");
        }
    }
}
```
#### 3) for ~ in 문
```js
// 객체의 속성을 출력하는 문법
let person = {
    name:"John",
    age:30,
    gender:"male",
};

for (let key in person) {
    console.log(key+": "+person[key]);
}
```

#### 4) while 문
```js
// while
let i = 0;

while(i<10) {
    console.log(i);
    i++;
}
```

**🔎 추가 예제 : while 문을 활용해서, 3초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예시**
```js
let i = 3
while(i < 100){
    if(i%5 === 0 && i >= 5) {
        console.log(i+"는 5의 배수");
    }
    i++;
}
```

#### 5) do ~while 문
```js
//do ~ while
let i = 0;

do {
    console.log(i);
    i++;
} while (i>10);
```

#### 6) for문 안에서 break와 continue
```js
for(let i = 0; i<10; i++) {
    if(i===5){
        break;
    }
    console.log(i);
}

for(let i = 0; i<10; i++) {
    if(i===5){
        continue; // 그 다음 순서로 넘어감
    }
    console.log(i);
}
``` 

<br/>

# 🧸코멘트🧸
한 주동안 TIL 작성하면서 어떤식으로 작성하는게 맞을지 몰랐기도 했고 문법이라 배운내용을 고대로 쭉 나열해서 작성하는 식으로 했는데 그렇게 하다보니 너무 지저분해지고 직접찾아보려고 할때 잘 못찾을 것 같다는 생각이 들었다. 그래서 많은 분들의 TIL 작성법을 찾아봤고 이런식으로 작성하면 안되는 것 같아서 각각 페이지별로 저장해서 TIL 다시 작성해봐야겠다

# 💡오늘의 목표💡
변수, 상수, 콘솔, 주석, 데이터 타입, boolean, 형 변환 개념 정리

<br/>

# 📖오늘 배운 내용📖
### 여러 줄을 한번에 주석처리 할때
>ctrl + / : 영역을 드래그한 후 단축키를 누르면 주석처리 됌
 
### AJAX
>이전에는 버튼 클릭시 모든 것이 새로고침되었지만 AJAX를 통해 해당구역만 바뀌는 것이 가능해짐
 
### User Experience
>사용자 경험 (사용자가 얼마나 편리하게 프로그램을 사용하는가)
 
### 객체 지향, 절차지향
>절차지향 : 첫 번째 일을 처리한 다음 일을 처리하면서 순서대로 프로그램을 만드는것 <br/>
객체지향 : 데이터와 함수를 객체라는 그룹으로 묶어서 처리 <br/>

### 동적타이핑
>JAVA같은 언어의 경우 변수를 지정할때 자료형을 적어서 string a = "abc" 이렇게 작성해주는데 Javascript는 var a = "abc"이런식으로 자료형 지정안해줌
 
### 비동기처리
>작업을 순차적으로 기다리지 않고, 병렬로 처리

<br/>

### 01 변수와 상수
#### 1) 변수
변수는 원하는 값을 저장하여 읽어들여서 재사용을 하며 사용하는 공간

>변수 값 : 변수에 저장된 값
변수 할당 : 변수에 값을 저장하는 행위
변수 선언 : 변수에 사용하기 위해 컴퓨터에 알리는 행위
변수 참조 : 변수에 할당된 값을 읽어보는 것

```js
var myVar = "Hello world";
var a = 10;
var b = 20;

var c = a+b;
``` 

변수를 선언할 수 있는 방법은 var, let, const 3가지가 있다. <br/>
그 중에서 var와 let은 둘 다 변수이기때문에 값을 변경시킬 수 있다.  <br/>
```js
//1. var
var myVar = "Hello World";
myVar = "Hello"
console.log(myVar); // Hello
```
```js
//2. let
let myLet = "Hello World";
myLet = "Hello"
console.log(myLet); // Hello
``` 

 #### 2) 상수
const는 상수로 값을 지정해놓으면 변경이 불가능하다. 건드리면 안되는 값을 저장할때 const를 사용하면 된다.
```js
//3. const
const myConst = "Hello World";
myConst = "Hello"
console.log(myConst); // error
``` 
<br/> 

### 02 콘솔 출력, 주석
#### 1) console.log
괄호 안의 메세지를 콘솔창에 출력하는 명령어
```js
console.log("Hello World!");
```
#### 2) 주석
슬래쉬( / )를 두번 사용해서 주석을 작성. 주석에 작성한 글은 컴퓨터가 읽지 않음
```js
// 주석
``` 

<br/>

### 03 데이터 타입
Javascript는 코드를 작성할 때 데이터 타입을 지정하는 것이 아니라 실제 코드가 실행될 때 타입이 결정된다.

#### 1) 숫자
 (1) 정수와 실수

정수와 실수 모두 typeof를 통해 자료형을 확인했을때 둘다 number로 나오는 것을 볼 수 있다.
```js
let num1 = 10;
console.log(num1);
console.log(typeof num1); //number

let num2 = 3.14;
console.log(num2);
console.log(typeof num2); //number
```

 (2) NaN (Not a Number)

숫자가 아닌 값을 변환하려고 할때 나타나는 현상
```js
let num4 = "Hello"/2; 
console.log(num4); //NaN
```

 (3) Infinity(무한대)
```js
let num5 = 1/0;
console.log(num5);
console.log(typeof num5);
```

 (4) -Infinity(무한대)
```js
let num6 = 1/0;
console.log(num6);
console.log(typeof num6);
``` 

 

#### 2) 문자열

  (1) 문자열
```js
let str = "Hello";
console.log(str);
console.log(typeof str);
``` 

  (2) 문자열 길이 확인(length)
```js
console.log(str.length);
```

  (3) 문자열 결합 (concat)
```js
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2); // 변수 붙이기
console.log(result);
``` 

  (4) 문자열 자르기(substr, slice)

- substr( , ) : 시작 위치부터 몇개까지 자를지
- slice( , ) : 시작위치부터 끝 위치까지 자르기
```js
let str3 = "Hello, world";
console.log(str3.substr(7,5)); //시작 위치부터 몇개까지 자를지
console.log(str3.slice(7,12)); //시작위치부터 끝위치까지 자르기
```

  (5) 문자열 검색(search)

단어가 몇번째부터 시작하는지 찾기
```js
let str4 = "Hello, World";
console.log(str4.search("World")); //World
```

  (6) 문자열 대체(replace)
변수. replace("기존문자", "바꿀문자")
```js
let str5 = "Hello, World";
let result01 = str5.replace("World", "Javascript");
console.log(result01);
``` 

  (7) 문자열 분할(split)
```js
let str6 = "apple, banana, kiwi";
let result02 = str6.split(","); // ,를 기준으로 문자를 분할
console.log(result02);
``` 
<br/>

### 04 Boolean(불리언)
#### 1) 참, 거짓
```js
let bool1 = true;
let bool2 = false;

console.log(bool1); // true
console.log(bool2); // false
console.log(typeof bool1); // boolean
console.log(typeof bool2); // boolean
``` 

#### 2) undefined
변수에 값을 할당하지 않았을때
```js
let x;
console.log(x);
``` 

#### 3) null
값이 존재하지 않음을 의도적으로 나타내는 방법으로 값이 할당되지 않은 undefined와는 다르다
```js
let y = null;
``` 

#### 4) 객체(object)
```js
//object(객체) : key-value pair
let person = {
    name:'choi',
    age:'20',
    isMarried:true,
};

console.log(typeof person); //object
``` 

#### 5) 배열(array)
여러개의 데이터를 순서대로 저장하는 데이터 타입
```js
let number = [1,2,3,4,5];
let fruits = ['apple','banana','orange'];
``` 
<br/>

### 05 형 변환
형태를 바꾸는 방법으로 명시적 형 변환과 암시적 형 변환이 있다.

 

#### 1) 암시적 형 변환
의도적으로 형 변환을 하려고 한 것은 아니지만 자동으로 바뀌는 것
문자열 + {}/ null/ undefined 처럼 문자열과 만나면 문자열로 자료형이 변환된다.

 

  (1) 문자열

// 1-1 문자열
```js
let result1 = 1+"2";
console.log(result1); //12
console.log(typeof result1); //string

let result2 = "1"+true;
console.log(result2); //1true
console.log(typeof result2); //string

// {}, null, undefined + "1" => 문자열과 만나면 문자열이 됌
``` 

 

  (2) 숫자
```
// 1-2 숫자
let result3 = 1-"2";
console.log(result3); // -1
console.log(typeof result3); // number

let result4 = "2" * "3";
console.log(result4); // 6
console.log(typeof result4); // number
``` 

#### 2) 명시적 형 변환

 1) Boolean
문자열은 빈 문자열이 아니라 어떤 값을 가지고 있는 것들은 모두 true의 값을 가지며 객체는 값이 비어있더라도 true의 값을 가진다
```js
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log("------------");
console.log(Boolean("false")); // true  (문자열은 빈 문자열이 아니라 어떤 값이 있는 것들은 모두  true)
console.log(Boolean({})); // true (객체는 값이 비어있더라도  true)
``` 

 2) 문자열
```js
let result5 = String(123);
console.log(typeof result5); //string

let result6 = String(true);
console.log(typeof result6); //string

let result7 = String(false);
console.log(typeof result7); //string

let result8 = String(null);
console.log(typeof result7); //string

let result9 = String(undefined);
console.log(typeof result7); //string
``` 

 3) 숫자
```js
let result10 = Number("123");
console.log(result10);
console.log(typeof result10); //number
```
<br/>

# 🧸코멘트🧸
암시적 형 변환에서 문자열과 숫자 1+"2"가 있을때에는 문자열로 형 변환이 되었었는데 1-"2"에서는 숫자로 형 변환이 된 건지 모르겠다.. 숫자와 문자열의 경우 + 연산자일 경우에만 문자열로 변환되는건가..? 다시 찾아볼 것..

// 01 상수와 변수
// 상수 : const(constant : 변함없는 수)
// 변수 : let
const a = 1;
let b = 3;

a = 3; // error : 상수 값으로 지정해둔 a의 값을 변경시키려고 했기 때문
b = 1; //b 1

console.log("a", a); // TypeError: Assignment to constant variable.
console.log("b", b); // b 1

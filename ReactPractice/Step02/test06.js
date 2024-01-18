// 함수와 화살표함수

// 기본 함수의 구조
function mysum1(x, y) {
  return x + y;
}

// 화살표 함수로 바꾸기
const mysum2 = (x, y) => {
  return x + y;
};

// 화살표 함수 한줄로 바꾸기
// return문이 빠지면서 중괄호가 생략가능 하니 이부분 익숙해지기
const mysum3 = (x, y) => x + y;

console.log("mysum1 : " + mysum1(1, 2)); // mysum1 : 3
console.log("mysum2 : " + mysum2(1, 2)); // mysum2 : 3
console.log("mysum3 : " + mysum3(1, 2)); // mysum3 : 3

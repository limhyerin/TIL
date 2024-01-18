const obj1 = {
  value1: 10,
};

const obj2 = obj1;

//JSON의 형태로 풀었다가 다시 묶어주는 것(문자열 형태로 풀었다가 다시 묶어주는 것)
//새로운 객체를 만들어 낸다고 생각하면 됌
const obj3 = JSON.parse(JSON.stringify(obj1));

// 만약 복사한 obj2의 값을 바꾼다면 어떻게 될까?
// 예상 : obj2만 바뀐다
// 실제 : obj1도 같이 바뀐다
obj2.value1 += 1;

// obj2에서 obj1을 복사할때 주소 값을 복사해오기 때문에 값을 변경해주면
// 주소 값에 있는 값에 변화를 주게 되어 둘다 바뀌게 된다. == 얕은 복사라고 함
console.log("obj1", obj1); // obj1 { value1: 11 }
console.log("obj2", obj2); // obj2 { value1: 11 }
console.log("obj3", obj3); //obj3 { value1: 10 }

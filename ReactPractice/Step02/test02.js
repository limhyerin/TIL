// De(out 반대) + structur + ing
// 구조분해 할당, 배열 / 객체 비구조화
const person = {
  name: "르탄",
  age: 20,
};

const { name, age, notFount } = person; //person 객체에서 name이랑 age 값

console.log("name", name);
console.log("age", age);
console.log("notFound", notFount);

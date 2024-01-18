// var를 사용하지 않는 이유?
// 원래는 괄호 안에 변수를 선언하면 let이나 const는 block level scope로 그 내부에서만 참조되도록 되도록 하는데
// var은 block level scope가 아니기때문에 바깥에서도 참조할 수가 있기에 웬만하면 var 대신 let과 const를 사용하도록 한다.
if (1 == 1) {
  var a = 3;
  console.log("a", a); // a 3
}

console.log("바깥 a", a); // 바깥 a 3

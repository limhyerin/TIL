// 백틱
// 문자열안에 자바스크립트 변수를 넣게 해줄 수 있는 것 : ${} 템플릿 리터럴(Template Literals)
const testValue = "제어하는 값";
console.log(`문자열 ${testValue} 입니다.`); //문자열 제어하는 값 입니다.

// 멀티 리터럴로도 사용가능
const testValue1 = `
    akdjflksjfkdnceiskefjeslkf
    lkdjfkldncdpsojnfeksfnksjf
    vkdsnpeifnslkdfjsdklfhwiew
    djclsjfkdnslekjfdeslkfjskefjesfkjslkf
    foslfkjeklfjslkfjslkfjsl
`;
console.log(testValue1);

// akdjflksjfkdnceiskefjeslkf
// lkdjfkldncdpsojnfeksfnksjf
// vkdsnpeifnslkdfjsdklfhwiew
// djclsjfkdnslekjfdeslkfjskefjesfkjslkf
// foslfkjeklfjslkfjslkfjsl

const 따옴표변수 =
  `만ㅇ랴ㅓㄴ다러아러` +
  `아라춘댜ㅏ추ㅏㅇ너라우라얼` +
  `아러아ㅓ라우챠두치ㅏ노ㅓ로`;

# ☀️ 2024.01.15 Today I Learned ☀️
>팀 프로젝트 상세페이지 기능 구현 완료 및 프로젝트 노션 작성

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 크기가 작은 부분 문자열 (Javascript)

### Team Project - 영화 검색 사이트(상세화면 + 리뷰기능)
- 상세페이지 디자인 완성
- tmdb api에 런타임 데이터 있는지 찾아보고 적용
- 타이틀 옆에 개봉일 연도 붙이기
- 출연진 정보 따로 api 찾아서 가져오기
- 전체적인 css 꾸미기

<br/>

## 🛠️ 발생한 문제 1 🛠️
여지까지 했던 구현 화면에서는 받아온 영화 id에 맞는 제목, 개봉일, 장르, 평점, 줄거리 정도의 데이터를 가지고 왔는데 추가적으로 영화의 런타임정보와 출연진 그리고 감독의 정보들을 받아와서 추가하고 싶었다. 그런데 내가 가져온 popular api의 데이터는 데이터가 없어서 추가를 못하고 css도 조금 조잡하게 된 것 같다는 생각이 들어서 수정을 하고 싶었다.
![image](https://github.com/limhyerin/TIL/assets/70150896/0002fc59-975e-427c-a452-40b4e309f54b)

<br/>
 

## 🔔 해결 🔔
추가적으로 찾아보니 tmdb api 사이트에 detail 항목이 있었고 거기서 추가적으로 detail api를 통해 런타임 정보를 가져올 수 있었다. 분으로만 정보를 주기 때문에 시간 분으로 표시하기 위해 추가적으로 시간을 시간과 분으로 나누어서 데이터를 추가해주었다.
```js
// runtime 분으로 데이터를 받아와서 시간, 분으로 나눠서 저장
let runtime = data["runtime"];
let hour = 0;
let minute = 0;
if (runtime >= 60) {
    hour = Math.floor(runtime / 60);
    minute = runtime % 60;
}
``` 

또한, 추가적으로 출연진과 감독 정보를 받기 위해 또 cast 데이터를 가져와서 추가해주었다. 그리고 포스터에만 css로 그림자를 줘서 조금 구분되도록 만들고 전체적으로 정보를 더 추가해주었다.
![image](https://github.com/limhyerin/TIL/assets/70150896/f192a01e-8eec-43a9-960e-b7a890fb1687)

<br/>
 

## 📁 배운점/개선 사항 📁
숫자, 영어, 한글, 특수문자 선별해서 구별하는 방법
```js
var pattern1 = /[0-9]/; //숫자
var pattern2 = /[a-zA-Z]/; //영어
var pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
var pattern4 = /[~!@#\#$%<>^&*]/; //특수문자
var testStr = "테스트test"; //숫자 체크

if (pattern1.test(testStr)) {
  alert("숫자가 포함"); //false
} //영어 체크
if(pattern2.test(testStr)){
  alert("영어가 포함"); //true
} //한글 체크
if(pattern3.test(testStr)){
  alert("한글이 포함"); //true
} //한글, 영어 둘다 포함해서 체크
if(pattern3.test(testStr) && pattern2.test(testStr)){
  alert("한글 영어 모두 포함"); // true
}
```
<br/>

## 🧸회고🧸
css를 이쁘게 꾸며보고 싶은데 생각만큼 아직은 아는게 많이 없어서 그런지 더 이쁘게 만들지 못해서 아쉬웠다. 다양한 페이지들을 많이 보고 공부해서 앞으로 더 예쁘게 만들어봐야지.. 그리고 cast 데이터에서 출연진들의 정보를 불러오는데에는 성공했지만 감독의 정보를 가져오는 부분이 막혀서 막막하지만.. 빨리 해봐야겠다

# ☀️ 2024.01.11 Today I Learned ☀️
>팀 프로젝트 상세 페이지 구현하기

<br/>
 
## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 이상한 문자 만들기 (Javascript)
- [Programmers] 최대공약수와 최소공배수 (Javascript)

### Team Project - 영화 검색 사이트(상세화면 + 리뷰기능)
- 팀프로젝트 회의
- 팀프로젝트 전체적인 기능 구상
- api 값 받아오기
- html 파일에서 이벤트 발생시켜서 다른 html파일 창으로 이동하는 법 고민하기

### Git
- Github 총정리
- [Git] Github 마크다운 코드 확장자 적용

 <br/>

## 🛠️ 발생한 문제 1 🛠️
팀프로젝트를 진행하던 중 메인 페이지를 담당하시는 팀원분이 상세페이지로 가기 위한 이벤트를 발생시켰을때 상세페이지로 넘어가게 되고 딱 내가 담당한 상세페이지로 넘어올때 같이 넘겨주셨던 id값을 받아서 api값을 불러올때 해당 id값이 존재하는 index 값을 받아오고 싶었는데 딱 생각나는 게 indexOf였다.
```js
fetch(`https://api.themoviedb.org/3/movie/popular?${apiId}&language=ko-KR`)
    .then((res) => res.json())
    .then((data) => {
        let id_index = data["result"].indexOf();
    });
}
``` 

그래서 작성을 하고 있는데 뭔가 이상했다. indexOf()는 배열의 인덱스를 반환하는데 나는 객체에서 인덱스 값을 받아야하는데 이걸 이렇게 진행하면 안될 것 같았다..

 <br/> 

## 🔔 해결 🔔
주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환하고 만족하는 요소가 없으면 -1을 반환한다는 점에서 indexOf랑 findIndex가 비슷한것 같은데 배열의 인덱스를 반환하고 findIndex는 배열속 객체를 검색해 객체가 몇번째에 있는지 그 인덱스를 반환한다고 한다. 그래서 indexOf 방법 대신 사용하면 됐다!
```js
function detailPageOpen(id) {
  fetch(`https://api.themoviedb.org/3/movie/popular?${apiId}&language=ko-KR`)
    .then((res) => res.json())
    .then((data) => {
      let id_index = data["result"].findIndex((obj) => obj.id == "`${id}`"); //findindex, 받은 id값과 동일한 값이 있는 index값 받기
      });
}
```
 <br/>
 
## 🛠️발생한 문제 2🛠️
index.html에서 버튼을 클릭했을때 index2.html에서 작성한 페이지가 나오도록 구현하기 위해 one.js 파일을 참조했는데 버튼에 onclick을 통해 함수를 호출했음에도 함수가 호출이 되지 않았다
```html
<script type="module" src="one.js"></script>
``` 
```js
// one.js
function pageMove() {
  window.location.href = "index2.html";
}
``` 

그래서 대체 뭐가 문제인지 고민을 하다가 아예 코드가 적용이 안된 것일 수도 있으니 html 파일 자체에 script를 적용해서 넣어봤더니 버튼을 클릭했을때 이벤트가 발생해서 페이지가 이동되는 것을 잘 확인할 수 있었다. 
```html
<script>
      function pageMoved() {
        window.location.href = "index2.html";
      }
</script>
``` 
 <br/>
 



## 🔔 해결 🔔
그래서 보았던 부분이 type="module" 부분이였는데 module은 항상 엄격모드로 실행이 되기 때문에 정확한 경로를 적어주어야한다는 것을 알게 되었다. 그래서 작동이 되지 았았던 것 같고 그래서 일반모드에서사용하려고 빼주었더니 아주 잘 작동이 되는 것을 볼 수 있었다
```html
<script src="one.js"></script>
```
![image](https://github.com/limhyerin/TIL/assets/70150896/67f28835-bf47-4531-ae50-458b9d44225f)
![image](https://github.com/limhyerin/TIL/assets/70150896/88113576-2993-492e-93cd-7c480a6b5c48)


<br/>
  
## 📁 배운점/개선 사항 📁
#### IndexOf 와 findIndex
- IndexOf : 배열의 인덱스 검색, 일치하는 값이 없으면 -1 반환
- findIndex : 배열 속 객체를 검색하여 객체가 몇번째에 있는지

하나의 html 파일에서 다른 html파일로 넘어가려고 할때 window.location.href를 사용해서 넘어가주면된다.
```html
<script> function pageMoved() { window.location.href = "index2.html"; } </script>​
``` 

그리고 onclick을 이용해서 이벤트를 발생시키려고 하는데 발생시킬 이벤트가 여러개일때에는 세미콜론을 이용해서 여러개를 작성해주면 된다.
```html
<onclick="search(); pageMoved()">검색</button>
```

 <br/>
 ​
## 🧸회고🧸

api 값을 불러오는 것은 했는데 아직 화면을 확인을 못해서 제대로 구현한 것인지 확인을 하지 못했다. 그래서 일단 오늘 html파일에서 다른 html파일으로 이동하는 것을 적용하고 api 값을 제대로 불러와서 적용했는지 확인을 해봐야겠다. 그렇게 완료를 하고 내일 확실하게 진행하고 막히는 부분이 있으면 튜터님께 꼭 여쭤봐야겠다..

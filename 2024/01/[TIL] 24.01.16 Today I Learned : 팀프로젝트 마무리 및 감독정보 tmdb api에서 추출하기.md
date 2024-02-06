# ☀️ 2024.01.16 Today I Learned ☀️
> 팀 프로젝트 구현 완료 및 발표, 피드백 정리

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 크기가 작은 부분 문자열 (Javascript)

### Team Project - 영화 검색 사이트(상세화면 + 리뷰기능)
- tmdb api에서 crew 영화 감독 정보 빼오기
- Directing이 여러명으로 되어 있으면 가장 첫번째인 사람만 올리기
- 발표자료 맡은 파트 완료

<br/> 

## 🛠️ 발생한 문제 1 🛠️
tmdb api에서 credits 정보를 가져오고 싶었는데 그 중에서도 감독의 정보를 가져오고 싶었다. 그런데 crew에서 department가 Directing으로 되어 있는 사람의 이름을 빼오고 싶은데 같은 인덱스 안에 있는 정보를 만족하면 다른 키 값을 가지고 오는 부분에서 조금 고민을 많이 했고, 만약 가지고 오더라도 Directing 역할이 한명이 아닌 여러명으로 등록되어 있으면 어떻게 해야할지에 대한 부분을 고민했다.
![image](https://github.com/limhyerin/TIL/assets/70150896/a3692e9d-12ea-4160-94dd-682f550e8279)

<br/>
 
## 🔔 해결 🔔
일단 url 정보를 가지고 와서 fetch를 해주고 crew의 department를 crewList 배열에 담아서 해당 department가 Directing으로 되어 있다면 해당 값의 인덱스를 arr 배열에 담고 그 배열에서 인덱스 0번째에 있는 인덱스 값을 가지고 와서 crew의 해당 인덱스번째에 있는 감독의 이름 값을 받아서 출력하는 식으로 구상을 하고 가져올 수 있었다.
```js
// 감독 정보 가져오기
  let url2 = "https://api.themoviedb.org/3/movie/" + movieId + "/credits?language=ko-KR";
  await fetch(url2, options)
    .then((res) => res.json())
    .then((data) => {
      const crews = data["crew"];
      const crewList = [];
      for (key in crews) {
        crewList.push(crews[key].department);
      }

      let directIdx = 0;
      let arr = [];
      for (let i = 0; i < crews.length; i++) {
        if (crews[i]["department"] == "Directing") {
          directIdx = i;
          arr.push(i);
        }
      }

      const directer = crews[arr[0]]["name"];
      console.log(directer);

      // 받아온 데이터들을 html 파일에 붙이기
      const temp_html = `
                      <p class="direct">💁‍♂️ 감독 : ${directer}</p><br>
                     `;

      document.querySelector(".crew").insertAdjacentHTML("beforeend", temp_html);
    });
``` 

구현을 할때 console.log를 사용하지 않고 코드만 쳐보면서 계속 활용해보는 식으로 진행을 했었는데 console.log를 사용해서 불러오고 있는 값들이 제대로 받아지고 있는지 확인을 해보니 확실히 더 알아보기가 편했던 것 같다.
![image](https://github.com/limhyerin/TIL/assets/70150896/9d9f3b62-be3e-4332-9ac7-6ac46366b03a)


그래서 원하는 api 값들을 불러올 수 있었는데 다만 css를 좀 예쁘게 꾸밀 수 있는 방안을 고민해봐야겠다..!
![image](https://github.com/limhyerin/TIL/assets/70150896/b1b09b64-ee75-4304-88f6-07da61928067)

<br/>
 
## 🛠️ 발생한 문제 2 🛠️
가끔씩 메인페이지에서 상세페이지로 이동할 때 감독 정보나 출연진의 정보가 안보였다가 새로고침을 하면 뒤늦게 들어오는 경우가 있었다. 그래서 내 컴퓨터상의 문제인가 했는데 다른 팀원분들의 화면에서도 떴다가 안떴다가 새로고침을 하면 그때 뜨는 경우들이 있어서 문제였다.

<br/>

## 🔔 해결 🔔
우선 전체 코드가 실행되는 detailPageOn 함수에 async를 주고 그 안에 fetch로 데이터값들을 불러오는 부분에 await를 주어서 비동기적인 것들을 동기적으로 바꿔주고 await 부분을 하지 않으면 다음으로 넘어가지 못하게 만들고 그럼으로 인해서  메인페이지에서 상세페이지로 넘어갔을때 모든 정보들이 바로 나오는 것을 볼 수 있었다.
```js
// 파일이 열림과 동시에 실행, api 호출
window.onload = async function detailPageOn() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTNiMjM4YTI1YTUzZjZmZDY1M2NjMDk1NGRiOTRjZCIsInN1YiI6IjY1OTdlYzkxNzI2ZmIxMWIwNmFiMjg1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k99JbwB2RPUnBnx3Wk-Kl_y1bNbwm09wpwpmpDAVWTs"
    }
  };
 let url = "https://api.themoviedb.org/3/movie/" + movieId + "?language=ko-KR";
  await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
    ........................
    }
    });
 // 출연진 정보 가져오기
  let url1 = "https://api.themoviedb.org/3/movie/" + movieId + "/credits?language=ko-KR";
  await fetch(url1, options)
    .then((res) => res.json())
    .then((data) => {
    ........................
    });
 // 감독 정보 가져오기
  let url2 = "https://api.themoviedb.org/3/movie/" + movieId + "/credits?language=ko-KR";
  await fetch(url2, options)
    .then((res) => res.json())
    .then((data) => {
    ........................
    });
```

<br/>

## 📁 배운점/개선 사항 📁
### 프로젝트에 대한 피드백 정리
#### 1) 파일 이름 수정 : 상세페이지를 index2.html 이런식으로 저장을 해두었는데 페이지에 대한 구분이 쉽도록 페이지 이름을 변경해주어야 한다. 
#### 2) 배포 버전에서는 console.log를 빼야한다 (나도 api값이 제대로 들어오고 있는 지 확인하려고 적어놓고 지운다고 지웠는데 못지운 부분이 있어서 바로 지워야겠다)
#### 3) JS 분리 : 현재 프로젝트에서 연결성(종속성)이 너무 강하기 때문에 분리하는 작업이 필요하다.
#### 4) header, footer 사용을 습관화하자 (div로 묶어서 top 이런식으로 구분을 했었는데 방식을 바꿔야겠다)

<br/>

## 🧸회고🧸
다른 조 분들의 팀프로젝트 발표를 보면서 정말 다들 전문가가 아니신가 싶을 정도로 너무 잘하신게 보여서 괜히 위축이 좀 됐던 것 같다. 그리고 스스로 css 면으로 많이 부족하다고 생각해서 사실 다른 분들이 하신 것처럼 tmdb에서 제공해주는 배경 이미지도 사용해서 꾸미고 싶었는데 기능 구현을 하다가 시간을 다 써서 고민했던 부분들을 적용하지 못한 부분이 아쉬워서 추가적으로 더 꾸미는 연습을 해봐야겠다. 그리고 튜터님이 공유해주신 참고 사이트들도 많이 보고 어떻게 홈페이지들이 움직이는지를 많이 익혀서 앞으로는 더 잘 할 수 있도록 노력해야겠다.

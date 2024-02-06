# ☀️ 2024.01.12 Today I Learned ☀️
>팀 프로젝트 상세 페이지 구현하기, 자바스크립트 문법 특강 정리

<br/>

## 📖 오늘 공부한 내용 📖
### Algorithm
- [Programmers] 삼총사 (Javascript)
- [Programmers] 3진법 뒤집기(Javascript)

### Team Project - 영화 검색 사이트(상세화면 + 리뷰기능)
- 메인페이지로부터 id값 받아오기
- 받아온 id 값에 맞는 영화 정보만 fetch해와서 적용하기
- 전체 영화 데이터 받아오던 코드 싹 고쳐서 개별로 받아오는 코드로 바꾸기
- api 받는 방법 확실히 숙지하기

### 자바스크립트 문법
- 비동기, 동기 다시 이해 : async, await
- this 바인딩 이해

<br/> 

## 🛠️ 발생한 문제 1 🛠️
상세 페이지를 구현하는데 api를 받아와야하다보니 전체 영화정보에서 다시 fetch를 해와서 그것에 맞는 결과값을 html 문에 추가하는 방안을 고민하고 있었다. 그런데 아직 해당 영화에 대한 id값을 받아오지 못해서 일단 제목 값을 임의로 넣어준다음 실행이 되는지 확인을 하려고 해봤는데 잘 불러와지지 않았다. 그리고 코드도 너무 비효율적인 것이 문제였다.
```js
// api값 받아오고 searchResults 변수에 각각 영화의 제목 받아오기
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTNiMjM4YTI1YTUzZjZmZDY1M2NjMDk1NGRiOTRjZCIsInN1YiI6IjY1OTdlYzkxNzI2ZmIxMWIwNmFiMjg1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k99JbwB2RPUnBnx3Wk-Kl_y1bNbwm09wpwpmpDAVWTs",
    },
  };
  
  function detailPage() {
    // fetch, json 데이터 끌어오기
    const query = "안데스 설원의 생존자들";
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        // 데이터를 배열로 가져오고 각 배열의 타이틀 저장
        const searchResults = data["results"];
        let title_list = searchResults.map((item) => {
          return item.title;
        });
  
        // query검색어와  위에 값이 포함 되어 있는 타이틀 반환
        let find_title = title_list.filter((item) => {
          return item.includes(query);
        });
  
        // 전체 타이틀 리스트에서 일치하는 타이틀의 인덱스 번호 찾기
        let find_index = [];
        for (let i in find_title) {
          let idx = title_list.findIndex((item) => {
            return item === find_title[i];
          });
          find_index.push(idx);
        }
  
        // 전체 데이터에서 일치한 데이터 뽑아오기
        const match_movie = [];
        for (let a of find_index) {
          const movies = searchResults[a];
          match_movie.push(movies);
        }
  
        document.querySelector("#containerBox").innerHTML = "";
        // 채워넣기
        match_movie.forEach((result) => {
          const posterPath = result["poster_path"];
          const title = result["title"];
          const voteAverage = result["vote_average"];
          const overview = result["overview"];
          //const id = result["id"];
  
          const temp_html1 = `
                     <img src="https://image.tmdb.org/t/p/w500${posterPath}" class="card-img-top" alt="${title}"/>
                 `;
          const temp_html2 = `
                  <div class="title">
                          <h1>${title}</h1>
                      </div>
                      <div class="content">
                          <p>평점 : ${voteAverage}</p><br>
                          <p>줄거리</p><br>
                          <p>${overview}</p>
                      </div>
  
                      <!--리뷰 작성칸, 리뷰창-->
                      <div class="review">
                      
                      </div>
             `;
          document
            .querySelector("#first")
            .insertAdjacentHTML("beforeend", temp_html1);
          document
            .querySelector("#second")
            .insertAdjacentHTML("beforeend", temp_html2);
        });
      });
  }
``` 

<br/>

## 🔔 해결 🔔
아직 메인페이지로부터 id값을 받아오는 부분을 해결하지 못해서 일단 임의로 영화 아이디값을 하나 변수에 저장해서 딱 해당하는 영화의 id값에 있는 정보만 가져오도록 바꾸어주기위해 url을 사용해서 작성해주었고 그 url에서 데이터를 뽑아내서 원하는 데이터들만 저장해서 html문을 만들어서 추가해주는 식으로 변경을 했다.
```js
function detailPageOn() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTNiMjM4YTI1YTUzZjZmZDY1M2NjMDk1NGRiOTRjZCIsInN1YiI6IjY1OTdlYzkxNzI2ZmIxMWIwNmFiMjg1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k99JbwB2RPUnBnx3Wk-Kl_y1bNbwm09wpwpmpDAVWTs"
    }
  };

  //이 부분이 아이디 값 받아올 부분
  // url에서 id값 추출해서 적용
  let movieId = 572802;

  let url = "https://api.themoviedb.org/3/movie/" + movieId + "?language=ko-KR";
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      const title = data["title"];
      const posterPath = data["poster_path"];
      const voteAverage = data["vote_average"];
      const releaseDate = data["release_date"];
      const overview = data["overview"];

      const temp_html1 = `
                         <img src="https://image.tmdb.org/t/p/original${posterPath}" class="posterImage" alt="${title}"/>
                     `;
      const temp_html2 = `
                      <div class="title">
                              <h1>${title}</h1>
                          </div>
                          <div class="content">
                              <p>개봉일 : ${releaseDate}</p><br>
                              <p>평점 : ${voteAverage}</p><br>
                              <p>줄거리</p><br>
                              <p>${overview}</p>
                          </div>
      
                          <!--리뷰 작성칸, 리뷰창-->
                          <div class="review">
                          
                          </div>
                 `;

      document.querySelector("#firstPage").insertAdjacentHTML("beforeend", temp_html1);
      document.querySelector("#secondPage").insertAdjacentHTML("beforeend", temp_html2);
    });
}
```

<br/>

## 📁 배운점/개선 사항 📁
다른 html 파일에서 url로 id값을 받아와서 그것을 다른 html파일로 받는 방법<br/>
// index2.html const URLSearch = new URLSearchParams(location.search); let id = URLSearch.get("id"); console.log(id);​<br/>

페이지 로딩 후 자동으로 실행시키는 법 : window.onload <br/>
```js
window.onload = function detailPageOn() { const options = { method: "GET", headers: { accept: "application/json", Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTNiMjM4YTI1YTUzZjZmZDY1M2NjMDk1NGRiOTRjZCIsInN1YiI6IjY1OTdlYzkxNzI2ZmIxMWIwNmFiMjg1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k99JbwB2RPUnBnx3Wk-Kl_y1bNbwm09wpwpmpDAVWTs" } };​
```
<br/>

## 🧸회고🧸
가장 문제였던부분 중에 tmdb api에서 데이터를 불러오는 options 부분이였는데 잘 작동이 안되서 그냥 json 페이지만 추가해서 거기서 데이터를 사용을 하는식으로 진행을 했었고 그렇게 진행하다보니 코드상에 api값이 그대로 노출이 되는 상태로 진행할 수 밖에 없는 문제가 있었다. 그냥 사이트에서 알려준대로 진행하면 되는 문제였지만 그것을 가져와서 잘 활용하는 방법을 감을 잡짐 못해서 사용을 못했던 것 같다. 그렇지만 오늘은 조금 이해하게 된 것 같아서 팀 프로젝트가 끝나면 개인과제를 배운대로 다시 수정해서 적용해봐야겠다.

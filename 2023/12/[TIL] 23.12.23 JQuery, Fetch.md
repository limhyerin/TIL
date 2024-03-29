# ☀️ 2023.12.23 Today I Learned ☀️
>01 JQuery 프로젝트 <br/>
02 Fetch 연습 <br/>
03 Fetch 프로젝트 <br/>

<br/>

## 💡오늘의 목표💡
fetch를 통해 서버와 통신하는 방법을 익히고 프로젝트를 진행하면서 웹개발 전반적으로 이해하기

<br/>

## 📖오늘 배운 내용📖
### 01 JQuery 프로젝트
#### 1) 추억앨범 - JQuery 적용

#### 구현 사항
>1. 버튼 클릭시 PostBox 열고 닫기 <br/>
2. PostBox에 원하는 값 입력 시 카드를 생성 <br/>

<br/>

**1. 버튼 클릭시 PostBox 열고 닫기** <br/>
script에 openclose 함수를 만들어서 "추억 저장하기" 버튼을 클릭했을때 열고 닫히도록 구현을 해주었다.
이때 열고 닫히는 함수는 toggle()함수를 활용하였고 "추억 저장하기" 버튼이 클릭되었을때(onclick) 함수를 발동하도록한다. 그래서 함수안에 postingbox를 열고 닫을 수 있도록 작성한다.
```html
<script>
      function openclose() {
        $('#postingbox').toggle();
      }
</script>
```

**2. 추억저장하기 버튼에 onclick="openclose() 추가** <br/>
```html
<div class="mytitle">
        <h1>나만의 추억앨범</h1>
        <button onclick="openclose()">추억 저장하기</button>
</div>
```

**3. toggle로 열고 닫을 postingbox** <br/>
```html
<div id="postingbox" class="mypostingbox">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 이미지</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 제목</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 날짜</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">앨범 내용</label>
        </div>
        <div class="mybtn">
            <button type="button" class="btn btn-primary">기록하기</button>
            <button type="button" class="btn btn-outline-primary">닫기</button>
        </div>
</div>
``` 

**4. PostBox에 원하는 값 입력 시 카드를 생성** <br/>
먼저, 클릭시에 카드를 생성할 수 있도록 script에 함수를 만든다. <br/>

**💡기억해둘 것!💡** <br/>
값을 가져오는 법과 이를 적용하는 법
 
**[ makeCard()함수 ]** <br/>
```js
let image = $('#image').val(); //image 값 가져오기
let title = $('#title').val(); //title 값 가져오기
let content = $('#content').val(); //content 값 가져오기
let date = $('#date').val(); // date 값 가져오기
```
```js
let temp = `<div class="col">
                <div class="card h-100">
                  <img src="${image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${content}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">${date}</small>
                  </div>
                </div>
              </div>`;
        
$('#card').append(temp);
```
기록하기 버튼을 클릭했을때 makecard()함수가 실행되도록 해주었다.
```html
<button onclick="makeCard()" type="button" class="btn btn-primary">기록하기</button>
```

앨범 이미지에 이미지 주소를 입력하고 제목, 내용, 날짜를 입력하면 카드가 생성된다
![image](https://github.com/limhyerin/TIL/assets/70150896/1106543b-f030-4c8c-89ae-506c322a6686)
![image](https://github.com/limhyerin/TIL/assets/70150896/ea7426d9-cd3b-4c71-b088-fa5cb4f41cf4)

(돌하르방 사진 출처 : https://www.dbblog.co.kr/1456)

<br/>

#### 2) 스파르타 플릭스 - JQuery 적용

이번에는 위의 프로젝트를 통해 배웠던 내용 그대로 강의를 안보고 프로젝트를 진행해보기로 했다

#### 구현 사항
> 1. 버튼 클릭시 PostBox 열고 닫기 <br/>
2. PostBox에 원하는 값 입력 시 카드를 생성 <br/>

<br/>

  **1. 버튼 클릭시 PostBox 열고 닫기** <br/>
```html
<button onclick="openclose()" type="button" class="btn btn-outline-light">영화 기록하기</button>
```
```html
function openclose() {
    $('#postingbox').toggle();
}
```
<br/>

 **2 PostBox에 원하는 값 입력 시 카드를 생성** <br/>
![image](https://github.com/limhyerin/TIL/assets/70150896/167d8403-53d0-40e0-97e2-169e04ca04da)
```js
function makeCard() {
          let image = $('#image').val();
          let title = $('#mytitle').val();
          let star = $('#star').val();
          let content = $('#content').val();

          console.log(image, title, star, content);

          let temp_html = `
          <div class="col">
            <div class="card h-100">
                <img src="${image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${star}</p>
                    <p class="card-text">${content}</p>
                </div>
            </div>
          </div>`;

        $("#card").append(temp_html);
}
```
왜인지는 모르겠는데 자꾸 title 값을 가져오는게 안되서 id 이름을 mytitle로 바꿔서 작성했더니 됐다. 왜지?????????????

<br/>

### 02 Fetch
openAPI를 통해 값을 받아와서 적용시키는 연습을 해볼 것이다.
fetch의 기본 골격은 아래와 같기 때문에 할때마다 가져와서 사용한다
```js
let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
fetch("여기에 URL을 입력").then(res => res.json()).then(data => { 
     console.log(data)
})
```
각각의 구 이름과 미세먼지 정도의 정보만 가지고 와서 콘솔로 출력해보면
```js
function hey() {
            let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
            fetch(url).then(res => res.json()).then(data => { 
                let rows = data['RealtimeCityAir']['row']
                rows.forEach(element => {
                    let gu_name = element['MSRSTE_NM'];
                    let gu_mise = element['IDEX_NM'];
                    console.log(gu_name, gu_mise);
                });
            })
}
```
![image](https://github.com/limhyerin/TIL/assets/70150896/b147bdfe-1572-4d1b-9b61-f250f7d412fb)

미세먼지 수치를 통해 조건문을 넣어 색상을 다르게 표현
```js
function q1() {
            let url = 'http://spartacodingclub.shop/sparta_api/seoulair';
            $('#names-q1').empty();
            fetch(url).then(res => res.json()).then(data => { 
                let rows = data['RealtimeCityAir']['row']
                rows.forEach(element => {
                    let gu_name = element['MSRSTE_NM'];
                    let gu_mise = element['IDEX_MVL'];

                    let temp = ``;
                    if (gu_mise > 40) {
                        temp = `<li class="bad">${gu_name} : ${gu_mise}</li>`;
                    } else {
                        temp = `<li>${gu_name} : ${gu_mise}</li>`;
                    }
                    $('#names-q1').append(temp);
                });
            })
        }
```
     
<br/>

### 03 Fetch 프로젝트
#### 1) 추억앨범

**구현사항** <br/>
나만의 추억 앨범 글씨 밑에 현재 미세먼지 수준 표시
![image](https://github.com/limhyerin/TIL/assets/70150896/b7bc6e70-fcd4-4a8b-b83e-ce86d025c0e6)


여지까지는 클릭시에 어떠한 동작이 일어나게끔 코드를 짰는데 이제는 어떠한 동작 없이 바로 실행이 되게끔 하는 코드를 짜야한다.

그러기 위해서  document ready 를 사용한다.
```js
$(document).ready(function () {
	alert('안녕!');
})
```

**💡<span>은 <p>태그 안에 글자들을 묶어줄때 사용!!** <br/>
```html
<p>현재 서울의 미세먼지 : <span>좋음</span></p>
```
```js
$(document).ready(function () {
	      let url = "http://spartacodingclub.shop/sparta_api/seoulair";
        fetch(url).then(res => res.json()).then(data => {
            let mise = data['RealtimeCityAir']['row'][0]['IDEX_NM'];
            $('#msg').text(mise);
        })
})
```

#### 2) 스파르타플릭스
![image](https://github.com/limhyerin/TIL/assets/70150896/62a15e08-17b1-49cc-99f1-a370fbeedf0b)

추억앨범 프로젝트와 마찬가지로 태그를 이용하여 지정할 자리를 묶고 id값을 temp로 지정하여 해당자리에 값을 넣어줄 수 있도록 하였다.

```html
<li><a href="#" class="nav-link px-2 text-white">현재기온 : <span id="temp"></span>도</a></li>
```
```js
$(document).ready(function () {
	      let url = "http://spartacodingclub.shop/sparta_api/weather/seoul";
        fetch(url).then(res => res.json()).then(data => {
            let temp = data['temp'];
            $('#temp').text(temp);
        })
      })
```

<br/>

## 🧸코멘트🧸
<p>태그 안에 정보를 바꾸어줄때(?) 또 <p>태그를 사용하기에는 문단안에 문단이 요상하다 생각했는데 <span>태그를 사용하면 된다니.. 신세계..ㅋㅋㅋㅋ 태그를 이용해서 태그안에 글자들을 묶어주는데에 사용할 수 있어서 앞으로 코드를 짤때 유용하게 쓸 것 같다. 그리고 fetch를 배우면서 날씨 OpenAPI를 통해 원하는 정보들을 가져다가 원하는 위치에 사용할 수 있다는 점이 재밌었고 다른 OpenAPI들도 찾아봐서 웹페이지에 익숙하게 적용해볼 수 있도록 추가적으로 연습을 더 해봐야겠다. 

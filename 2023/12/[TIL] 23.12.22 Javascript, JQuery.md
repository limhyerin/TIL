![image](https://github.com/limhyerin/TIL/assets/70150896/5cebd9d5-fffd-4509-92b5-32e886ce36f6)# ☀️ 2023.12.22 Today I Learned ☀️
>01 프로젝트 - 스파르타 플릭스 <br/>
02 Javascript 문법 <br/>
03 JQuery 연습 <br/>

<br/>

## 💡오늘의 목표💡
프로젝트를 구현하면서 JS 문법이랑 JQuery 사용법을 익히기

<br/>

## 📖오늘 배운 내용📖
** vscode에서 코드를 정렬하기 위해서는 ctrl+a를 통해 전체를 드래그하고 alt + shift + F를 이용한다.

<br/>

### 01 프로젝트
 #### 1) 스파르타 플릭스 상단 구현
![image](https://github.com/limhyerin/TIL/assets/70150896/eea85ce0-d930-48c1-ad6b-6fb4ea46860c)

아직 js를 이용하여 기능을 구현하는 부분까지 하지 않았지만 웹페이지를 구현하는 부분을 진행하였다. <br/>
상단부의 메뉴바의 경우 부트스트랩의 example 바에서 Headers를 이용하였고 색상에 맞춰 spartaflix 와 Sign-up 버튼을 danger 색상으로 변경해주었다.

<br/>

#### 🧷전체코드🧷
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>스파르타플릭스</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');

        * {
            font-family: 'Gowun Dodum', sans-serif;
        }

        .main {
            color: white;

            background-image: url('https://occ-0-1123-1217.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABeIfo7VL_VDyKnljV66IkR-4XLb6xpZqhpLSo3JUtbivnEW4s60PD27muH1mdaANM_8rGpgbm6L2oDgA_iELHZLZ2IQjG5lvp5d2.jpg?r=e6e.jpg');
            background-position: center;
            background-size: cover;
        }

        body {
            background-color: black;
        }
    </style>
</head>

<body>
    <header class="p-3 text-bg-dark">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                        <use xlink:href="#bootstrap"></use>
                    </svg>
                </a>
 
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="#" class="nav-link px-2 text-danger">spartaflix</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">홈</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">시리즈</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">영화</a></li>
                    <li><a href="#" class="nav-link px-2 text-white">내가 찜한 콘텐츠</a></li>
                </ul>

                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..."
                        aria-label="Search">
                </form>

                <div class="text-end">
                    <button type="button" class="btn btn-outline-light me-2">Login</button>
                    <button type="button" class="btn btn-danger">Sign-up</button>
                </div>
            </div>
        </div>
    </header>
    <div class="main">
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">킹덤</h1>
                <p class="col-md-8 fs-4">병든 왕을 둘러싸고 흉흉한 소문이 떠돈다. 어둠에 뒤덮인 조선, 기이한 역병에 신음하는 산하. 정체 모를 악에 맞서 백성을 구원할 희망은 오직
                    세자뿐이다.</p>
                <button onclick="openclose()" type="button" class="btn btn-outline-light">영화 기록하기</button>
                <button type="button" class="btn btn-outline-light">상세정보</button>
            </div>
        </div>
    </div>
</body>

</html>
```

 #### 2) 스파르타 플릭스 카드 추가

상단부 아래에 영화 제목과 별점, 코멘트를 작성 할 수 있는 카드를 추가하기 위해 부트스트랩의 card를 이용하여 구현하였다.
![image](https://github.com/limhyerin/TIL/assets/70150896/6542665c-dba0-469a-bff5-a63c5366b1f0)

위의 코드에 head의 style안에 .mycards를 추가하여 넓이인 width와 바깥 여백을 정의하는 margin의 값을 지정해주었다.
```css
.mycards {
     width: 1200px;
     margin: 20px auto 20px auto;
}
```
body에서 상단부분 아래에 올 수 있도록 배치해주었다.
```html
<div class="mycards">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100">
                    <img src="https://movie-phinf.pstatic.net/20210728_221/1627440327667GyoYj_JPEG/movie_image.jpg"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">영화 제목</h5>
                        <p class="card-text">⭐⭐⭐</p>
                        <p class="card-text">영화 코멘트</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

#### 3) 스파르타 플릭스 포스팅 박스 만들기
그 다음으로 상단부분과 카드들 사이에 포스팅 박스를 구현하였는데 이또한 부트스트랩을 활용하여 영화 이미지 주소, 영화 제목, 추천이유는 forms의 Floating Labels를 사용하고 별점은 input group의 Custom forms를 사용하였으며 기록하기 버튼은 Buttons를 활용하였다.
![image](https://github.com/limhyerin/TIL/assets/70150896/3f88c1fe-1056-4549-9f3d-6adb21d390f2)

```css
style {
	.mypostingbox {
            width: 500px;
            margin: 20px auto 20px auto;

            border: 1px solid white;
            padding: 20px;
            border-radius: 5px;
        }
        .form-floating > input {
            background-color: transparent;
            color: white;
        }
        .form-floating > label {
            color: white;
        }
        .input-group > label {
            background-color: transparent;
            color: white;
        }
        .mypostingbox > button {
            width: 100%;
        }
}
```
```html
<div class="mypostingbox">
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="영화 이미지 주소">
            <label for="floatingInput">영화 이미지 주소</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="영화 제목">
            <label for="floatingInput">영화 제목</label>
        </div>
        <div class="input-group mb-3">
            <label class="input-group-text" for="inputGroupSelect01">별점</label>
            <select class="form-select">
                <option selected>별점선택</option>
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="추천 이유">
            <label for="floatingInput">추천 이유</label>
        </div>
        <button type="button" class="btn btn-danger">기록하기</button>
</div>
```

### 02 Javascript 문법
#### 1) 변수
```js
let a = 2
a = 'Bob'
```

#### 2) 리스트
```js
let a = ['사과','수박','딸기','감']

console.log(a[1]) // 수박
console.log(a[0]) // 사과

//리스트 길이
console.log(a.length)
```

#### 3) 딕셔너리
```js
let a = {'name':'영수','age':27}

console.log(a)
console.log(a['name'])
console.log(b_dict['age'])
```

#### 4) 반복문
```js
let fruits = ['사과','배','감','귤']
fruits.forEach((a) => {
	console.log(a)
})
```

#### 5) 조건문
```js
let age = 24

if (age > 20) {
	console.log('성인입니다')
} else {
	console.log('청소년입니다')
}
```

**반복문과 조건문 활용**
```js
let ages = [12,15,20,25,17,37,24]

ages.forEach((a)=> {
	if (a > 20) {
		console.log('성인입니다')
	} else {
		console.log('청소년입니다')
	}
})
```
아무래도 다른 언어들에서는 그냥 for문을 활용해서 했던터라 forEach문이 익숙하지가 않은데 익숙해지려고 노력해야겠다..!



### 03 JQuery 연습
기초문법을 배웠으니 연습문제를 풀면서 어떤식으로 동작하는지 알아보았는데 JQuery를 이용해서 결과 확인하기 버튼을 클릭했을때 각각, 리스트, 딕셔너리, 리스트 딕셔너리에서 원하는 값을 출력하는 결과물을 내볼 것이다.
JQuery를 사용하기 위해서는 꼭 <head> 안에 아래 코드를 넣어주어야한다!
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```
fruits 리스트에 값을 넣어주고 #q1 위치를 비운후 문단을 추가해보고 변수 값을 추가해보았다
```js
let fruits = ['사과','배','감','귤','수박'];
$('#q1').empty(); //비우기

// JQuery를 이용해 문자 값 추가
let a = fruits[0];
let temp = `<p>감자</p>`
$('#q1').append(temp);

//JQuery를 이용해 변수 값 추가
let temp2 = `<p>${a}</p>`;
$('#q1').append(a);
```

## ⌨️ 연습해보기 ⌨️
![image](https://github.com/limhyerin/TIL/assets/70150896/aa423b72-777b-4fbb-acf1-40fd63e7f0da)
![image](https://github.com/limhyerin/TIL/assets/70150896/4b847deb-5009-4574-8358-21e3bd146f62)

결과 확인하기 버튼을 클릭했을때 2번째 파트에서는 모든 리스트의 값을 출력하고 3번째 파트에서는 딕셔너리를 변경하여 오른쪽과 같은 결과를 내도록 해본다.
리스트 딕셔너리를 이용하여 값을 변경해주고 #q2를 비운후 변수에 값을 지정해서 추가해주었다.
```js
let people = [
        {'name':'서영','height':165},
        {'name':'현아','height':170},
        {'name':'영환','height':175},
        {'name':'서연','height':162},
        {'name':'지용','height':190},
        {'name':'예지','height':168}
]
```
```js
$('#q2').empty();

people.forEach(element => {
     let temp = `<p>${element['name']}는 ${element['height']}cm 입니다.</p>`;
     $('#q2').append(temp);
});
```

## 🧷전체코드🧷
```html
<!DOCTYPE html>
<html>

<head>
    <title>자바스크립트 문법 연습하기!</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<script>
    function checkResult() {
        let fruits = ['사과','배','감','귤','수박'];
        $('#q1').empty();

        fruits.forEach(element => {
            let temp3 = `<p>${element}</p>`;
            $('#q1').append(temp3);
        });


        let people = [
            {'name':'서영','height':165},
            {'name':'현아','height':170},
            {'name':'영환','height':175},
            {'name':'서연','height':162},
            {'name':'지용','height':190},
            {'name':'예지','height':168}
        ]

        $('#q2').empty();

        people.forEach(element => {
            let temp = `<p>${element['name']}는 ${element['height']}cm 입니다.</p>`;
            $('#q2').append(temp);
        });
    }
</script>

<body>
    <div class="top-part">
        <h1>자바스크립트 문법 연습하기!</h1>
    </div>
    <hr />
    <br>
    <h2>1. 함수</h2>
    <div class="button-part">
        <button onclick="checkResult()">결과 확인하기!</button>
    </div>
    <div class="list-part">
        <h2>2. 붙이기</h2>
        <div id="q1">
            <p>사과</p>
            <p>귤</p>
            <p>감</p>
        </div>
    </div>
    <div class="list-part">
        <h2>3. 붙이기</h2>
        <div id="q2">
            <p>영수는 24살입니다.</p>
            <p>세종은 30살입니다.</p>
            <p>수영은 20살입니다.</p>
        </div>
    </div>
</body>

</html>
```

## 🧸코멘트🧸
오늘 계속 가끔씩 JQuery를 사용해서 코드를 작성할때 $('#q1')에서 #을 빼먹고 적었다가 적용이 안되서 왜 안되지하고 계속 노려보고 있었는데 정신 똑바로 차리고 꼼꼼히 작성하도록 노력해야겠다..!
그리고 한번 연습하고 넘어가면 까먹을 수도 있을 것 같은데 프로젝트 두개에 배웠던 내용을 다른 형태로 반복하니까 더 이해하기 수월했던 것 같다. 또 다른 공부하다보면 까먹을 수도 있을테니까 꾸준히 연습해봐야지

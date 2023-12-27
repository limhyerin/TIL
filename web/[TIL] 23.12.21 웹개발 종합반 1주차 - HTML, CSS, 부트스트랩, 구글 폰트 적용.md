## 💡오늘의 목표💡
오늘은 git 사용법을 정리하고, 웹 개발 종합반 1,2주차 강의를 완독하고 그중에서도 1주차 강의를 마스터하기로 했다. 간단한 로그인 페이지를 구현하고 css를 적용해보고 구글 폰트를 적용하여 부트스트랩을 이용하는 방법도 손에 익히고 추가적인 기능을 적용해보면서 연습을 반복적으로 진행하고 최종적으로 프로젝트를 만들어 보며 완전히 이해하도록 노력하좌.. 아좌좌

## 📖오늘 배운 내용📖
### 01 로그인 페이지 구현해보기

우선 기능없이 해당 페이지만 똑같이 구현을 해보았다. ID값과 PW값을 입력할 수 있는 칸을 위해 input 태그와 button 태그를 이용하여 구현을 하였고 로그인 버튼도 작성하였다.

![](https://velog.velcdn.com/images/hrnn00/post/e5fd4a6e-b4c2-446a-ab1f-9034026bf1ab/image.png)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>로그인 페이지</h1>
    <p>ID: <input type="text"/></p>
    <p>PW: <input type="text"/></p>
    <button>로그인하기</button>
  <p></p>
</body>
</html>
``` 

### 02 CSS 연습하기
![](https://velog.velcdn.com/images/hrnn00/post/94698ca1-2d41-4eea-baff-89f7075a1baa/image.png)

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .mytitle {
            width: 300px;
            height: 200px;
            color: white;
            text-align: center;
            
            padding-top: 40px;
            border-radius: 8px;

            background-image: url('https://www.ancient-origins.net/sites/default/files/field/image/Agesilaus-II-cover.jpg');
            background-position: center;
            background-size: cover;
        }
    </style>
</head>
<body>
    <div class="mytitle">
        <h1>로그인 페이지</h1>
        <h5>아이디, 비밀번호를 입력해주세요</h5>
    </div>
    <p>ID: <input type="text"/></p>
    <p>PW: <input type="text"/></p>
    <button>로그인하기</button>
</body>
</html>
```

<p></p>

이미지를 적용하여 불러올때는 style안에 꼭 3가지가 같이 한몸처럼 따라다닌다.

```
Style {
	background-image: url('');
	background-position: center;
	background-size: cover;
}
```
 

class와 id를 어떨때 구분해서 사용하는지 궁금했었는데 class의 경우 보통 css에서 조작할때 ('.')을 사용해서 하는 것 같고 id의 경우 javascript에서 조작할때 ('#')을 사용하여 쓰는 것 같았다.

> class : .클래스이름
id : #클래스이름
 

여백을 지정해주기 위해서 사용하는 두가지 명령어가 있는데 그것은 padding과 margin이다. padding의 경우 안쪽의 여백을 지정해줄 때 사용하며 margin은 바깥쪽 여백을 지정해줄때 사용한다. 여기서 margin에 경우 위-오른쪽-아래-왼쪽 순으로 여백 값을 지정해준다.

> 안쪽 여백 : padding
바깥쪽 여백 : margin
 

### 03 부트스트랩 사용하기

#### **부트스트랩 CDN**

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```
 

head안에 코드를 작성하면 부트스트랩을 사용할 수 있는 상태가 되어 여러가지 기능들을 사용할 수 있다.


### 04 구글 폰트 적용하기
#### **Nanum Myeongjo - Google Fonts**

> https://fonts.google.com/specimen/Nanum+Myeongjo?subset=korean&noto.script=Kore


원하는 폰트를 클릭해서 @import 버튼을 클릭해서 위의 코드를 head부분에 넣어주고 아래 코드를 style 태그안에 넣어주면 적용이 된다.

![](https://velog.velcdn.com/images/hrnn00/post/4fd22140-7d59-45e3-98d2-8921fb6b7d12/image.png)


```
<style>
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Gowun+Dodum&family=Nanum+Myeongjo&display=swap');
  * {
      font-family: 'Gowun Dodum', sans-serif;
    }
</style>
```
> flex-direction: column; //세로
flex-direction: row; //가로
  
<p></p>

### 프로젝트 - 추억앨범

나만의 추억앨범의 상단부와 플로팅 박스, 카드들을 구현해보았다. 아직 기능은 전혀 없는 웹 페이지이고 앞으로 추억 저장하기 버튼을 클릭했을때 플로팅 박스가 toggle()함수를 통해 접혔다, 펴지는 기능과 직접적으로 앨범의 이미지 주소와 제목, 날짜, 내용을 입력하고 기록하기 버튼을 클릭했을때 카드가 추가되고 저장이 되는 기능을 배워 추가할 것이다.


```
<!-- 추억의 앨범 카드와 플로팅 박스 구현 -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>나만의 추억앨범</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Gowun+Dodum&family=Nanum+Myeongjo&display=swap');
        * {
            font-family: 'Gowun Dodum', sans-serif;
        }
        .mytitle {
            height: 250px;
            color: white;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            background-image: url('https://images.unsplash.com/photo-1511992243105-2992b3fd0410?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-position: center;
            background-size: cover;
        }
        .mytitle > button {
            width: 150px;
            height: 50px;
            background-color: transparent;
            color: white;
            border: 1px solid white;
            border-radius: 5px;

            margin-top: 20px;
        }
        .mycards {
            width: 1200px;
            margin: 20px auto 20px auto;
        }
        .mypostingbox {
            width: 500px;
            margin: 30px auto 30px auto;
            padding: 20px;
            box-shadow: 0px 0px 3px 0px blue;
            border-radius: 5px;
        }
        .mybtn {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
        .mybtn > button {
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div class="mytitle">
        <h1>나만의 추억앨범</h1>
        <button>추억 저장하기</button>
    </div>
    <div class="mypostingbox">
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
    <div class="mycards">
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card h-100">
                <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">앨범 제목</h5>
                  <p class="card-text">앨범 내용</p>
                </div>
                <div class="card-footer">
                  <small class="text-body-secondary">앨범 날짜</small>
                </div>
              </div>
            </div>
            <div class="col">
                <div class="card h-100">
                  <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">앨범 제목</h5>
                    <p class="card-text">앨범 내용</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">앨범 날짜</small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">앨범 제목</h5>
                    <p class="card-text">앨범 내용</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">앨범 날짜</small>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <img src="https://images.unsplash.com/photo-1446768500601-ac47e5ec3719?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">앨범 제목</h5>
                    <p class="card-text">앨범 내용</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">앨범 날짜</small>
                  </div>
                </div>
              </div>
          </div>
    </div>
</body>
</html>
```
 <p></p>

## 🧸코멘트🧸
첫날이라 허둥지둥하기도 하고 평소에 TIL을 작성해본적이 없어서 어떻게 작성하면 좋을까 고민을 많이 해보았는데 그래서인지 기록하는데 시간이 생각보다 더 많이 들었던 것 같다. 내일부터는 그때그때 배운내용을 작성해서 공부했던 내용들을 까먹지 않고 모두 내 것으로 만들 수 있게 계속 반복하고 공부해서 확실하게 내것으로 만들어야겠다

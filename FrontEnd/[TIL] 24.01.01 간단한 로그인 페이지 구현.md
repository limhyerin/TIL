## 01 로그인 페이지 구현해보기

우선 기능없이 해당 페이지만 똑같이 구현을 해보았다. ID값과 PW값을 입력할 수 있는 칸을 위해 input태그와 button 태그를 이용하여 구현을 하였고 로그인 버튼도 작성하였다.
![](https://velog.velcdn.com/images/hrnn00/post/0d112873-1c91-46da-bdc2-a218d6de3f52/image.png)


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
</body>
</html>
```
 

 

## 02 CSS 연습하기
![](https://velog.velcdn.com/images/hrnn00/post/3e004183-79da-4004-9346-df40a6dbb2be/image.png)


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
 

추가적으로 flex-direction을 통해 세로로 배치를 할지 가로로 배치할지를 정해줄 수 있다.

> flex-direction: column; //세로
flex-direction: row; //가로

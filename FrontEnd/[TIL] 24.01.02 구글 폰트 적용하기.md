구글 폰트를 내가 만든 웹 사이트에 적용하기 위해서는 Google Fonts 사이트를 접속해주어야한다.

 

**Google Fonts 사이트** : https://fonts.google.com/specimen/Nanum+Myeongjo?subset=korean¬o.script=Kore
 

많은 폰트 중 사용하고자 하는 폰트를 클릭해서 @import 버튼을 클릭하고 위의 코드를 head부분에 넣어주고 아래 코드를 style 태그안에 넣어주면 웹 페이지에 바로 적용된다.

![](https://velog.velcdn.com/images/hrnn00/post/8c8905d2-4d93-4818-91d9-e7308d11d383/image.png)

```
<style>
  @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Gowun+Dodum&family=Nanum+Myeongjo&display=swap');
  * {
      font-family: 'Gowun Dodum', sans-serif;
    }
</style>
```

# 💡오늘의 목표💡
>상단부에 타이틀, Wordle Game 기능 (애플코딩 참고) , 버튼 구현

## 구현목표
>상단부 - Wordle Game 타이틀 (현재는 글자로 적어두는 것까지만 구현하고 메뉴나 추가적인 부분, 클릭했을때 새로고침 되는 부분도 고려) <br/>
중단부 - Wordle Game 부분(색상 변경 고려), 랜덤 문제, 입력 칸 디자인 고려 <br/>
하단부 - 버튼 (우선은 버튼으로 해두었는데 엔터키를 눌렀을때 되는 것도 고려) <br/>
모든 단어를 맞출 시 모달창 띄우기 <br/>
모달창 - 축하하는 문구, 몇번의 시도, 걸린 시간, 게임 재시작버튼 등 <br/>

<br/>

전체적으로 만들어볼 프로젝트의 구상도를 살짝 그려봤다. 참고해서 구현하고 부가적인 기능들을 구현해보는데 게임 부분과 게임에서 모든 글자를 맞추면 모달창을 띄우고 축하문구와 몇번의 시도만에 맞췄는지, 시간은 어느정도 걸렸는지를 띄우고 그림에는 안그렸는데 재시작 버튼도 만들어볼 것이다.
![image](https://github.com/limhyerin/TIL/assets/70150896/c4ee4d2b-01f9-417d-88c3-feb854861111)

<br/>

# 📖오늘 배운 내용📖
### 01  text-align
텍스트 정렬 방식 설정
```css
text-align: center;
```

### 02 Document.querySelector()
제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번재 Element를 반환. 일치하는 요소가 없으면  null을 반환

### 03 addEventListener()
사용자와 상호작용하면서 마우스를 조작하면 그에 대한 반응을 하는 이벤트 조작
```js
document.querySelector().addEventListener('click',
	function() {
            
	}
)
``` 

### 04 val()과 .attr('value')의 차이
.val()이 가져오는 것은 현재 상태의 값, .attr('value')는 일치하는 element 중 첫번째 값을 가져온다

### 05 includes()
배열이 특정값을 포함하고 있는지의 여부를 boolean 값으로 반환

### 06 insertAdjacentHTML()
HTML을 문서(document)에 삽입하기 위해 사용
```js
document.querySelector('body').insertAdjacentHTML('beforeend',template);
```

### 07 배열 추가, 삭제
>- 배열 추가 : Array.push(), Array.unshift(), Array.splice()
- 배열 삭제 : Array.pop(), Array.shift(), Array.splice()

### 08 reduce
배열을 순회하면서 callback함수를 실행하고 하나의 리턴값을 반환하는 함수

<br/>

# 👾구현👾
![image](https://github.com/limhyerin/TIL/assets/70150896/df73fd92-e34f-4da9-9a7c-684f610966b3)

먼저, 구역을 나눠서 title을 <h1>태그를 사용하여 작성해주고 wordle 게임에서 각각의 입력 칸들을 위해 <input> 태그를 5개씩 작성해주고 하나로 묶어줬고 그 다음 또 구역을 나눠서 버튼을 만들어줬다.
```html
<div>
    <h1 class="title">WORDLE GAME</h1>
</div>
<div class="word">
    <input class="input">
    <input class="input">
    <input class="input">
    <input class="input">
    <input class="input">
    <p></p>
</div>
<div class="mybtn">
    <button>정답</button>
</div>
``` 

css를 통해 각각의 부분을 세부적으로 설정해주고 js도 구현해준다.
```html
<style>
    input {
                width: 80px;
                height: 80px;
                font-size: 60px;
                text-align: center;
            }
    .word {
                margin: 0px auto 0px auto;
                padding: 20px 0px 0px 0px;
                width: 480px;
            }
    .title {
                padding: 20px 50px;
                margin: 10px auto 10px auto;
                width: 250px;
            }
     .mybtn {
                margin: 20px auto 0px auto;
                width: 44px;
                padding: 20px 10px 20px 10px;
            }
</style>
<script>
        var result = "apple";
        var n = 0;
        document.querySelector('button').addEventListener('click',
            function() {
                var input = document.querySelectorAll('.input');
                var list = [];
                n = n + 1;
                for (let i = 0; i<5; i++) {
                    if (input[i].value == result[i]) {
                        input[i].style.background = 'green';
                        list.push('ok'); //순서와 값이 모두 맞으면 'ok'를 리스트에 추가
                    } else if (result.includes(input[i].value)) {
                        input[i].style.background = 'yellow';
                    } else {
                        input[i].style.background = 'lightgray'
                    }
                    input[i].classList.remove('input');
                }
                var template = `<div>
                    <input class="input">
                    <input class="input">
                    <input class="input">
                    <input class="input">
                    <input class="input">
                    <p></p>
                    </div>`;
                document.querySelector('.word').insertAdjacentHTML('beforeend', template);
            }
        )
    </script>
``` 

<br/>

### ++++모달창 안에 구현할 내용(아직 구상중)+++
추가적으로 5글자 모두 다 맞췄으면 모달창을 띄우고 못맞췄으면 계속 반복하도록 한다. 그리고 count값은 위의 코드에서 해주었듯이
입력을 받을 때마다 count를 올려서 시도 횟수를 반환하고 아직 정답을 하나로 지정해두었기 때문에 단어 모음집으로 리스트를 만들어서 랜덤으로 문제를 낼 수 있도록 하거나 다른 방법을 고안중이다.
```
let count = list.reduce((cnt, element)=>cnt+('ok'===element), 0);
                if(count==5) {
                    $("#msg").text(n);
                    //모두 다 맞췄으면 모달창 띄우기
                    $(function(){
                        const modal = document.getElementById('modalWrap');
                        $(".modal").fadeIn();
                        modal.style.display = 'block';

                        $(".modal_content").click(function(){
                            $(".modal").fadeOut();
                        })
                    })
                } else {
                    count = 0; //못맞췄으면 계속 반복
                }
<div class="modal">
    <div class="modal_content" title="클릭하면 창이 닫힙니다">
        <h1>축하합니다</h1>
        <p><span id="msg"></span>번만에 정답을 맞추셨습니다</p>
    </div>
</div>
``` 

<br/>

### [ 구현 사이트 ]
https://limhyerin.github.io/Wordle-Game/

<br/>

# 🧸코멘트🧸
현재 모달창이 안뜨고 화면에 뜨는 문제가 있어서 지난 번에 모달창을 구현했던 적이 있는데 비교해보면서 다시 모달창을 구현하는 부분을 새롭게 해봐야겠다.. 그리고 구현이 모두 완료되면 디자인적으로 이쁘게 꾸며봐야지 꼭..

# ☀️ 2023.12.23 Today I Learned ☀️
>01 데이터베이스 개념 <br/>
02 firebase 사용 <br/>

<br/>

## 💡오늘의 목표💡
데이터베이스 개념을 확실히 하고 Firebase 사용해보기

<br/>

## 📖오늘 배운 내용📖
### 01 데이터베이스 개념
#### 1) 데이터베이스
데이터를 저장하고 여러 사람들이 관리하는 데이터의 모음

<br/>

#### 2) 관계형 데이터베이스
SQL, 정리된 정보를 다룰때 사용, 주로 은행, 대기업 등에서 사용
주어진 틀이 있는 경우, 사람의 실수가 있으면 안되는 경우

<br/>

#### 3) 비관계형 데이터베이스
NoSQL, 복잡하거나 유연한 정보를 다룰때 사용, 주로 스타트업 등에서 사용
자유로운 경우, 앞으로 더 바뀔 경우가 있을 경우

<br/>
 
### 02 Firebase 사용
Firestore는 구글 클라우드 기반 NoSQL 데이터 베이스이다 <br/>
![image](https://github.com/limhyerin/TIL/assets/70150896/34d77823-5614-470d-a0e9-0b39026ecea7)

<br/>
 
먼저 script에 type 추가하고
```html
<script type="module">
```
그다음 파이어 베이스 세팅 코드를 script안에 추가하고 firebase 구성정보 설정 부분을 모두 지워서 자신의 설정 내용으로 채운다.
```js
// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


// Firebase 구성 정보 설정
const firebaseConfig = {
	본인 설정 내용 채우기 
};


// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
```

프로젝트 설정 - SDK설정 및 구성 - 구성 코드 복사해서 위의 코드의 '본인 설정 내용 채우기' 부분에 채워넣는다. <br/>

![image](https://github.com/limhyerin/TIL/assets/70150896/53780261-0be8-4bd1-a27e-b6c0b70520f1)
![image](https://github.com/limhyerin/TIL/assets/70150896/f6e2f1d6-db12-4038-b39c-03099deec84b)

<br/>

#### 👉 데이터를 추가할 수 있는 코드
```js
$("#id").click(async function () {
    let doc = {};
    await addDoc(collection(db, "콜렉션이름"), doc);
})
``` 

근데 이렇게 하면 이제 onclick이 안된다. 그래서 onclick을 없애고 id값을 줘서 아래와 같이 바꾸어준다. <br/>
각각 파이어베이스에 값을 보내는 것 <br/>
```js
$("#postingbtn").click(async function () {
        let image = $("#image").val();
        let title = $("#title").val();
        let content = $("#content").val();
        let date = $("#date").val();

        let doc = {
          image: image,
          title: title,
          content: content,
          date: date,
        };
        await addDoc(collection(db, "albums"), doc);
        alert("저장 완료!");
        window.location.reload(); //새로고침
      });
```
<br/>

버튼 클릭시 접었다 펴는 기능도, $(document).ready(function() {}) 기능도 의미가 없어져서 다른 것을 할 필요는 없고 그 안에 있는 코드들은 다 빼놓으면 된다.
```js
$("#savebtn").click(async function () {
        $("#postingbox").toggle(); //나와있으면 꺼지고 켜져있으면 꺼지고
      });
``` 

<br/>

#### 👉 파이어베이스에서 값을 가져와서 붙이는 코드
```js
let docs = await getDocs(collection(db, "albums"));
      docs.forEach((doc) => {
        let row = doc.data();

        let image = row['image'];
        let title = row['title'];
        let content = row['content'];
        let date = row['date'];

        let temp_html = `
              <div class="col">
                <div class="card h-100">
                  <img
                    src="${image}"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${content}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-body-secondary">${date}</small>
                  </div>
                </div>
              </div>`;

        $("#card").append(temp_html);
      });
```
<br/>

## 🧸코멘트🧸
다시 까먹을 수도 있을 것 같아서 다른 프로젝트 만들어서 다시 적용해봐야겠다

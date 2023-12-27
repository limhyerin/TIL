## 💡오늘의 목표💡
firebase를 사용하기 위해 세팅해야하는 코드들을 정리

## 📖오늘 배운 내용📖
### 파이어베이스 세팅

```
// Firebase 세팅
// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
        collection,
        addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
        apiKey: "AIzaSyAFae2toPUP6oww6ri_etBpuYUtd07MDlk",
        authDomain: "sparta-52b8f.firebaseapp.com",
        projectId: "sparta-52b8f",
        storageBucket: "sparta-52b8f.appspot.com",
        messagingSenderId: "68006099126",
        appId: "1:68006099126:web:9e958e631d289e6c7b8e17",
        measurementId: "G-8GV5KMXCPV",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
```
기록하기 버튼에서 평소에는 되는데 script type="module"을 해주었을때 onclick이 안되기때문에 없애주고 id 값을 지정

```
$("#postingbtn").click(async function () {
        let image = $("#image").val();
        let title = $("#title").val();
        let star = $("#star").val();
        let comment = $("#comment").val();

        let doc = {
          image: image,
          title: title,
          star: star,
          comment: comment,
        };
        await addDoc(collection(db, "movies"), doc);
        alert("저장 완료!");
        window.location.reload(); //새로고침
      });
```
```
$("#savebtn").click(async function () {
        $("#postingbox").toggle(); //나와있으면 꺼지고 켜져있으면 꺼지고
      });
```
 

이제 파이어베이스에서 값을 가져오기

```
let docs = await getDocs(collection(db, "movies"));
      docs.forEach((doc) => {
        let row = doc.data();

        let image = row['image'];
        let title = row['title'];
        let star = row['star'];
        let comment = row['comment'];

        let temp_html = `
        <div class="col">
          <div class="card h-100">
              <img src="${image}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">${star}</p>
                  <p class="card-text">${comment}</p>
              </div>
          </div>
        </div>`;

        $("#card").append(temp_html);
      });

```

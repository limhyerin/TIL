# ☀️ 2024.01.26 Today I Learned ☀️

<br/>

## 🛠️ 발생한 문제 1 🛠️
React 프로젝트 Git clone 해왔는데 npm start가 안되는 문제가 발생

<br/> 

## 🔔 해결 🔔
npm install을 통해 다시 패키지를 설치해주어야 한다.
```bash
git clone https://github.com/{username}/{repo-name}.git
cd {repo-name} // 로컬 프로젝트 폴더로 들어감 
npm install
npm start
``` 

<br/> 

명령어 치고 push 할 것
```bash
git remote set-url origin "재설정할 깃헙주소"
```

<br/>
 
## 🛠️ 발생한 문제 2🛠️
코드를 커밋 하기 위해서 git add .을 하는데 아래와 같은 에러나서 커밋을 못하는 문제 발생

>warning: LF will be replaced by CRLF in (파일경로)
The file will have its original line endings in your working directory

먼저, LF와 CRLF가 대체 뭘 의미하는 건지 모르겠어서 검색을 해보았다.
### 1) LF
LF는 Line-Feed의 약자 <br/>
단어가 타자기에서 비롯되었듯이, 커서는 그 자리에 둔 상태에서 종이만 한 줄을 올리는 동작을 말한다. <br/>
Mac, Linux(Unix)에서 사용되는 줄바꿈 문자열(\n)이다. <br/>

<br/> 

### 2) CRLF
CRLF는 Carriage Return Line-Feed의 약자 <br/> 
여기서 Carriage Return이란 문장이 끝에 다다르면 커서는 위아래 이동 없이 가장 앞으로 이동하는 동작을 말한다. <br/>
즉, CRLF는 커서를 다음 라인의 맨 앞으로 이동하는 동작이다. <br/>
Windows에서 사용되는 줄바꿈 문자열(\r\n)이다.<br/>

<br/> 

### 에러가 발생하는 이유?
OS마다 사용되는 줄바꿈 문자열이 다르기 때문에 git에서 어떤 의미로 받아들여야 할지 몰라 에러 메시지가 나타난 것

<br/> 

## 🔔 해결 🔔
core.autocrlf 설정을 통해 해결 가능하다. <br/>
core.autocrlf는 Git에 코드를 커밋할 때 LF와 CRLF를 서로 변환해주는 기능으로 시스템 전체에 적용할 것이라면 global 옵션을 추가해주고, 해당 프로젝트에만 적용한다면 제외하여 작성해주면 된다. <br/>

<br/> 

### 👆 Windows, DOS 명령어 (global 추가 유무에 따라 둘 중 하나 선택 입력)
```
$git config core.autocrlf true
$git config --global core.autocrlf true
``` 

<br/>

### 👆 Linux, Mac 명령어 (global 추가 유무에 따라 둘 중 하나 선택 입력)
```
$git config core.autocrlf input
$git config --global core.autocrlf input
```

<br/>

### 👆 기능 해제
```
$git config --global core.autocrlf false
```
위의 방법과 달리, core.autocrlf 기능을 해제하는 방법도 있다. 해제함으로써 줄바꿈 문자열을 변환하지 않아도 에러 메시지를 안뜬다. 위의 방법과 해당 방법 중에서 선택하여 입력

<br/> 

## 📁 개선 사항 📁
리액트 처음부터 다시 공부하기..

<br/>

## 🧸회고🧸
응용이 부족한것같아서 기초부터 다시 공부해야할 것 같다..

## 💡오늘의 목표💡
배운 Git 사용법을 정리하고 Github에서 업로드하고 파일 받아오고 수정해서 올리는 연습해서 확실하게 이해해보기

 

## 📖오늘 배운 내용📖
### 01 필수 리눅스 명령어
visual studio code를 통해 Terminal 창을 열어서 git 명령어를 사용하는데 그전에 윈도우의 경우 +버튼에서 Git Bash를 클릭한 후에 사용하도록 한다.

![](https://velog.velcdn.com/images/hrnn00/post/ca4d6cd4-cbe9-40cf-9016-3f441788962b/image.png)

 

#### 1) pwd (print working directory)

현재 내가 작업하는 폴더를 보여달라는 뜻으로 root(~)는 최상위 경로를 말한다.

 

#### 2) ls (list)

내 폴더 안에 있는 폴더 & 파일 내역을 보여준다.

 

#### 3) ls -a (list all)

모든 파일을 볼 수 있는 명령어로, 숨겨져 있는 파일(보통 .으로 시작함)도 모두 볼 수 있다.

 

#### 4) cd  폴더명 (change directory)

ls 명령어에서 확인된 폴더로 이동 가능하다.

.. : 한 단계 위의 폴더라는 뜻

 

#### 5) mkdir 폴더명 (make directory) : 폴더명/폴더명

폴더를 만드는 명령어이다.

 

#### 6) touch 파일명

파일을 만드는 명령어로, 현재 경로에서 파일을 생성하는 명령어이다.

참고 : 정확히는 파일의 생성과 파일의 날짜, 시간을 변경하는 명령어 (없으면 생성하고 있으면 변경하는)

 

### 02 Git이란?
코드 변경점 기록, 버전 관리 도구 (형상 관리 도구)

소프트웨어의 변경사항을 체계적으로 추적하고 통제하는 것

 

#### 💙오늘 배운 명령어💙
> git init
git add
git commit
git status
git log
git push
git clone
git pull

#### 🤍다음 시간에 배울 명령어🤍
> git branch
git checkout
git merge
+branch를 활용한 협업
 

 

#### 1) git init

코드 관리를 시작하는 명령어로, initialize (초기화하다, 초기 세팅하다)의 준말이다.

해당 명령어는 프로젝트 시작 전 딱 한 번만 입력하면 되며 정확한 프로젝트 폴더(경로)에서 입력해야 한다.

 

사용하기 전, 터미널에서 pwd 명령어를 통해 해당 위치를 확인하고 git init를 사용한다.

그리고 ls -a를 통해 모든 파일을 확인하여 '.git' 가 존재하는 지 확인하면 된다.  '.git'이라는 폴더가 생기면 이때부터 코드 변경을 git에서 추적하기 시작한다.

 

#### 2) git add & git commit -m "메시지 작성"

git add 명령어는 저장하기 전 저장할 파일 지정하는 명령어이고 git commit -m "메시지"는 실제로 저장하는 명령어이다.

```
git add 1.html
git commit -m "회원가입 기능 작성 완료"
```
 

파일을 지정해서 저장하지 않고 내 프로젝트의 변경사항을 한번에 저장하기 위해서는 .(전체)를 모두 지정해서 저장한다.

```
git add .
git commit -m "메시지 작성"
```
 

* 만약 please tell me who you are이라는 문구가 뜬다면 *

아래와 같이 작성해주면 된다

```
git config user.name "유저이름"
git config user.email "이메일"
```
 

#### 3) git status

어떤 파일이 변경됐는지, 어떤 파일이 add 됐는지 등 변경 상태를 확인하는 명령어로, 수정했던 파일만 알려준다.

만약 수정된 파일이 있다면 아래와 같이 뜨며, 다 저장이 되었다면 아무것도 뜨지 않는다

> modified: 1.html (1.html 파일이 수정됐습니다)

 

#### 4) git log

commit 했던 것들을 확인하고자할 때 사용하는 명령어로 메시지도 확인 가능하다.

 

#### 5) git diff

코드변경확인

 

#### 6) git reset

과거로 돌아가기 가능

키보드 q로 빠져나오기

 

#### 7) git push

추가로 수정된 코드 github에 반영하기 위해 먼저, 코드를 수정하고 저장하여 명령어를 실행한다.

git add . & git commit -m "메시지 작성" 이 두가지 명령어를 사용하여 진행한다.

git push origin 브랜치명(ex. git branch를 통해 확인하거나 git status를 통해 branch명 확인 가능)

```
git add .
git commit -m "메시지 작성"
git push origin 브랜치명
```
 

### 03 첫 업로드 시 3개의 명령어 의미
#### 1. git remote add origin(==github 주소)

#### 2. git branch -M 브랜치명(==main)

기본 브랜치 = master -> 노예제도와 관련되어 있다고 하여 현재는 브랜치명(master)을 main으로 바꿔서 사용하는 듯 하다.

#### 3. git push -u origin 브랜치명

git push origin main -> 귀찮을 수 있기 때문에

git push -> 이 명령어만 입력해도 git push origin main 을 하도록 한다.

 

### 04 Github 협업하기 + 충돌해결하기
#### 1) Github 협업하기

1. 협력자(collaborator) 등록하기

레포지토리를 팀장(혹은 담당자)이 생성하여 다른 팀원들을 추가하기 위해 add people 한다. 

 

2. 팀원들의 username 혹은 email 추가

팀원들은 해당 초대를 수락하면 같이 협업이 가능하다.

 

3. 코드 복사해오기 git clone

팀원들 입장은 올라와 있는 code를 받아오기 위해 해당 code 코드 버튼을 클릭 후 주소 복사를 복사한다.

또한, vscode에서 git clone 주소 .  (띄어쓰기 후 끝에 점 붙여넣기)를 해주어 통째로 가지고 온다.

 

 

#### 2) 협업시 코드 수정

수정한 코드 저장를 저장한 후 명령어 실행하는데 기존과 동일하게 명령어를 사용한다.

git add . & git commit -m "메시지"
git push origin 브랜치명
브랜치명의 경우 git branch를 통해 확인하거나 git status를 통해 branch명 확인이 가능하다.

BUT!!! 다른 사람이 변경한 상태에서 내가 수정한 파일을 올리면 git push가 안된다. 그래서 우선 다른 사람이 변경한 코드를 내 코드로 가져온 후에 수정하여 다시 올려주면 해결이 된다.

 

* 다른 사람이 변경한 코드 내 코드로 가져오기 *

먼저, git push 명령어를 실행하기 전 다른 사람의 수정 코드를 가져오기 위해 git pull 명령어를 사용한다.

여기서 git pull의 경우 변경사항만 가져올 때 사용을 하고 git clone은 전체 코드를 통째로 가져올 때 사용을 한다는 차이점이 있다.

 

 

#### 3) 충돌 해결하기

git pull 명령어를 사용했는데 오류 발생했을때에는 같은 파일에서 같은 위치에 코드가 변경되었기 때문인 경우가 있다.

A 개발자 : index.html의 2번째 줄 코드 변경
B 개발자 : index.html의 2번쨰 줄 코드 변경
 

내가 2번째 줄을 수정했는데 다른 개발자도 2번째 줄을 수정하여 코드를 올렸을때 그것을 git pull 명령어를 통해 댕겨오게 되면 내가 수정한 코드와 다른 개발자가 수정했던 코드가 겹치면서 문제 발생하게 된다. 이럴땐 앞의 내용을 다른 팀원들과 상의 후에 삭제하고 원하는 코드로 수정하면 문제가 해결된다.

> <<<<Head
 =====================
4182---
(상의 후 삭제, 그 다음 원하는 코드로 수정)
 

### 🧸코멘트🧸
Git, Github 사용법을 찾아서 배워도 까먹고 다시 찾아보기를 반복했었는데 순서나 방법을 제대로 다시 배우고 정리하면서 계속 연습해보니 이해가 더 잘 됐던 것 같다. 앞으로는 열심히 공부해서 프로젝트 올리고 Github 마크다운 언어도 익혀서 github랑 블로그 두개에 모두 기록해야지

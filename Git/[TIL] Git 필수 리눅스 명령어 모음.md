### git init	
> Git 초기화

### git reset
> 과거로 돌아가기 가능, 키보드 q로 빠져나오기

### git diff
> 코드변경확인

### git log	
> commit 했던 것들을 확인하고자할 때 사용하는 명령어로 메시지도 확인 가능하다.

### git config --list	
> Git 설정 보기

### git config --global user.name "[사용자 이름]"	
> Git 사용자 이름 설정

### git config --global user.email "[사용자 이메일]"	
> Git 사용자 이메일 설정

### git add [추가할 파일 및 폴더]	
> Git 파일 추가

### git status	
> Git 파일 추가 확인

### git commit -m "[커밋명]"	
> Git 커밋

### git branch -M [브랜치명]	
> Git 브랜치 변경

### git remote add origin [HTML]	
> Git 원격 저장소 지정

### git remote rm origin	
> Git 원격 저장소 제거

### git remote -v	
> Git 원격 저장소 확인

### git push origin [브랜치명]	
> Git 푸시

### pwd	
> 현재 작업하고 있는 폴더의 위치를 보여줌

### ls	
> 내 폴더 안에 있는 폴더 & 파일 내역을 보여줌

### ls -a	
> 모든 파일을 볼 수 잇는 명령어로, 숨겨져 있는 파일(보통 .으로 시작)도 모두 볼 수 있음

### cd [경로]	
> 폴더 이동(경로 변경)

### cd ..	
> 한단계 위의 폴더로 이동

### mkdir 폴더명	
> 폴더를 만드는 명령어

### touch 파일명	
> 파일을 만드는 명령어로, 현재 경로에서 파일을 생성하는 명령어
참고 : 정확히는 파일의 생성과 파일의 날짜, 시간을 변경하는 명령어 (없으면 생성하고 있으면 변경하는)

### git --version	
> Git 버전 확인

### git status	
> 어떤 파일이 변경됐는지, 어떤 파일이 add 됐는지 등 변경 상태를 확인하는 명령어로, 수정했던 파일만 알려준다.
만약 수정된 파일이 있다면 아래와 같이 뜨며, 다 저장이 되었다면 아무것도 뜨지 않는다
modified: 1.html (1.html 파일이 수정됐습니다)

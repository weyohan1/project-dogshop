
## 📌 프로젝트 dogshop 웹사이트


![프로젝트 dogshop](https://github.com/user-attachments/assets/adb7f792-5e68-4df0-ab84-183447f5f82c) 

📎 사이트 링크 : https://weyohan1.github.io/project-dogshop/

▷ 개인 포트폴리오 웹사이트입니다.  

▷ 반려견 산책을 위한 하네스 전문 쇼핑몰 입니다.

▷ 다양한 하네스, 리드줄, 목줄 제품을 한 곳에서 비교할 수 있도록 구성하여 고객이 보다 합리적인 구매 결정을 할 수 있도록 하였습니다. 

▷ 오픈 카카오톡방, 회원 소통방, 서포터즈 활동 등을 통해 사용자 간 정보 공유와 소통이 가능한 커뮤니티 환경을 제공합니다.


```
     사장
  ↗      ↘
회원   ←   고객
```

<br>


## 📌 프로젝트 정보

- 개발 기간 : 2025.07 ~ 2025.08     
- 개발 인원 : 1명


### ✅시안 및 구성 

<img src = "https://github.com/user-attachments/assets/d4a8b5ee-ae30-4897-b239-3bbbc8eed75b" width = "300px"/> 
<img src = "https://github.com/user-attachments/assets/d074f276-a2b7-4816-a1d6-7f5e33c91cf1" width = "200px"/>
<img src = "https://github.com/user-attachments/assets/a5533b27-14b3-468e-8b28-f1d2d429158f" width = "300px"/>


<br>

## 📌사용 스킬

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=flat-square&logo=jquery&logoColor=white)


<br>


## 📌 프로젝트 주요 기능

- 수량 버튼
- 상세 설명 토글
- 스크롤 방향 감지 탑 버튼 


<br>


## 📌 프로젝트 구조
```
project
 ├ index.html         #메인 페이지
 ├ index.PDP.html     #상세 페이지   
 ├ index.Sub.html     #서브 페이지
 │
 ├ css
 │   └ main.css 
 │   └ mainPDP.css 
 │   └ mainSub.css 
 ├ js
 │   └ main.js
 ├ home
 │   └ img
```

 <br>

## 📌 코드 리뷰


## ✅ 수량 버튼


<img src="https://github.com/user-attachments/assets/20b55e29-dc44-4b2e-a9b0-933eb4d0af6e" width = "300px"/>
<img src="https://github.com/user-attachments/assets/ff8a8577-783c-43f6-b92e-7b3ce6148f8d" width = "300px"/> <br>

- 최소 수량이 0 미만으로 내려가는 것을 방지 하였고, 최대 구매 수량 제한을 10개로 제한 하여 초과시 alert를 통해 사용자에게 안내 하도록 하였습니다.

<br>

## ⭕ 수량 버튼 구현 결과

<br>

https://github.com/user-attachments/assets/66d963b0-89ea-4c50-8465-5379cc21f555

<br>

##  ✅ 상세 설명 토글

<img src="https://github.com/user-attachments/assets/504ef85b-3bc1-4474-a686-1ab8a7fd9a56" width = "250px"/>
<img src="https://github.com/user-attachments/assets/64a6d145-7684-46e3-b06e-cf6646891e77" width = "250px"/>
<img src="https://github.com/user-attachments/assets/836d1e40-0a12-49a6-83b4-73612844df2b" width = "300px"/>

- isOpent 변수를 사용하여 display = block시 텍스트를 보여주며 버튼 글자는 "닫기", display = none 일때는 텍스를 숨기고, 버튼 글자는 "보기" 로 변경 되는 직관적인 인테페이스를 제공 하였습니다.

- window.lastScrollY를 사용하여 열기 직전의 스크롤 위치를 저장하고, 상세설명을 닫는 순간 , 저장된 좌표로 이동하여 위치 이탈을 막았습니다. 

<br>

## ⭕ 상세 설명 토글 구현 결과

<br>

https://github.com/user-attachments/assets/9eeb6f2b-dc2a-45d9-b6e0-be498dc1826d

<br>

##  ✅ 스크롤 방향 감지 탑 버튼 

<img src="https://github.com/user-attachments/assets/2aa737a6-a789-4b76-9f26-45ba2a8fe67e" />

- 스크롤 이벤트를 활용하여 스크롤 방향을 감지하고 Top 버튼 UI의 노출을 제어하였습니다.

<br>

## ⭕ 스크롤 방향 감지 탑 버튼 구현 결과

<br>

https://github.com/user-attachments/assets/69bd83e3-362e-449f-b8d3-38d3990f418d


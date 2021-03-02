# Weather

README: Yes
기간: 2021년 2월 21일 → 2021년 3월 2일
상태: 진행 중
작성일시: 2021년 2월 21일 오후 9:38

## Weather

- React Native를 이용한 날씨 정보 앱 만들기
- 목표 : React Native에서 API 호출법 공부

---

## 파일 설명

1. Weather.js
- OpenWeather API를 이용해 사용자가 원하는 위치의 정보를 불러와 화면에 표시

---

## 와이어 프레임

![Weather%208df051c0bccd4407a8d09ea897bbe34e/wireframe.png](Weather%208df051c0bccd4407a8d09ea897bbe34e/wireframe.png)

---

## 실행 화면

[Weather%208df051c0bccd4407a8d09ea897bbe34e/weather_exe.gif](Weather%208df051c0bccd4407a8d09ea897bbe34e/Weather_exe.mp4)

1. 기본 화면

   ![Weather%208df051c0bccd4407a8d09ea897bbe34e/weather_seoul.jpg](Weather%208df051c0bccd4407a8d09ea897bbe34e/weather_seoul.jpg)

1. "New York" 검색시

   ![Weather%208df051c0bccd4407a8d09ea897bbe34e/weather_newyork.jpg](Weather%208df051c0bccd4407a8d09ea897bbe34e/weather_newyork.jpg)

- 첫 화면은 서울의 날씨
- search 아이콘 클릭시 검색
- 키보드 입력시 키보드 위에 Done 버튼을 누르면 Search 기능과 동일하게 작동함

  ![Weather%208df051c0bccd4407a8d09ea897bbe34e/weather_keyboard.jpg](Weather%208df051c0bccd4407a8d09ea897bbe34e/weather_keyboard.jpg)

- 수정할 부분
    - [ ]  입력 방법을 다양하게 (위도, 경도 입력 등)
    - [ ]  Del 기능 ( Input 옆에 X를 만들어 내용 전체 삭제 기능 구현)
    - [ ]  요일별 날씨
    - [ ]  시간별 날시
    - [ ]  강수확률 등 화면에 표시하기
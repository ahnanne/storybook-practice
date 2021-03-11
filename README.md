# storybook-practice
스토리북 활용 실습 📚

> [스토리북 설치하기](https://storybook.js.org/docs/react/get-started/install)

## ✅To-do

- [ ] `propTypes` 체크 코드 추가

- [ ] 체크박스 컴포넌트 완성

## 🔎학습 내용

- 컴포넌트(component)

  - 컴포넌트는 "레고"에 비유할 수 있다.

  - 컴포넌트는 **한 가지의 작업만 하는 것이 가장 이상적**이다.

- prop type 검사

  - TS를 사용하는 상황이 아니라면 prop의 type을 따로 검사해줘야 하는데, [prop-types 라이브러리](https://www.npmjs.com/package/prop-types)를 사용하면 편리하게 type을 체크할 수 있다.

  - 리액트에는 기본적으로 `propTypes` 프로퍼티가 있어 이를 통해 props 객체, prop name, component name을 확인할 수 있다.

  - 컴포넌트에는 default props를 지정해줄 수 있다. => 자바스크립트에서는 함수도 객체니까!

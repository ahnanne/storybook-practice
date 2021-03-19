import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'
import Parent from './components/Parent/Parent'

import Login from './pages/Login'
// import Checkbox from 'components/Form/Checkbox/_Checkbox.class';
import Checkbox from 'components/Form/Checkbox/_Checkbox.function';
import Copyright from 'components/Copyright/Copyright'
import Counter from 'components/Counter/_Counter';

// 부모(상위) 컴포넌트 정의
// 함수도 [ 상태를 관리 ] 할 수 있다.
// 상태(state)
// React Hook의 이름 규칙 => use
// (cf. HOC의 이름 규칙 => with)

// useState 훅은 React 함수 컴포넌트 안에서 사용할 수 있다.
// const Parent = () => {
//   /**
//    * 함수 컴포넌트 안에서 가시성 상태 관리
//    */
//   const [visibility, setVisibility] = React.useState(false);
//   // setVisibility도 하위 컴포넌트에게 전달함으로써
//   // 상태를 변경할 권한을 부여함.

//   const onChecked = () => {
//     setVisibility((prevState) => !prevState);
//   }

//   return (
//     <>
//       <Checkbox
//         id="check-sdgasdg"
//         label="라이선스 표시/감춤"
//         checked={visibility}
//         onChecked={onChecked}
//       />
//       { visibility ? <Copyright /> : null }
//       {/* 또는 { visibility ?? <Copyright /> } */}
//     </>
//   );
// };

render(
  <StrictMode>
    {/* <Login /> */}
    {/* <Parent /> */}
    <Counter />
  </StrictMode>,
  document.getElementById('root')
)

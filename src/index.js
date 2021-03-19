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
import Counter from 'components/Counter/_Counter.function';

/**
const App = () => {
  return (
    <Counter>
      <Counter.Control // Counter 객체의 Control 프로퍼티가 결국은 또 다른 하위 컴포넌트라는 것!
        label="decrement count"
        onUpdate={this.setCount.bind(this)}
        // step={1} -> CounterControl 컴포넌트에 default value 있으므로 생략 가능
      >감소</Counter.Control>
      <Counter.Display>{this.state.count}</Counter.Display>
      <Counter.Control
        label="increment count"
        onUpdate={this.setCount.bind(this)}
        step={2}
      >증가</Counter.Control>
    </Counter>
  );
};
*/

render(
  <StrictMode>
    {/* <Login /> */}
    {/* <Parent /> */}
    {/* count의 초기값, 증가값, 감소값을 설정하고 싶을 때!? */}
    <Counter />
  </StrictMode>,
  document.getElementById('root')
)

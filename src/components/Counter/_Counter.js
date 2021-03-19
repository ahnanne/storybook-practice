import React, { Component } from 'react';
import CounterDisplay from './_CounterDisplay';
import CounterControl from './_CounterControl';

/* -------------------- Compound Components ------------------------------- */
/**
 * Compound Comp의 장점 : props, callback 전달 과정 간소화
 */

export default class Counter extends Component {
  /** 화살표 함수로 정의할 경우 익명 함수
  static Display = ({ children }) =>  (
    <output>{children}</output>
  );
  */
  static Display = function DisplayComp({ children }) {
    return (
      <output>{children}</output>
    );
  };

  static Control = ({ label, onUpdate, step = 1, children }) => {
    const updateCount = () => {
      // children을 사용하여 조건 처리하기(분기)
      // 이 외에도 분기할 수 있는 방법은 다양함.
      if (children.includes('감소')) { // String.prototype.includes => ES6 도입
        step = step * -1;
      }
  
      onUpdate(step);
    };
  
    return (
      <button
        aria-label={label}
        type="button"
        onClick={updateCount}
      >
        {children}
      </button>
    );
  }

  // JSX는 React.createElement로 변경된다.

  state = {
    count: 0,
  };

  setCount(newCount) {
    this.setState({
      count: this.state.count + newCount,
    })
  }

  render() {
    /**
      Compound Comp 쓸 때, 하위 컴포넌트를 화살표 함수로 정의하면 익명 함수가 되는데,
      (본 예제에서는 Control Comp)
      이러면 함수 이름이 없어서 브라우저에서 Comp 이름이 익명으로 뜸.
      -> displayName 설정해주거나 일반적인 함수로 해서 기명 함수 정의해주기
    */
    Counter.Control.displayName = 'ControlComp';
    return (
      <div className="counterApp">
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
      </div>
    );
  }
}
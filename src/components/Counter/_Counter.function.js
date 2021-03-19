import React, { useState } from 'react';

/* -------------------- Compound Component Pattern(with function comps) ------------------------------- */
/**
 * Compound Comp의 장점 : props, callback 전달 과정 간소화
 */

export default function Counter() {
  // 함수 컴포넌트의 상태 관리 by useState() Hook
  const [count, setCount] = useState(0);

  // 전달받은 값을 통해 기존 값을 업데이트 하는 함수가 필요하다!
  // (안 그러면 최초 1회만 실행됨.)
  const updateCount = (step) => {
    setCount((prevState) => prevState + step);
    /**
     * useState()의 함수적 갱신
     * https://ko.reactjs.org/docs/hooks-reference.html#functional-updates
     */
  };

  return (
    <div className="counterApp">
      <Counter.Control // Counter 객체의 Control 프로퍼티가 결국은 또 다른 하위 컴포넌트라는 것!
        label="decrement count"
        onUpdate={updateCount}
        // step={1} -> CounterControl 컴포넌트에 default value 있으므로 생략 가능
      >감소</Counter.Control>
      <Counter.Display>{count}</Counter.Display>
      <Counter.Control
        label="increment count"
        onUpdate={updateCount}
        step={2}
      >증가</Counter.Control>
    </div>
  );
}

/** 함수 객체에 대한 프로퍼티 동적 생성을 통해 내부 컴포넌트를 만들 수 있음. */
Counter.Display = function DisplayComp({ children }) {
  return (
    <output>{children}</output>
  );
};

Counter.Control = function ControlComp({ label, onUpdate, step = 1, children }) {
  const updateCount = () => {
    // children을 사용하여 조건 처리하기(분기)
    // 이 외에도 분기할 수 있는 방법은 다양함.
    if (children.includes('감소')) { // String.prototype.includes => ES6 도입
      step = step * -1;
    }

    onUpdate(step); // setCount 함수를 받아서 실행하는 것
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
};

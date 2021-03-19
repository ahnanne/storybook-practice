import React from 'react';

export default function CounterControl({
  label, // for screenreader -> aria-label
  onUpdate,
  step = 1,
  children
}) {
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
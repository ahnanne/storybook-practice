import React from 'react';
import './Button.scss';
// 리액트에서 svg는 바로 컴포넌트로 사용할 수 있음.

export default function Button({ mode, state, children }) {
  return (
    <button className={`submit-button ${mode} ${state}`} disabled={state === 'disabled' ? true : false}>
      {children}
    </button>
  );
}

import React from 'react';
import './Checkbox.scss';

export default function Checkbox({ ckId, checked, disabled, method, children }) {
  return (
    <>
      <input
        type="checkbox"
        id={`ck${ckId}`}
        className="checkBox {ckId}"
        onClick={method}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={`ck${ckId}`}>{children}</label>
    </>
  );
}
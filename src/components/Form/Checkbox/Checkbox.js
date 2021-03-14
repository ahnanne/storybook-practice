import React from 'react';
import './Checkbox.scss';

export default function Checkbox({ ckId, checked, updateCheckedState, disabled, children }) {
  return (
    <>
      <input
        type="checkbox"
        id={`ck${ckId}`}
        className="checkBox {ckId}"
        onClick={updateCheckedState}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={`ck${ckId}`}>{children}</label>
    </>
  );
}
import React from 'react';
import './Checkbox.scss';

export default function Checkbox({ ckId, checked, disabled, label }) {
  return (
    <>
      <input
        type="checkbox"
        id={`ck${ckId}`}
        className="checkBox {ckId}"
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={`ck${ckId}`}>{label}</label>
    </>
  );
}
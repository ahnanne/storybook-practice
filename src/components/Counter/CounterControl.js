import React from 'react';

export default function CounterControl({ className, onControl, children }) {
  return (
    <>
      <button
        className={className}
        type="button"
        onClick={onControl}
      >
        {children}
      </button>
    </>
  );
}
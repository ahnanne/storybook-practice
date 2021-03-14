import React from 'react';
import './Popup.scss';

export default function Popup({ comp, checked, children }) {
  return (
    // checked=true일 때 display: block;
    <div className={`info-popup ${comp}-popup ${checked ? "active" : ""}`}>
      <span className="info-popup__text">
        {children}
      </span>
    </div>
  );
}
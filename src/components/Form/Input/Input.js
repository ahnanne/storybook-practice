import React from 'react';
import Icon from '../../UI/Icon/Icon';
import './Input.scss';

export default function Input({ type, visible, id, className, method }) {
  // type: email, password
  // state: normal, inputed
  // visible: false, true
  return (
    <div className="input-container">
      <input
        type={type === "email" ? type : (visible ? "text" : type)}
        placeholder={type === "email" ? "아이디(이메일)" : "비밀번호"}
        id={`${id} ${type}Input`.trim()}
        className={`${type}-input ${className}`.trim()}
      />
      <Icon
        shape={type === "email" ? "noIcon" : (visible ? "hide" : "show")}
        title={type}
        onClick={method}
      />
    </div>
  );
}
import React from 'react';
import Icon from '../../UI/Icon/Icon';
import './Input.scss';

export default function Input({ type, visible, id, className, method, onChange, onBlur }) {
  // type: email, password
  // state: normal, inputed
  // visible: false, true
  return (
    <div className="input-container">
      <input
        name={type}
        // input 양식 컨트롤의 이름.
        // 이름/값 짝(name/value pair)의 일부로서 양식과 함께 전송된다
        type={type === "email" ? type : (visible ? "text" : type)}
        placeholder={type === "email" ? "아이디(이메일)" : "비밀번호"}
        id={`${id} ${type}Input`.trim()}
        className={`${type}-input ${className}`.trim()}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Icon
        shape={type === "email" ? "noIcon" : (visible ? "hide" : "show")}
        title={type}
        onClick={method}
      />
    </div>
  );
}
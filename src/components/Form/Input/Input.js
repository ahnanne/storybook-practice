import React from 'react';
import Icon from '../../UI/Icon/Icon';
import './Input.scss';
// import firstLetterToUpperCase from '../../../utils/index';

export default function Input({ type, visible, id, className }) {
  // type: email, password
  // state: normal, inputed
  // visible: Default, true
  // hasError: Default, true -> styling을 위해 필요함. (SignInInput에서 Input 컴포넌트 사용할 경우)
  return (
    <div className="input-container">
      <input
        type={type === "email" ? type : (visible === "Default" ? type : "text")}
        placeholder={type === "email" ? "아이디(이메일)" : "비밀번호"}
        id={`${id} ${type}Input`.trim()}
        className={`${type}-input ${className}`.trim()}
      />
      <Icon
        shape={type === "email" ? "noIcon" : (visible === "Default" ? "hide" : "show")}
        title={type}
      />
    </div>
  );
}
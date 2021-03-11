import React from 'react';
import Icon from '../../UI/Icon/Icon';
import Input from '../Input/Input';
// import './SignInInput.scss';

export default function SignInInput({ type, state, visible, hasError }) {
  // type: email, password
  // state: normal, inputed
  // visible: Default, true
  // hasError: Default, true
  let contents = 'state와 hasError에 따른 에러메시지 처리';

  if (hasError === 'true') {
    if (type === 'password' && state === 'normal') contents = '비밀번호를 입력해주세요.';
    else if (type === 'email') {
      // type === 'email'인 경우의 에러메시지
      if (state === 'inputed') contents = '아이디(이메일)은 이메일 형식으로 입력해주세요.';
      else contents = '아이디(이메일)을 입력해주세요.';
    } else contents = '';
  }

  return (
    <>
      <div className={`signin-input-container ${hasError === "true" ? "has-error" : ""}`.trim()}>
        <Input
          type={type}
          visible={visible}
          id={`signin${type.charAt(0).toUpperCase() + type.slice(1)}`}
          // 첫 글자만 대문자
          className={`signin-${type}`}
        />
        <Icon
          shape={type === "email" ? "letter" : "lock"}
          title={type}
        />
      </div>
      <p className="error-msg">{contents}</p>
    </>
  )
}
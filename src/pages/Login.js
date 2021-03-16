import React, { Component } from 'react';
import Logo from '../components/UI/Logo/Logo';
import SignInInput from '../components/Form/SignInInput/SignInInput';
import AutoSignInCheckBox from '../components/Form/AutoSignInCheckBox/AutoSignInCheckBox';
import Button from '../components/Form/Button/Button';
import './Login.scss';

export default class Login extends Component {
  render() {
    return (
      <div className="login__wrapper">
        <header className="login__header">
          <h1 className="login__logo">
            <a href="http://www.coupang.com/">
              <Logo type="Color" />
            </a>
          </h1>
        </header>
        <div className="login__main">
          <form action="#" className="login__form" method="post">
            <ul className="login__input-list">
              <li className="login__input-item">
                <SignInInput
                  type="email"
                  state="normal"
                  visible="Default"
                  hasError="Default"
                />
              </li>
              <li className="login__input-item">
                <SignInInput
                  type="password"
                  state="normal"
                  visible="Default"
                  hasError="Default"
                />
              </li>
            </ul>
          </form>
        </div>
        <footer className="login__footer">
        </footer>
      </div>
      // 작성 완료 후 스토리에 필요한 argTypes 마저 입력하기
    );
  }
}
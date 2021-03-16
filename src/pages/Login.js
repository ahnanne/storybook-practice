import React, { Component } from 'react';
import Logo from '../components/UI/Logo/Logo';
import SignInInput from '../components/Form/SignInInput/SignInInput';
import AutoSignInCheckBox from '../components/Form/AutoSignInCheckBox/AutoSignInCheckBox';
import Button from '../components/Form/Button/Button';
import { ReactComponent as Chevron } from '../assets/fontawesome/chevron.svg'
import './Login.scss';
import { divider } from '../styles/modules/common.module.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // pw input state
      state: "normal",
      visible: false,
      hasError: "Default",
      // auto signin ckbox state
      checked: false,
    }
  }

  changeVisibility = () => {
    this.setState((prevState) => ({
      ...prevState,
      visible: !this.state.visible,
    }))
  };

  updateCheckedState = () => {
    this.setState((prevState) => ({
      ...prevState,
      checked: !prevState.checked,
      disabled: false,
    }));
  };

  render() {
    // password state
    const { state, visible, hasError } = this.state;
    // checkbox state
    const { checked, disabled } = this.state;

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
                  state={state}
                  visible={false}
                  hasError={hasError}
                />
              </li>
              <li className="login__input-item">
                <SignInInput
                  type="password"
                  state={state}
                  visible={visible}
                  hasError={hasError}
                  method={this.changeVisibility}
                />
              </li>
            </ul>
            <div className="login__submenu">
              <AutoSignInCheckBox
                method={this.updateCheckedState}
                checked={checked}
                disabled={disabled}
              />
              <div className="login__findInfo">
                <a href="https://login.coupang.com/login/accountInfoFind.pang">
                  아이디(이메일)/비밀번호 찾기<Chevron className="login__findInfo-chevron" />
                </a>
              </div>
            </div>
            <div className="login__button-container">
              <Button mode="primary" state="normal">
                로그인
              </Button>
              <div className={divider}></div>
              <Button mode="secondary" state="normal">
                회원가입
              </Button>
            </div>
          </form>
        </div>
        <footer className="login__footer">
          <small>©Coupang Corp. All rights reserved.</small>
        </footer>
      </div>
      // 작성 완료 후 스토리에 필요한 argTypes 마저 입력하기
    );
  }
}
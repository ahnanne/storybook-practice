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
      inputState: {
        state: 'normal',
        visible: false,
        hasError: {
          email: 'Default',
          password: 'Default',
        },
        inputContent: {
          email: '',
          password: '',
        }
      },
      autoSignin: {
        checked: false,
        disabled: false,
      },
    }
  }

  changeVisibility = () => {
    this.setState((prevState) => ({
      ...prevState,
      inputState: {
        ...prevState.inputState,
        visible: !prevState.inputState.visible,
      },
    }))
  };

  updateCheckedState = () => {
    this.setState((prevState) => ({
      ...prevState,
      autoSignin: {
        ...prevState.autoSignin,
        checked: !prevState.autoSignin.checked,
      },
    }));
  };

  /** React form multiple control handle */
  controlInput = e => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      inputState: {
        ...prevState.inputState,
        inputContent: {
          ...prevState.inputState.inputContent,
          [name]: value,
        }
      }
    }));
  };

  isEmpty = e => {
    const { name, value } = e.target;

    this.setState((prevState) => ({
      ...prevState,
      inputState: {
        ...prevState.inputState,
        hasError: {
          ...prevState.inputState.hasError,
          [name]: value === '' ? 'true' : 'Default',
        }
      },
    }));
  }

  render() {
    // input state
    const { state, visible, hasError, inputContent } = this.state.inputState;
    // checkbox state
    const { checked, disabled } = this.state.autoSignin;

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
                  hasError={hasError.email}
                  onChange={this.controlInput}
                  onBlur={this.isEmpty}
                />
              </li>
              <li className="login__input-item">
                <SignInInput
                  type="password"
                  state={state}
                  visible={visible}
                  hasError={hasError.password}
                  method={this.changeVisibility}
                  onChange={this.controlInput}
                  onBlur={this.isEmpty}
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
  /*
  componentDidMount() {
    const signinPw = document.querySelector('.signin-password');
    const checkBox = document.querySelector('.checkBox0');

    signinPw.addEventListener('blur', e => {
      if (e.target.value === '') {
        this.setState((prevState) => ({
          ...prevState,
          inputState: {
            ...prevState.inputState,
            hasError: {
              ...prevState.inputState.hasError,
              password: 'true',
            }
          },
        }));
      }
    });
  }
  componentDidUpdate() {
    const signinPw = document.querySelector('.signin-password');

    signinPw.addEventListener('blur', e => {
      if (e.target.value === '') {
        this.setState((prevState) => ({
          ...prevState,
          inputState: {
            ...prevState.inputState,
            hasError: {
              ...prevState.inputState.hasError,
              password: 'true',
            }
          },
        }));
      } else {
        this.setState((prevState) => ({
          ...prevState,
          inputState: {
            ...prevState.inputState,
            hasError: {
              ...prevState.inputState.hasError,
              password: 'Default',
            }
          },
        }));
      }
    });
  }
  */
}
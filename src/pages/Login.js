import React, { Component } from 'react';
import Logo from '../components/UI/Logo/Logo';
import SignInInput from '../components/Form/SignInInput/SignInInput';
import AutoSignInCheckBox from '../components/Form/AutoSignInCheckBox/AutoSignInCheckBox';
import Button from '../components/Form/Button/Button';

export default class Login extends Component {
  render() {
    return (
      <>
      {/* 폴더 구조가 확실하지 않으니..
      우선은 index.js에 import 해서 작업하기 */}
      {/* 전체 구조 마크업 및 레이아웃 구성 */}
        <Logo
          type="Color"
        />
      </>
    );
  }
}
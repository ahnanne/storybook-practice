import React, { Component } from 'react';
import '../Checkbox/Checkbox';
import Checkbox from '../Checkbox/Checkbox';
import Popup from '../../UI/Popup/Popup';
import './AutoSignInCheckBox.scss';

export default class AutoSignInCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ckId: 0,
    };
  }

  increaseId = () => {
    this.setState((prevState) => ({
      ...prevState,
      ckId: prevState.ckId + 1,
    }));
  }

  render() {
    const { method, checked, disabled } = this.props;

    return (
      <div className="autosignin-container">
        <Checkbox
          ckId={this.state.ckId}
          checked={checked}
          method={method}
          disabled={disabled}
        >
          <span className="label-content">자동 로그인</span>
        </Checkbox>
        <Popup comp="autosignin" checked={checked}>
          개인 정보 보호를 위해 본인 기기에서만 이용해주세요.
        </Popup>
      </div>
    );
  }
}
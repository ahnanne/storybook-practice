import React, { Component } from 'react';
import '../Checkbox/Checkbox';
import Checkbox from '../Checkbox/Checkbox';
import './AutoSignInCheckBox.scss';

export default class AutoSignInCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      ckId: 0,
    };
  }

  increaseId = () => {
    this.setState((prevState) => ({
      ...prevState,
      ckId: prevState.ckId + 1,
    }));
  }

  updateCheckedState = () => {
    this.setState((prevState) => ({
      ...prevState,
      checked: !prevState.checked,
    }));
  }

  render() {
    return (
      <div className="autosignin-container">
        <Checkbox
          ckId={this.state.ckId}
          checked={this.state.checked}
          updateCheckedState={this.updateCheckedState}
          disabled={this.state.disabled}
        >
          <span className="label-content">자동 로그인</span>
        </Checkbox>
      </div>
    );
  }
}
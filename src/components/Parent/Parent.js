import React, { Component } from 'react';
import Copyright from '../Copyright/Copyright';
import Checkbox from '../Form/Checkbox/_Checkbox.function';

export default class Parent extends Component {
  state = {
    visibility: false,
  };

  changeVisibility() {
    this.setState((prevState) => ({
      visibility: !prevState.visibility,
    }));
  }

  render() {
    return (
      <>
        <Checkbox
          id="check-sdgasdg"
          label="라이선스 표시/감춤"
          checked={this.state.visibility}
          onChecked={this.changeVisibility.bind(this)}
        />
        <hr />
        { this.state.visibility ? <Copyright /> : null }
        {/* 또는 { visibility ?? <Copyright /> } */}
      </>
    );
  }
}
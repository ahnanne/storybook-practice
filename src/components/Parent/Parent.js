import React, { Component } from 'react';
import Copyright from '../Copyright/Copyright';
import Checkbox from '../Form/Checkbox/_Checkbox.function';

export default class Parent extends Component {
  constructor() {
    super();
    console.log(this);
  }
  state = {
    visibility: false,
  };

  // this binding 확인용
  checkThisOut = function () {
    console.log(this);
  };

  checkThisOutToo = () => {
    console.log(this);
  };

  changeVisibility() {
    console.log('프로토타입 메서드에서의 this');
    console.log(this);
    this.setState((prevState) => ({
      visibility: !prevState.visibility,
    }));
  }

  render() {
    console.log(this.checkThisOut());
    console.log(this.checkThisOutToo());

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
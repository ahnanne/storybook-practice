import React, { Component } from 'react';
import Copyright from '../Copyright/Copyright';
import Checkbox from '../Form/Checkbox/_Checkbox.function';

export default class Parent extends Component {
  /** 인스턴스 메서드
   * 결국, 클래스 필드로 정의한 메서드는
   * constructor 안에서 정의된 메서드와 같다고 볼 수 있음. */
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

  /** 프로토타입 메서드 */
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
    /**
     *  this가 가리키는 값 다음으로 콘솔창에 찍히는 undefined는
     *  이 함수들이 값을 반환하지 않고 있어서(즉, return문이 없어서)
     *  undefined가 반환되는 것임.
     */

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
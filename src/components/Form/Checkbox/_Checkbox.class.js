import React, { Component } from 'react';
import { string } from 'prop-types';
import './Checkbox.scss';

// state를 관리하는 컴포넌트로서 만들고 싶다. => 클래스 컴포넌트로 만들자!

export default class Checkbox extends Component {
  // ckId, checked, disabled, method, children

  // 예전에는 constructor를 많이 썼지만 요즘에는 클래스 필드로 많이 씀.
  // 상태 정의 by 클래스 필드 선언
  state = {
    isChecked: this.props.checked ?? false,
    isDisabled: false,
  }

  // static
  static propTypes = {
    id: string.isRequired,
    label: string.isRequired,
  }

  // 이벤트 리스너로서 인스턴스 멤버로 등록
  changeCheckedState = e => {
    this.setState((prevState) => ({
      isChecked: e.target.checked,
      // 위와 같이 DOM으로부터 가져와도 되고,
      // 아니면 컴포넌트가 갖고 있는 state로부터 값을 가져와도 됨.
      // DOM의 값이 필요한 경우라면 전자의 방식을 사용해야 함.
    }));
  };

  /**
  static getDerivedStateFromProps(props, state) {
    // 상태에 합성될 객체 반환
    return {
      isChecked: props.checked,
      handleChangeFromParent: props.onChange,
    };
  }
  */

  // 렌더링
  render() {
    const { id, label, onChecked } = this.props;
    const { isChecked, isDisabled } = this.state;

    return (
      <>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={isChecked}
          disabled={isDisabled}
          onChange={e => {
            onChecked(); // Parent의 상태를 바꾸는 함수 -> copyright 가시성 제어
            this.changeCheckedState(e); // 이 컴포넌트 자신의 입력 상태를 제어하는 함수
          }}
        />
        {/* input은 빈 태그인바 가상 요소 선택자를 가질 수 없음. */}
        {/* 이 체크박스는 checked와 disabled 속성이 리액트에 의해서 제어되고 있는 요소이므로
          기본적으로는 클릭해도 체크가 안됨. */}
        <label htmlFor={id}>{label}</label>
      </>
    );
  }

  componentDidMount() {
    console.log('초기 체크 상태 값: ', this.state.isChecked);
  }
}
import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as LogoBlack } from '../../../assets/logo/black.svg';
import { ReactComponent as LogoMono } from '../../../assets/logo/mono.svg';
import { ReactComponent as LogoColor } from '../../../assets/logo/color.svg';
// 리액트에서 svg는 바로 컴포넌트로 사용할 수 있음.

export default function Logo({ type, ...restProps }) {
  /*
  switch(type) {
    case 'Black':
      return (<LogoBlack title="logo" />);
    case 'Mono':
      return (<LogoMono title="logo" />);
    default:
      return (<LogoColor title="logo" />)
  }
  */
  let Comp = null;
  switch(type) {
    case 'Black':
      Comp = LogoBlack;
      break;
    case 'Mono':
      Comp = LogoMono;
      break;
    default:
      Comp = LogoColor;
  }

  return <Comp title="logo" {...restProps} />
}

Logo.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['Color', 'Mono', 'Black']),
};
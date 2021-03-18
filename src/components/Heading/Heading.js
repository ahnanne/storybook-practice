import React from 'react';
import { number } from 'prop-types';
import styles from './Heading.module.scss';
// level을 전달 받는 함수 컴포넌트

export default function Heading({
  level,
  className: cName,
  children,
  ...restProps
  }) {
    return (
      // <h1 {...restProps}>{children}</h1>
      React.createElement(`h${level}`, {
        className: `${styles['headline']} ${cName}`.trim(),
        children,
        ...restProps
      })
    );
}

// default props를 주면 테스트 과정에서 일일이 props를 전달하지 않아도 됨.
Heading.defaultProps = {
  level: 3,
  className: '',
}

Heading.propTypes = {
  level: number.isRequired,
}
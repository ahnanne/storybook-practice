import React from 'react';
import { string, bool, object } from 'prop-types';
import styles from './LinkA.module.scss';

// 외부로 나가는 링크는 _blank
export default function LinkA({
  link,
  className, // restProps에 의해 덮어씌워지지 않도록 추출
  href,
  isExternal,
  fgColor,
  bgColor,
  style, // restProps에 의해 덮어씌워지지 않도록 추출
  children,
  ...restProps
}) {
  const target = isExternal ? '_blank' : null;
  const rel = isExternal ? 'noopener noreferrer' : null; // 😶
  // react는 속성값이 null일 때 html을 렌더링하지 않는다.
  const combineClassName = `${styles['link']} ${className}`.trim();
  // 제어할 클래스가 많아지면 class names library 사용하는 것도 고려해볼만 함.
  // class names library는 trim도 알아서 해줌.
  const combineStyle = {
    ...style,
    color: fgColor,
    backgroundColor: bgColor,
  };

  return (
    <a
      className={combineClassName}
      href={href}
      target={target}
      rel={rel}
      style={combineStyle}
      {...restProps}
    >
      {children}
    </a>
  )
}

LinkA.defaultProps = {
  isExternal: false,
  className: '',
  href: '/',
  style: {},
}

// 필수값은 prop-types로 체크하기
LinkA.propTypes = {
  href: string.isRequired,
  isExternal: bool,
  className: string,
  style: object,
}
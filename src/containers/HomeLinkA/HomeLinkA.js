import React from 'react';
import Heading from '../../components/Heading/Heading';
import LinkA from '../../components/LinkA/LinkA';
/**
  import styles from './HomeLinkA.module.scss';
  종속 컴포넌트가 자체적으로 스타일 모듈을 포함하고 있으므로,
  향후 필요한 경우에 스타일 확장할 것임.
 */


/**
 * PropTypes 패키지를 사용하여 타입 검사를 설정
 * string, node, object
 */
import { string, object, node, number, oneOfType } from 'prop-types';

/** 자문자답..
  Q: 스타일 관리는 어떤 방법을 사용할 것인가?
  A: Sass Modules를 사용하자!

  Q: 상태를 가질 필요가 있는가?
  A: 없으므로 함수 컴포넌트로 가자!

  Q: 전달받는 속성이 필요한가?
    ("전달받는 속성"의 변수 이름 => 리액트: props, 스토리북: args)
  A: 필요하다!
      a 요소, href='/'
      props.children
 */

      // 종속 모듈 불러와서 조립하기

export default function HomeLinkA({
    level,
    lang,
    href,
    className,
    children,
    headingProps,
    linkAProps
  }) {
  // 전달 속성 : lang, className, style, children, ...restProps
  return (
    <Heading level={level} lang={lang} {...headingProps}>
      <LinkA href={href} {...linkAProps}>
        {children}
      </LinkA>
    </Heading>
  );
}

// 함수 컴포넌트의 기본 전달 속성 값 설정
// 기본값을 주기 위해 사용하는 nullish(??) 연산자는 스토리북에서 인식을 못할 때가 있으므로
// 아래와 같이 defaultProps로 설정하는 것이 더 편리함.
HomeLinkA.defaultProps = {
  level: 1,
  lang: null,
  href: '/',
}

HomeLinkA.propTypes = {
  level: oneOfType([number, string]),
  // oneOfType의 인자로는 배열을 전달하며,
  // 이 배열의 요소로는 복수의 prop type이 들어감.
  // 그러면 이제 이 prop의 값의 타입은 해당 요소들 중 하나에 해당하기만 하면 됨.
  // lang: string,
  href: string,
  children: node,
  // children은 React가 반환할 수 있는 모든 유형을 의미함.
  // 여기서 node는 DOM node가 아니라, React가 반환하는 모든 유형을 말하는 것임.
  headingProps: object,
  linkAProps: object,
}
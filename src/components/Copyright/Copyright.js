import React from 'react';
import styles from './Copyright.module.scss';

// Q: 이 컴포넌트는 상태를 가질까요?
// A: 저작권만 표시하니 상태는 필요 없네요.

/** 무기명 함수는 디버깅할 때 anonymous로 뜨기 때문에
  컴포넌트가 여러 개일 때 식별하기 어려우므로 
  기명 함수로 만들어주기 */
export default function Copyright() {
  return (
    /**
    모듈 css 클래스 이름 패턴
    [컴포넌트이름]_[클래스이름]__[콘텐츠해시(고유값)]
     */
    <small lang="en" className={styles['display']}>
      &copy;Coupang Corp. All rights reserved.
    </small>
  );
}

Copyright.displayName = 'test Comp';
// 디버깅을 편리하게 하기 위해, displayName 프로퍼티를 이용하여
// 개발자 도구에서 보여지는 컴포넌트의 이름을 바꿀 수 있음.
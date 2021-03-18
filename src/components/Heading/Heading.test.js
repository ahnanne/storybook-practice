import { render, screen } from '@testing-library/react'
import Heading from './Heading';
// 브라우저에 실제 렌더링하는 과정 없이 콘솔로 테스트 결과를 확인할 수 있다.

// 테스트 스위트 (-> 그룹 같은 개념이며 필수는 아님)
// describe(description, callback)
describe('Heading 컴포넌트', () => {
  //    테스트 케이스
  //    test(title, callback)
  test('컴포넌트 렌더링은 정상적으로 구현되는가?', () => {
    // 컴포넌트 렌더링
    render(
      <Heading>
        쿠팡 신제품 보기
      </Heading>
    );
    // 스크린 디버깅
    screen.debug();
  });
})
// 터미널에서 npm t를 입력하여 실행
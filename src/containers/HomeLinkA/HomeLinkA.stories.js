// 스토리 작성 1단계: 스토리를 작성할 컴포넌트를 불러오자.
import HomeLinkA from './HomeLinkA';

// 스토리 구성 객체를 기본 내보내기로 내보내자.
export default {
  // 스토리의 구성(카테고리/그룹/컴포넌트) 이름
  title: 'UI/HomeLinkA',
  // 스토리를 구성할 컴포넌트 연결
  component: HomeLinkA,
  /** 이하 항목은 스토리 파일 구성 문서에서 각 설명 참고하면 됨.
  args: {},
  argTypes: {},
  decorators: {},
  parameters: {},
  */
}

/**
 * 스토리를 1개만 만들거다! => 템플릿 필요 X
 * 스토리를 2개 이상 만들거다! => 템플릿 필요 O
 */

// 스토리는 이름 모듈로 내보내야 한다.
export const Normal = () => (
  <HomeLinkA>쿠팡! 홈</HomeLinkA>
);
Normal.storyName = '홈 링크 (기본)';

// 스토리를 2개 이상 만들 것이므로 템플릿을 만들어보자.
const Template = (args) => <HomeLinkA {...args} />

// 템플릿 복제(표준 JS 함수 복제 방식 활용, Function.prototype.bind)
export const ChangeLevel = Template.bind({});
// 함수 복제 목적으로 bind 메서드를 사용하는 것임.
ChangeLevel.args = {
  level: 4,
  children: '쿠팡!',
};
ChangeLevel.storyName = '홈 링크 (레벨4)';

export const ChangeLang = Template.bind({});
ChangeLang.args = {
  lang: 'es',
  children: 'Kutan',
};

ChangeLang.storyName = '홈 링크 (스페인어 언어 설정)';

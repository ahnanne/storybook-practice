import Logo from './Logo';

// 스토리 구성 객체 기본 내보내기
export default {
  // 사이드바에 표시할 이름 (옵션: 그룹 포함)
  title: 'UI/Logo',
  // 렌더링할 컴포넌트
  component: Logo,
  // 사용자 정의 속성명
  argTypes: {
    title: {
      description: '로고 이름 (스크린에서 읽힐 로고의 이름을 지정해주세요.)',
      defaultValue: '쿠팡',
    },
    type: {
      description: '로고 타입 (3개 값 중 하나를 사용해야 합니다!)',
      defaultValue: { summary: 'Black' },
      control: {
        type: 'select',
        options: ['Color', 'Mono', 'Black'],
      },
    },
  },
}

// 스토리 컴포넌트 템플릿
const Template = (args) => <Logo {...args} />

// 기본 컴포넌트 Primary 이름으로 내보내기
export const ColorfulLogo = Template.bind({});
// Primary 컴포넌트에 전달인자(args) 설정
ColorfulLogo.args = {
  type: 'Black',
};

// Log
// Template <- Logo
// Logo
// args: { type } // colorful, mono, black

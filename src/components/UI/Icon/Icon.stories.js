import Icon from './Icon';

// 스토리 구성 객체 기본 내보내기
export default {
  // 사이드바에 표시할 이름 (옵션: 그룹 포함)
  title: 'UI/Icon',
  // 렌더링할 컴포넌트
  component: Icon,
  // 사용자 정의 속성명
  argTypes: {
    shape: {
      description: '아이콘 종류 (사용할 아이콘을 지정해주세요.)',
      defaultValue: 'letter',
    },
    title: {
      description: '아이콘 이름 (스크린에서 읽힐 아이콘의 이름을 지정해주세요.)',
      defaultValue: '이메일',
    },
  },
}

// 스토리 컴포넌트 템플릿
const Template = (args) => <Icon {...args} />

// 기본 컴포넌트 Primary 이름으로 내보내기
export const Primary = Template.bind({});
// Primary 컴포넌트에 전달인자(args) 설정
Primary.args = {
  shape: 'letter',
  title: '이메일',
};

// Log
// Template <- Logo
// Logo
// args: { type } // colorful, mono, black

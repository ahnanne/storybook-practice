import Button from './Button';

// 스토리 구성 객체 기본 내보내기
export default {
  // 사이드바에 표시할 이름 (옵션: 그룹 포함)
  title: 'Form/Button',
  // 렌더링할 컴포넌트
  component: Button,
  // 사용자 정의 속성명
  argTypes: {
    mode: {
      description: '파란색 배경(primary)/흰색 배경(secondary)',
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    state: {
      description: '클릭 활성화 여부',
      defaultValue: 'normal',
      control: {
        type: 'select',
        options: ['normal', 'disabled'],
      },
    },
    children: {
      description: '버튼 내용 (버튼에 표시될 텍스트를 입력해주세요.)',
      defaultValue: '버튼',
    },
  }
}

// 스토리 컴포넌트 템플릿
const Template = (args) => <Button {...args} />

// 기본 컴포넌트 Primary 이름으로 내보내기
export const Primary = Template.bind({});
// Primary 컴포넌트에 전달인자(args) 설정
Primary.args = {
  mode: 'primary',
  state: 'normal',
  children: '버튼',
};

// Log
// Template <- Logo
// Logo
// args: { type } // colorful, mono, black

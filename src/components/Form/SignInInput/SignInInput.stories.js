import SignInInput from './SignInInput';

export default {
  title: 'Form/SignInInput',
  component: SignInInput,
  argTypes: {
    type: {
      description: '이메일 또는 비밀번호',
      defaultValue: 'email',
      control: {
        type: 'select',
        options: ['email', 'password'],
      },
    },
    state: {
      description: '텍스트 입력 여부',
      defaultValue: 'normal',
      control: {
        type: 'select',
        options: ['normal', 'inputed'],
      },
    },
    visible: {
      description: '비밀번호 입력 시 숨김 여부(기본값: 숨김)',
      defaultValue: false,
    },
    hasError: {
      description: '사용자 입력 내용 유효성 검사',
      defaultValue: 'Default',
      control: {
        type: 'select',
        options: ['Default', 'true'],
      },
    },
  }
}

const Template = (args) => <SignInInput {...args} />

export const Primary = Template.bind({});
Primary.args = {
  type: 'email',
  state: 'normal',
  visible: false,
  hasError: 'Default',
};

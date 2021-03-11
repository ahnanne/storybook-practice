import Input from './Input';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    type: {
      description: '이메일 또는 비밀번호',
      defaultValue: 'email',
      control: {
        type: 'select',
        options: ['email', 'password'],
      },
    },
    // state: {
    //   description: '텍스트 입력 여부',
    //   defaultValue: 'normal',
    //   control: {
    //     type: 'select',
    //     options: ['normal', 'inputed'],
    //   },
    // },
    visible: {
      description: '비밀번호 입력 시 숨김 여부(기본값: 숨김)',
      defaultValue: 'Default',
      control: {
        type: 'select',
        options: ['Default', 'true'],
      },
    },
    id: {
      description: '상위로부터 추가로 전달받은 id',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
    className: {
      description: '상위로부터 추가로 전달받은 className',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  },
}

const Template = (args) => <Input {...args} />

export const Primary = Template.bind({});
Primary.args = {
  type: 'email',
  visible: 'Default',
  id: '',
  className: '',
};

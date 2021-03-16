import AutoSignInCheckBox from './AutoSignInCheckBox';

export default {
  title: 'Form/AutoSignInCheckBox',
  component: AutoSignInCheckBox,
  argTypes: {
    checked: {
      description: '체크박스 체크 상태',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    method: {
      description: '체크박스 체크 상태 관련 메서드',
    },
    disabled: {
      description: '체크박스 비활성화 여부',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    }
  }
}

const Template = (args) => <AutoSignInCheckBox {...args} />

export const Primary = Template.bind({});

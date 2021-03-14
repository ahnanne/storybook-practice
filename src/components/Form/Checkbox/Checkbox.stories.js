import Checkbox from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    ckId: {
      description: '전달 받은 id',
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
    checked: {
      description: '체크 여부',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: '비활성화 여부',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    label: {
      description: '체크박스 label',
      defaultValue: '',
    },
  },
}

const Template = (args) => <Checkbox {...args} />

export const Primary = Template.bind({});
Primary.args = {
  ckId: 0,
  checked: false,
  disabled: false,
  label: '',
};

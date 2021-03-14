import Popup from './Popup';

export default {
  title: 'UI/Popup',
  component: Popup,
  argTypes: {
    // types of arguments
    comp: {
      description: '어떤 컴포넌트에서 사용하는지를 나타내는 정보로, 클래스 이름을 짓기 위해 필요합니다.',
      defaultValue: '',
    },
    checked: {
      description: '이 팝업창의 디스플레이 여부를 결정합니다. (checked 상태일 때 나타남.)',
      defaultValue: false,
    },
    children: {
      description: '팝업창의 내용으로 들어갈 내용입니다.',
      defaultValue: '',
    },
  }
}

const Template = (args) => <Popup {...args} />

export const Primary = Template.bind({});

Primary.args = {
  comp: '',
  checked: false,
  children: '',
};

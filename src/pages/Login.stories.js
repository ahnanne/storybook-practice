import Login from './Login';

// 스토리 구성 객체 기본 내보내기
export default {
  title: 'Page/Login',
  component: Login,
  // argTypes: {},
};

// 스토리 컴포넌트 템플릿
const Template = (args) => <Login {...args} />

// 기본 컴포넌트 Primary 이름으로 내보내기
export const Primary = Template.bind({});
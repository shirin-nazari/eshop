import Buttons from './Button';

export default {
  // title is props
  title: 'Button',
  component: Buttons,
};

const template = (args) => <Buttons {...args} />;
export const Primary = template.bind({});

Primary.args = {
  primary: true,
  childern: 'Button',
};

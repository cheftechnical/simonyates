import {Story} from '@storybook/react';
import Section, {Props} from './index';

export default {
  title: 'Components/Section',
  component: Section,
};

const Template: Story<Props> = (args: Props) => <Section {...args}/>;

export const Default = Template.bind({});
Default.args = {
  children: <>Children</>,
  id: 'test',
  name: 'My Section Name',
};

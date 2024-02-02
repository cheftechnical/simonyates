import {Story} from '@storybook/react';
import Quote, {Props} from './Quote';

export default {
  title: 'Components/Quote',
  component: Quote,
};

const Template: Story<Props> = (args: Props) => <Quote {...args}/>;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      I do appreciate the good work you&rsquo;ve done. I am very pleased with the application and your coding. Logical.
      Commented. Made it much easier to go through.
    </>
  )
};

export const WithSource = Template.bind({});
WithSource.args = {
  children: (
    <>
      I do appreciate the good work you&rsquo;ve done. I am very pleased with the application and your coding. Logical.
      Commented. Made it much easier to go through.
    </>
  ),
  source: 'Alain Brisard, Web Communications Producer, Apple Canada Inc.',
};

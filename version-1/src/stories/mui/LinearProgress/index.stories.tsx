import {Story} from '@storybook/react';
import {LinearProgress, LinearProgressProps} from '@material-ui/core';

export default {
  title: 'Mui/LinearProgress',
  component: LinearProgress,
};

const Template: Story<LinearProgressProps> = (args: LinearProgressProps) => <LinearProgress {...args}/>;

export const Default = Template.bind({});
Default.args = {};
import { StoryFn } from "@storybook/react-vite";
import Callout, { Props } from "./Callout";

export default {
  title: "Components/Callout",
  component: Callout,
};

const loremIpsumString =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra volutpat phasellus dictum eu proin. Sed lorem.";
const loremIpsumArray = ["lorem", "ipsum", "dolor", "sit", "amet"];

const Template: StoryFn<Props> = (args: Props) => <Callout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <>{loremIpsumString}</>,
};

export const DefaultList = Template.bind({});
DefaultList.args = {
  list: loremIpsumArray,
};

export const Alert = Template.bind({});
Alert.args = {
  children: <>{loremIpsumString}</>,
  variant: "alert",
};

export const AlertList = Template.bind({});
AlertList.args = {
  list: loremIpsumArray,
  variant: "alert",
};

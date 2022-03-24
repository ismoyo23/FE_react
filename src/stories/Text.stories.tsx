import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../component/atoms/text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Settings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Settings.args = {
  type: "small",
  label: "Text",
  styles: [],
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Badge } from "../component/atoms/badge";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Badge",
  component: Badge,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Settings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Settings.args = {
  type: "primary",
  label: "badge",
};

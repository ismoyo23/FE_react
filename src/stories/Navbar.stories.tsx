import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from "../component/organism/navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organims/Navbar",
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Navbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Settings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Settings.args = {
  type: "white",
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TodoList } from "../component/organism/todolist";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Organims/TodoList",
  component: TodoList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TodoList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TodoList> = (args) => (
  <TodoList {...args} />
);

export const Settings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Settings.args = {
  Newtask: "primary",
  Progresstask: "info",
  FinishTask: "success",
};

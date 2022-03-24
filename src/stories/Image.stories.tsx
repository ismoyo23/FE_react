import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Image } from "../component/atoms/image";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Image",
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Settings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Settings.args = {
  type: "small",
  name: "OIP.jpg",
};

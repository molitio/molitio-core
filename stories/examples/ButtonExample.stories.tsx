// Button.stories.tsx

import React from "react";

import { Story, Meta } from "@storybook/react";
import {
  ButtonExample,
  ButtonExampleProps,
} from "../../public-api";

export default {
  title: "button example",
  component: ButtonExample,
  args: {
    props: {
      primary: true,
      label: "Example Button",
    },
  },
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonExampleProps> = (args) => <ButtonExample {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  props: {
    primary: true,
    label: "Button",
  },
};

Secondary.args = {
  props: {
    primary: false,
    label: "Secondary Button",
  },
};

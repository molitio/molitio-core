import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  CenterDisplay,
  CirclePattern,
  CirclePatternProps,
} from "@molitio/ui-core";

import {} from "@molitio/ui-core";

const storyArgs: CirclePatternProps = {
  r: 180,
  strokeWidth: 5,
  outerRimCount: 7,
};

const meta: Meta = {
  title: "molitio-core/SVG/Circle Pattern",
  component: CirclePattern,
};

export default meta;

const Template: Story<CirclePatternProps> = (args) => (
  <CenterDisplay>
    <CirclePattern {...args} />;
  </CenterDisplay>
);

export const CirclePatternComponent = Template.bind({});
CirclePatternComponent.args = {
  ...storyArgs,
};

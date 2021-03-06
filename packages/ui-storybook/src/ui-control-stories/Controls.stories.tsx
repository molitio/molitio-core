import React from "react";
import { Story, Meta } from "@storybook/react";
import { ThemeNameTags } from "@molitio/system-schema";
import {
  CenterDisplay,
  DynamicButton,
  StyledThemeContextProvider,
} from "@molitio/ui-core";

const buttonArgs = {
  themeName: ThemeNameTags.BLACK_YELLOW,
};

const meta: Meta = {
  title: "molitio-core/Controls/Buttons",
  component: DynamicButton,
  argTypes: {
    themeName: {
      control: {
        type: "select",
        options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA],
      },
    },
  },
};

export default meta;

const TemplateRounded: Story = (args) => (
  <StyledThemeContextProvider themeName={args.themeName}>
    <CenterDisplay>
      <DynamicButton styleVariant="btn-rounded" label="DO CLICK ME">
        Click Me!
      </DynamicButton>
    </CenterDisplay>
  </StyledThemeContextProvider>
);

export const RoundedButton = TemplateRounded.bind({});
RoundedButton.args = { ...buttonArgs };

const TemplateRectangle: Story = (args) => (
  <StyledThemeContextProvider themeName={args.themeName}>
    <CenterDisplay>
      <DynamicButton styleVariant="btn-rectangle">Click Me!</DynamicButton>
    </CenterDisplay>
  </StyledThemeContextProvider>
);

export const RectangleButton = TemplateRectangle.bind({});
RectangleButton.args = { ...buttonArgs };

import React from "react";
import { Story, Meta } from "@storybook/react";
import { LandingPage } from "@molitio/ui-core";

const meta: Meta = {
  title: "molitio-core/Pages/Landing Page",
  component: LandingPage,
};

export default meta;

const Template: Story = () => (
  <LandingPage pageTitle="Landing Page">
    <img
      width="1024"
      alt="Girasoli in Mugello"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Girasoli_in_Mugello.jpg/1024px-Girasoli_in_Mugello.jpg"
    />
  </LandingPage>
);

export const DefaultLandingPage = Template.bind({});
DefaultLandingPage.parameters = {
  controls: { hideNoControlsWarning: true },
};

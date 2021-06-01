// YourComponent.stories.tsx

import React, { ComponentProps } from "react";

import { Story } from "@storybook/react";

import { PagedMenuComponent } from "../../public-api";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Paged Menu",
  component: PagedMenuComponent,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof PagedMenuComponent>> = (args) => (
  <PagedMenuComponent />
);

export const PagedMenu = Template.bind({});
PagedMenu.args = {
  /*👇 The args you need here will depend on your component */
};

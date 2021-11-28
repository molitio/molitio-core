import React from "react";

import { Story, Meta } from "@storybook/react";

import {
  PagedMenuComponent,
  MenuPageData,
  MenuPageDataCollection,
} from "./index";

const defaultArgs = new Map<string, MenuPageData>([
  [
    "string",
    {
      pageName: "example page",
      menuItems: [
        {
          data: {
            id: "random2",
            name: "expample menu item",
            imageUrl: "",
            description: "best item in town",
          },
        },
      ],
    },
  ],
]);

const meta: Meta = {
  title: "Paged Menu",
  component: PagedMenuComponent,
  args: {
    menuPages: defaultArgs,
  },
};

export default meta;

const Template: Story<MenuPageDataCollection> = (args) => (
  <PagedMenuComponent {...args} />
);

export const PagedMenu = Template.bind({});

PagedMenu.args = {
  menuPages: defaultArgs,
};
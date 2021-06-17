import React from "react";

import { Story, Meta } from "@storybook/react";

import { MenuItem } from "ui-paged-menu/interface/IPagedMenu";
import { PagedMenuItemComponent } from "ui-paged-menu/component/PagedMenu";

const defaultArgs: MenuItem = {
  data: {
    id: "random2",
    name: "expample menu item",
    imageUrl: "",
    description: "best item in town",
  },
};

const meta: Meta = {
  title: "Paged Menu Item",
  component: PagedMenuItemComponent,
  args: defaultArgs,
};

export default meta;

const Template: Story<MenuItem> = (args) => (
  <PagedMenuItemComponent {...args} />
);

export const PagedMenuItem = Template.bind({});
PagedMenuItem.args = {
  data: defaultArgs.data,
};

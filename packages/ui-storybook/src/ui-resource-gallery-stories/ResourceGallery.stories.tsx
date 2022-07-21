import React from "react";
import { Story, Meta } from "@storybook/react";
import { Resource, Category } from "@molitio/system-schema";
import {
  AppShell,
  ResourceGalleryPage,
  ResourceGalleryProps,
} from "@molitio/ui-core";

import { fillCategories } from "../mock/mockData";

const storyArgs: ResourceGalleryProps = {
  gallery: { name: "Galéria", categories: fillCategories() },
};

const meta: Meta = {
  title: "molitio-core/Components/Resource Gallery",
  component: ResourceGalleryPage,
  args: {
    ...storyArgs,
  },
};

export default meta;

const Template: Story = (args) => (
  <AppShell applyGlobalStyleRules>
    <ResourceGalleryPage gallery={args.gallery}></ResourceGalleryPage>
  </AppShell>
);

export const PaintingGalleryPage = Template.bind({});
PaintingGalleryPage.parameters = {
  controls: { hideNoControlsWarning: true },
};

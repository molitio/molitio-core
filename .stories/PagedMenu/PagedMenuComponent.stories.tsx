// YourComponent.stories.tsx

import React from 'react';

import { Story, Meta } from '@storybook/react';

import { MenuPageData, PagedMenuComponent } from '../index';

//👇 This default export determines where your story goes in the story list
const meta: Meta = {
  title: 'Paged Menu',
  component: PagedMenuComponent,
  args: {
    data: {
      pageName: 'page example',
      menuItems: [
        {
          id: 'random1',
          name: 'example menu item',
        },
      ],
    },
  },
};

export default meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<MenuPageData> = args => <PagedMenuComponent {...args} />;

export const PagedMenu = Template.bind({});

PagedMenu.args = {
  data: {
    pageName: 'page example',
    menuItems: [
      {
        id: 'random1',
        name: 'example menu item',
      },
    ],
  },
  /*👇 The args you need here will depend on your component */
};

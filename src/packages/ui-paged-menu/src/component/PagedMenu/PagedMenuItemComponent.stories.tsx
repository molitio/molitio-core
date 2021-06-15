// YourComponent.stories.tsx

import React from 'react';

import { Story } from '@storybook/react';

import { MenuItem, PagedMenuItemComponent } from '../../../../../.stories/index';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Paged Menu Item',
  component: PagedMenuItemComponent,
  args: {
    data: {
      id: 'random2',
      name: 'expample menu item',
      description: 'best item in town',
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template: Story<MenuItem> = args => <PagedMenuItemComponent {...args} />;

export const PagedMenuItem = Template.bind({});
PagedMenuItem.args = {
  /*👇 The args you need here will depend on your component */
};

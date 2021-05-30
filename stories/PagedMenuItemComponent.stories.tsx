// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { PagedMenuItemComponent } from '../.storybook/src/components/PagedItemMenu/PagedMenuItemComponent';

//👇 This default export determines where your story goes in the story list
export default {
  title: 'pagedMenu',
  component: PagedMenuItemComponent,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof PagedMenuItemComponent>> = (args) => <PagedMenuItemComponent/>;

export const FirstStory = Template.bind({});
FirstStory.args = {
  /*👇 The args you need here will depend on your component */
};

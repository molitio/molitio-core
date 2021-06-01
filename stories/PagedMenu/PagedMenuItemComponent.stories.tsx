// YourComponent.stories.tsx

import React, { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import { PagedMenuItemComponent } from "../../public-api";

//👇 This default export determines where your story goes in the story list
export default {
    title: 'Paged Menu Item',
    component: PagedMenuItemComponent,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof PagedMenuItemComponent>> = (args) => <PagedMenuItemComponent {...args} />;

export const PagedMenuItem = Template.bind({});
PagedMenuItem.args = {
    /*👇 The args you need here will depend on your component */
};

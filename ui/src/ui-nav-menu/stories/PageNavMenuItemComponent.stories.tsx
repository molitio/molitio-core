import React from 'react';

import { Story, Meta } from '@storybook/react';

import { UiNavMenuItem } from 'ui-nav-menu/interface/IUiNavMenu';
import { PagedMenuItemComponent } from 'ui-nav-menu';

const defaultArgs: UiNavMenuItem = {
    pathSegment: '/first',
    itemName: 'first',
};

const meta: Meta = {
    title: 'Paged Menu Item',
    component: PagedMenuItemComponent,
    args: defaultArgs,
};

export default meta;

const Template: Story<UiNavMenuItem> = (args) => <PagedMenuItemComponent {...args} />;

export const PagedMenuItem = Template.bind({});
PagedMenuItem.args = {
    itemName: defaultArgs.itemName,
    pathSegment: defaultArgs.pathSegment,
};

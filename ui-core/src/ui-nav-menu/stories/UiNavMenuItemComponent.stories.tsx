import React from 'react';

import { Story, Meta } from '@storybook/react';

import { UiNavMenuItem } from 'ui-core-models/IUiNavMenu';
import { UiNavMenuItemComponent } from '../../index';

const navMenuItemArgs: UiNavMenuItem = {
    pathSegment: '/first',
    itemName: 'first',
    menuItems: [{ pathSegment: '/secound', itemName: 'secound' }],
};

const meta: Meta = {
    title: 'molitio-core/Nav Menu/Menu Item',
    component: UiNavMenuItemComponent,
};

export default meta;

const Template: Story<UiNavMenuItem> = (args) => <UiNavMenuItemComponent {...args} />;

export const NavMenuItem = Template.bind({});
NavMenuItem.args = {
    ...navMenuItemArgs,
};

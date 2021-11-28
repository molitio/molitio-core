import React from 'react';

import { Story, Meta } from '@storybook/react';

import { UiNavMenuItem } from 'ui-nav-menu/interface/IUiNavMenu';
import { UiNavMenuItemComponent } from '../../index';

const defaultArgs: UiNavMenuItem = {
    pathSegment: '/first',
    itemName: 'first',
};

const meta: Meta = {
    title: 'molitio-core/Nav/Menu Item',
    component: UiNavMenuItemComponent,
    args: defaultArgs,
};

export default meta;

const Template: Story<UiNavMenuItem> = (args) => <UiNavMenuItemComponent {...args} />;

export const NavMenuItem = Template.bind({});
NavMenuItem.args = {
    itemName: defaultArgs.itemName,
    pathSegment: defaultArgs.pathSegment,
};

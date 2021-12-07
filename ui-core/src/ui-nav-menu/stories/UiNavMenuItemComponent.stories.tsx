import React from 'react';

import { Story, Meta } from '@storybook/react';

import { ItemData } from 'ui-core-models/IUiNavMenu';
import { UiNavMenuItemComponent } from '../index';
import { UiNavMenuItemProps } from 'ui-core-models/interface/UiNavMenuItemProps';

const navMenuItemArgs: UiNavMenuItemProps = {
    data: {
        pathSegment: '/first',
        itemName: 'first',
        menuItems: [
            {
                pathSegment: '/secound',
                itemName: 'secound',
                menuItems: [
                    {
                        pathSegment: '/third',
                        itemName: 'third',
                    },
                ],
            },
        ],
    },
};

const meta: Meta = {
    title: 'molitio-core/Nav Menu/Menu Item',
    component: UiNavMenuItemComponent,
};

export default meta;

const Template: Story<UiNavMenuItemProps> = (args) => <UiNavMenuItemComponent {...args} />;

export const NavMenuItem = Template.bind({});
NavMenuItem.args = {
    ...navMenuItemArgs,
};

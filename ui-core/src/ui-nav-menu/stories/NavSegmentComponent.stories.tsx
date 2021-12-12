import React from 'react';

import { Story, Meta } from '@storybook/react';

import { NavMenuComponent, NavSegmentComponent } from '../../index';
import { NavSegmentProps } from '../../index';

const navMenuItemArgs: NavSegmentProps = {
    data: {
        pathSegment: '/first',
        itemName: 'first',
        navSegments: [
            {
                pathSegment: '/secound',
                itemName: 'secound',
                navSegments: [
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
    component: NavMenuComponent,
};

export default meta;

const Template: Story<NavSegmentProps> = (args) => <NavSegmentComponent {...args} />;

export const NavMenuItem = Template.bind({});
NavMenuItem.args = {
    ...navMenuItemArgs,
};

import React from 'react';

import { Story, Meta } from '@storybook/react';

import { UiNavMenuComponent } from '../../index';
import { UiNavMenuPageData, UiNavMenuPageDataCollection } from 'ui-nav-menu/interface/IUiNavMenu';

const defaultArgs = new Map<string, UiNavMenuPageData>([
    [
        'idtag',
        {
            pageName: 'about page',
            pathSegment: '/about',
            menuItems: [
                {
                    pathSegment: '/first',
                    itemName: 'first',
                },
            ],
        },
    ],
]);

const meta: Meta = {
    title: 'molitio-core/Nav/Menu',
    component: UiNavMenuComponent,
    args: {
        menuPages: defaultArgs,
    },
};

export default meta;

const Template: Story<UiNavMenuPageDataCollection> = (args) => <UiNavMenuComponent {...args} />;

export const NavMenu = Template.bind({});

NavMenu.args = {
    menuPages: defaultArgs,
};

import React from 'react';

import { Story, Meta } from '@storybook/react';

import { UiNavMenuComponent } from '../../index';
import { UiNavMenuPageDataCollection } from 'ui-core-models/IUiNavMenu';

const navMenuPageDataArgs: UiNavMenuPageDataCollection = {
    pageDataCollectionTag: 'basicNavMenu01',
    pageDataCollection:new Map([
        [
            'idtag',
            {
                pageName: 'about page',
                pathSegment: '/about',
                menuItems: [
                    {
                        pathSegment: '/first',
                        itemName: 'first',
                        menuItems: [
                            {
                                pathSegment: '/secound',
                                itemName: 'secound',
                            },
                        ],
                    },
                ],
            },
        ],
    ]),
};

const meta: Meta = {
    title: 'molitio-core/Nav Menu/Menu',
    component: UiNavMenuComponent,
    args: {
        ...navMenuPageDataArgs,
    },
};

export default meta;

const Template: Story<UiNavMenuPageDataCollection> = (args) => <UiNavMenuComponent {...args} />;

export const NavMenu = Template.bind({});
NavMenu.args = {
    ...navMenuPageDataArgs,
};



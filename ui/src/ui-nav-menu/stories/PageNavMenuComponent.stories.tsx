import React from 'react';

import { Story, Meta } from '@storybook/react';

import { PagedMenuComponent } from 'ui-nav-menu';
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
    title: 'Paged Menu',
    component: PagedMenuComponent,
    args: {
        menuPages: defaultArgs,
    },
};

export default meta;

const Template: Story<UiNavMenuPageDataCollection> = (args) => <PagedMenuComponent {...args} />;

export const PagedMenu = Template.bind({});

PagedMenu.args = {
    menuPages: defaultArgs,
};

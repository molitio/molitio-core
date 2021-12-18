import { Story, Meta } from '@storybook/react';

import { NavMenuComponentProps } from '../../index';
import { NavMenuComponent } from '../../index';

const navMenuPageDataArgs: NavMenuComponentProps = {
    data: {
        pageCollectionTag: 'basicNavMenu01',
        pageCollection: new Map([
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
                                    menuItems: [
                                        {
                                            pathSegment: '/third',
                                            itemName: 'third',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        ]),
    },
};

const meta: Meta = {
    title: 'molitio-core/Nav Menu/Menu',
    component: NavMenuComponent,
    args: {
        ...navMenuPageDataArgs,
    },
};

export default meta;

const Template: Story<NavMenuComponentProps> = (args) => <NavMenuComponent {...args} />;

export const NavMenu = Template.bind({});
NavMenu.args = {
    ...navMenuPageDataArgs,
};

import { Story, Meta } from '@storybook/react';

import { NavMenuComponentProps } from '../../index';
import { NavMenuComponent } from '../../index';

const storyArgs: NavMenuComponentProps = {
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
    title: 'molitio-core/Components/Nav Menu',
    component: NavMenuComponent,
    args: {
        ...storyArgs,
    },
};

export default meta;

const Template: Story<NavMenuComponentProps> = (args) => <NavMenuComponent {...args} />;

export const NavMenuStory = Template.bind({});
NavMenuStory.args = {
    ...storyArgs,
};

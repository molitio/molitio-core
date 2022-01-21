import { Story, Meta } from '@storybook/react';

import { NavMenuComponentProps, TNavSegment } from '../../index';
import { NavMenuComponent } from '../../index';

import { NavSegmentComponent } from '../../index';
import { NavSegmentProps } from '../../index';

const navSegmentArgs: TNavSegment[] = [
    {
        pathSegment: '/first',
        itemName: 'first',
        navSegments: [
            {
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
        ],
    },
];

const navMenuArgs: NavMenuComponentProps = {
    pageCollection: {
        tag: 'basicNavMenu01',
        pageCollection: new Map([
            [
                'idtag',
                {
                    pageName: 'about page',
                    pathSegment: '/about',
                    navSegments: navSegmentArgs,
                },
            ],
        ]),
    },
};

const meta: Meta = {
    title: 'molitio-core/Components/Nav Menu',
    component: NavMenuComponent,
    args: {
        ...navMenuArgs,
    },
};

export default meta;

const NavMenuTemplate: Story<NavMenuComponentProps> = (args) => <NavMenuComponent {...args} />;

export const NavMenuStory = NavMenuTemplate.bind({});
NavMenuStory.args = {
    ...navMenuArgs,
};

const NavSegmentTemplate: Story<NavSegmentProps> = (args) => <NavSegmentComponent {...args} />;

export const NavSegmentStory = NavSegmentTemplate.bind({});
NavSegmentStory.args = {
    navSegment: {
        ...navSegmentArgs[0],
    },
};

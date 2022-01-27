import { Story, Meta } from '@storybook/react';
import { ThemeNameTags } from 'ui-core-models';
import { ThemeContextProvider, ThemeProps } from 'ui-theme-context';

import { NavMenuComponentProps, TNavSegment } from '../../index';
import { NavMenuComponent } from '../../index';

import { NavSegmentComponent } from '../../index';
import { NavSegmentProps } from '../../index';

const servicesPageArgs: TNavSegment[] = [
    {
        pathSegment: '/services',
        itemName: 'Services',
        navSegments: [
            {
                pathSegment: '/web',
                itemName: 'web',
            },
            {
                pathSegment: '/design',
                itemName: 'design',
            },
        ],
    },
];

const aboutPageArgs: TNavSegment[] = [
    {
        pathSegment: '/about',
        itemName: 'about',
        navSegments: [
            {
                pathSegment: '/team',
                itemName: 'team',
                navSegments: [
                    {
                        pathSegment: '/sanyi',
                        itemName: 'Sanyi',
                        navSegments: [
                            {
                                pathSegment: '/motivation',
                                itemName: 'mission',
                            },
                        ],
                    },
                    {
                        pathSegment: '/Peti',
                        itemName: 'Peti',
                        navSegments: [
                            {
                                pathSegment: '/motivation',
                                itemName: 'mission',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const navMenuArgs: NavMenuComponentProps & ThemeProps = {
    pageCollection: {
        tag: 'basicNavMenu01',
        siteDisplayName: 'Test Site',
        pageCollection: new Map([
            [
                'aboutIdTag',
                {
                    pageName: 'About',
                    pathSegment: '/about',
                    navSegments: servicesPageArgs,
                },
            ],
            [
                'servicesIdTag',
                {
                    pageName: 'Services',
                    pathSegment: '/services',
                    navSegments: aboutPageArgs,
                },
            ],
            [
                'contactIdTag',
                {
                    pageName: 'Contact',
                    pathSegment: '/contact',
                },
            ],
        ]),
    },
    themeName: ThemeNameTags.BLACK_YELLOW,
};

const meta: Meta = {
    title: 'molitio-core/Components/Nav Menu',
    component: NavMenuComponent,
    args: {
        ...navMenuArgs,
    },
    argTypes: {
        themeName: {
            control: { type: 'select', options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA] },
        },
    },
};

export default meta;

const NavMenuTemplate: Story<NavMenuComponentProps & ThemeProps> = (args) => (
    <ThemeContextProvider themeName={args.themeName}>
        <NavMenuComponent {...args} />
    </ThemeContextProvider>
);

export const NavMenuStory = NavMenuTemplate.bind({});
NavMenuStory.args = {
    ...navMenuArgs,
};

const NavSegmentTemplate: Story<NavSegmentProps & ThemeProps> = (args) => (
    <ThemeContextProvider themeName={args.themeName}>
        <NavSegmentComponent {...args} />;
    </ThemeContextProvider>
);

export const NavSegmentStory = NavSegmentTemplate.bind({});
NavSegmentStory.args = {
    navSegment: {
        ...servicesPageArgs[0],
    },
};

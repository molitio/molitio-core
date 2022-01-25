import { Story, Meta } from '@storybook/react';
import { ThemeNameTags } from 'ui-core-models';
import { ThemeContextProvider, ThemeProps } from 'ui-theme-context';

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

const navMenuArgs: NavMenuComponentProps & ThemeProps = {
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
        ...navSegmentArgs[0],
    },
};

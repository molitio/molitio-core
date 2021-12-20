import { Story, Meta } from '@storybook/react';

import { NavSegmentComponent } from '../../index';
import { NavSegmentProps } from '../../index';

const storyArgs: NavSegmentProps = {
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
    title: 'molitio-core/Components/Nav Menu Segment',
    component: NavSegmentComponent,
};

export default meta;

const Template: Story<NavSegmentProps> = (args) => <NavSegmentComponent {...args} />;

export const NavSegmentStory = Template.bind({});
NavSegmentStory.args = {
    ...storyArgs,
};

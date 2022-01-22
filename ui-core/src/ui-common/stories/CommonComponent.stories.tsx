import { Story, Meta } from '@storybook/react';
import { CenterDisplay, ComponentGroup, ComponentGroupProps } from 'ui-common';
import { ComponentGroupTags } from 'ui-core-models';
import { LogoFreshPrintSvg } from 'ui-svg';

import { NavMenuComponentProps, TNavSegment } from '../../index';
import { NavMenuComponent } from '../../index';

import { NavSegmentComponent } from '../../index';
import { NavSegmentProps } from '../../index';

const componentGroupArgs: ComponentGroupProps = {
    groupingType: ComponentGroupTags.HORIZONTAL_FLEX,
};

const meta: Meta = {
    title: 'molitio-core/Components/Common',
    component: ComponentGroup,
 /*    args: {
        ...componentGroupArgs,
    }, */
    argTypes: {
    
        positioning: {
            control: { type: 'select', options: [ComponentGroupTags.GRID, ComponentGroupTags.VERTICAL_FLEX,ComponentGroupTags.HORIZONTAL_FLEX] },
        },
    },
};

export default meta;

const ComponentGroupTemplate: Story<ComponentGroupProps> = (args) => (
    <CenterDisplay>
        <ComponentGroup {...args}>
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
        </ComponentGroup>
    </CenterDisplay>
);

export const ComponentGroupStory = ComponentGroupTemplate.bind({});
ComponentGroupStory.args = {
    ...componentGroupArgs,
};

import { Story, Meta } from '@storybook/react';
import { CenterDisplay, ComponentGroup, ComponentGroupProps } from 'ui-common';
import { ComponentGroupTags } from 'ui-core-models';
import { LogoFreshPrintSvg } from 'ui-svg';

const meta: Meta = {
    title: 'molitio-core/Components/Common',
    component: ComponentGroup,
};

export default meta;

const ComponentGroupTemplate: Story<ComponentGroupProps> = (args) => (
    <CenterDisplay>
        <ComponentGroup {...args}>
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
        </ComponentGroup>
    </CenterDisplay>
);

export const ComponentGroupStory = ComponentGroupTemplate.bind({});
ComponentGroupStory.args = {
    groupingType: ComponentGroupTags.HORIZONTAL_FLEX,
};

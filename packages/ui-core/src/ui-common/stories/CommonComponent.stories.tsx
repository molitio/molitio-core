import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ComponentCollectionTags, ThemeNameTags } from '@molitio/system-schema';
import { CenterDisplay, ComponentGroup, ComponentGroupProps } from 'ui-common';
import { StyledThemeContextProvider, StyledThemeProps } from 'ui-style-service';
import { LogoFreshPrintSvg } from 'ui-svg';

const navMenuArgs: ComponentGroupProps & StyledThemeProps = {
    groupingType: ComponentCollectionTags.HORIZONTAL_FLEX,
    themeName: ThemeNameTags.BLACK_YELLOW,
};

const meta: Meta = {
    title: 'molitio-core/Components/Common',
    component: ComponentGroup,
    argTypes: {
        groupingType: {
            control: {
                type: 'select',
                options: [
                    ComponentCollectionTags.GRID,
                    ComponentCollectionTags.VERTICAL_FLEX,
                    ComponentCollectionTags.HORIZONTAL_FLEX,
                ],
            },
        },
        themeName: {
            control: { type: 'select', options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA] },
        },
    },
};

export default meta;

const ComponentGroupTemplate: Story<ComponentGroupProps & StyledThemeProps> = (args) => (
    <StyledThemeContextProvider themeName={args.themeName}>
        <CenterDisplay>
            <> {console.log(`inside storybook props: ${args.groupingType}`)}</>
            <ComponentGroup {...args}>
                <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            </ComponentGroup>
        </CenterDisplay>
    </StyledThemeContextProvider>
);

export const ComponentGroupStory = ComponentGroupTemplate.bind({});

ComponentGroupStory.args = {
    ...navMenuArgs,
};

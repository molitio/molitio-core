import { Story, Meta } from '@storybook/react';
import { CenterDisplay } from 'ui-common';
import { DynamicButton } from 'ui-controls';
import { ThemeNameTags } from 'ui-core-schema';
import { StyledThemeContextProvider } from 'ui-style-service';

const buttonArgs = {
    themeName: ThemeNameTags.BLACK_YELLOW,
};

const meta: Meta = {
    title: 'molitio-core/Controls/Buttons',
    component: DynamicButton,
    argTypes: {
        themeName: {
            control: { type: 'select', options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA] },
        },
    },
};

export default meta;

const TemplateRounded: Story = (args) => (
    <StyledThemeContextProvider themeName={args.themeName}>
        <CenterDisplay>
            <DynamicButton styleVariant="btn-rounded" label={`variant: btn-rounded`}></DynamicButton>
        </CenterDisplay>
    </StyledThemeContextProvider>
);

export const RoundedButton = TemplateRounded.bind({});
RoundedButton.args = { ...buttonArgs };

const TemplateRectangle: Story = (args) => (
    <StyledThemeContextProvider themeName={args.themeName}>
        <CenterDisplay>
            <DynamicButton styleVariant="btn-rectangle" label={`variant: btn-rectangle`}>
                test text
            </DynamicButton>
        </CenterDisplay>
    </StyledThemeContextProvider>
);

export const RectangleButton = TemplateRectangle.bind({});
RectangleButton.args = { ...buttonArgs };

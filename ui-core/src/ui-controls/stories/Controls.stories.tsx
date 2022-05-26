import { Story, Meta } from '@storybook/react';
import { CenterDisplay } from 'ui-common';
import { Button } from 'ui-controls';
import { ThemeNameTags } from 'ui-core-models';
import { StyledThemeContextProvider } from 'ui-context';

const buttonArgs = {
    themeName: ThemeNameTags.BLACK_YELLOW,
};

const meta: Meta = {
    title: 'molitio-core/Controls/Buttons',
    component: Button,
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
            <Button styleVariant="btn-rounded" label={`variant: btn-rounded`}></Button>
        </CenterDisplay>
    </StyledThemeContextProvider>
);

export const RoundedButton = TemplateRounded.bind({});
RoundedButton.args = { ...buttonArgs };

const TemplateRectangle: Story = (args) => (
    <StyledThemeContextProvider themeName={args.themeName}>
        <CenterDisplay>
            <Button styleVariant="btn-rectangle" label={`variant: btn-rectangle`}>
                test text
            </Button>
        </CenterDisplay>
    </StyledThemeContextProvider>
);

export const RectangleButton = TemplateRectangle.bind({});
RectangleButton.args = { ...buttonArgs };

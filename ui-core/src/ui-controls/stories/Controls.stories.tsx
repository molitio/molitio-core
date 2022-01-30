import { Story, Meta } from '@storybook/react';
import { CenterDisplay } from 'ui-common';
import { Button } from 'ui-controls';
import { StyleVariant, ThemeNameTags } from 'ui-core-models';
import { ThemeContextProvider } from 'ui-theme-context';

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
    <ThemeContextProvider themeName={args.themeName}>
        <CenterDisplay>
            <Button styleVariant={StyleVariant.ROUNDED} label={`variant: ${StyleVariant.ROUNDED}`}></Button>
        </CenterDisplay>
    </ThemeContextProvider>
);

export const RoundedButton = TemplateRounded.bind({});
RoundedButton.args = { ...buttonArgs };

const TemplateRectangle: Story = (args) => (
    <ThemeContextProvider themeName={args.themeName}>
        <CenterDisplay>
            <Button styleVariant={StyleVariant.RECTANGLE} label={`variant: ${StyleVariant.RECTANGLE}`}>
                test text
            </Button>
        </CenterDisplay>
    </ThemeContextProvider>
);

export const RectangleButton = TemplateRectangle.bind({});
RectangleButton.args = { ...buttonArgs };
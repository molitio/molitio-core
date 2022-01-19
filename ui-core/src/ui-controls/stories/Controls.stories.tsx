import { Story, Meta } from '@storybook/react';
import { CenterDisplay } from 'ui-common';
import { Button } from 'ui-controls';
import { StyleVariant } from 'ui-core-models';

const meta: Meta = {
    title: 'molitio-core/Controls/Buttons',
    component: Button,
};

export default meta;

const TemplateRounded: Story = () => (
    <CenterDisplay>
        <Button styleVariant={StyleVariant.ROUNDED}>test text</Button>
    </CenterDisplay>
);

export const RoundedButton = TemplateRounded.bind({});
RoundedButton.args = {};

const TemplateRectangle: Story = () => (
    <CenterDisplay>
        <Button styleVariant={StyleVariant.RECTANGLE}>test text</Button>
    </CenterDisplay>
);

export const RectangleButton = TemplateRectangle.bind({});
RectangleButton.args = {};

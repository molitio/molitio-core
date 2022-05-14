import { Story, Meta } from '@storybook/react';
import { CenterDisplay } from 'ui-common';

import { CirclePattern, CirclePatternProps } from 'ui-svg';

const storyArgs: CirclePatternProps = {
    r: 180,
    strokeWidth: 5,
    outerRimCount: 7,
};

const meta: Meta = {
    title: 'molitio-core/SVG/Circle Pattern',
    component: CirclePattern,
};

export default meta;

const Template: Story<CirclePatternProps> = (args) => (
    <CenterDisplay>
        <CirclePattern {...args} />;
    </CenterDisplay>
);

export const CirclePatternComponent = Template.bind({});
CirclePatternComponent.args = {
    ...storyArgs,
};

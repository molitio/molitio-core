import { Story, Meta } from '@storybook/react';

import { CirclePattern } from '../../index';
import { CirclePatternProps } from '../../index';

const storyArgs: CirclePatternProps = {
    data: {
        r: 60,
    },
};

const meta: Meta = {
    title: 'molitio-core/SVG/Circle Pattern',
    component: CirclePattern,
};

export default meta;

const Template: Story<CirclePatternProps> = (args) => <CirclePattern {...args} />;

export const storyComponent = Template.bind({});
storyComponent.args = {
    ...storyArgs,
};

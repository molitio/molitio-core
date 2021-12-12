import React from 'react';

import { Story, Meta } from '@storybook/react';

import { CirclePattern } from '../../index';
import { CirclePatternProps } from '../../index';

const circlePatternArgs: CirclePatternProps = {
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

export const CirclePatternComponent = Template.bind({});
CirclePatternComponent.args = {
    ...circlePatternArgs,
};
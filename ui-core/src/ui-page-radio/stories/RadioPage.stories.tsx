import React from 'react';

import { Story, Meta } from '@storybook/react';

import { RadioPage, UniversalRadioTags } from '../../index';
import { RadioPageProps } from '../../index';

const storyArgs: RadioPageProps = {
    data: {
        playUrl: 'TOADD: url',
        assetUrls: new Map([[UniversalRadioTags.BACKGROUND_IMAGE, 'TOADD: url']]),
    },
};

const meta: Meta = {
    title: 'molitio-core/Radio/Radio Page',
    component: RadioPage,
};

export default meta;

const Template: Story<RadioPageProps> = (args) => <RadioPage {...args} />;

export const storyComponent = Template.bind({});
storyComponent.args = {
    ...storyArgs,
};

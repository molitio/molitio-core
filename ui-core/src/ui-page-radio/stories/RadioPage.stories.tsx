import { Story, Meta } from '@storybook/react';

import { RadioPage, UniversalRadioTags } from '../../index';
import { RadioPageProps } from '../../index';

const fillAssets = () => {
    const assetsCollection = new Map<string, string>();
    assetsCollection.set(
        UniversalRadioTags.BACKGROUND_IMAGE,
        'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/background.png',
    );

    return assetsCollection;
};

const storyArgs: RadioPageProps = {
    data: {
        playUrl:
            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
        assetUrls: fillAssets(),
        backgroundImage: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/background.png'
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

import { Story, Meta } from '@storybook/react';

import { RadioPage, RadioPageProps } from 'ui-page-radio';
import { UniversalRadioTags } from 'ui-core-models';

const fillAssets = () => {
    const assetsCollection = new Map<string, string>();
    assetsCollection.set(
        UniversalRadioTags.BACKGROUND_IMAGE,
        'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/background.png',
    );

    return assetsCollection;
};

const storyArgs: RadioPageProps = {
    radio: {
        playUrl:
            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
        assetUrls: fillAssets(),
        backgroundImage:
            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/background.png',
    },
};

const meta: Meta = {
    title: 'molitio-core/Pages/Radio Page',
    component: RadioPage,
};

export default meta;

const Template: Story<RadioPageProps> = (args) => <RadioPage {...args} />;

export const RadioPageStory = Template.bind({});
RadioPageStory.args = {
    ...storyArgs,
};

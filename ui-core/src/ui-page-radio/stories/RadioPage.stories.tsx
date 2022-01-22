import { Story, Meta } from '@storybook/react';

import { RadioPage, RadioPageProps } from 'ui-page-radio';
import { ThemeNameTags, UniversalRadioTags } from 'ui-core-models';
import { ThemeContextProvider, ThemeProps } from 'ui-theme-context';

const fillAssets = () => {
    const assetsCollection = new Map<string, string>();
    assetsCollection.set(
        UniversalRadioTags.BACKGROUND_IMAGE,
        'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/background.png',
    );

    return assetsCollection;
};

const storyArgs: RadioPageProps & ThemeProps = {
    themeName: ThemeNameTags.BLACK_YELLOW,
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
    argTypes: {
        table: {
            summary: 'ThemeNameTags',
            defaultValue: { summary: `${ThemeNameTags.BLACK_YELLOW}` },
        },
        themeName: {
            control: { type: 'select', options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA] },
        },
    },
};

export default meta;

const Template: Story<RadioPageProps & ThemeProps> = (args) => (
    <ThemeContextProvider themeName={args.themeName}>
        <RadioPage {...args} />
    </ThemeContextProvider>
);

export const RadioPageStory = Template.bind({});
RadioPageStory.args = {
    ...storyArgs,
};

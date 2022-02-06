import { Story, Meta } from '@storybook/react';
import { RadioPage, RadioPageProps } from 'ui-page';
import { ComponentGroupTags, ThemeNameTags } from 'ui-core-models';
import { StyledThemeProps } from 'ui-context';
import { LogoFreshPrintSvg, LogoSenseRadioSvg, PlayButtonSvg, SpeakerBackgroundSvg } from 'ui-svg';
import { ComponentGroup, AppShell } from 'ui-common';
import { StripedBackground } from 'ui-background';

const storyArgs: RadioPageProps & StyledThemeProps = {
    themeName: ThemeNameTags.BLACK_YELLOW,
    radio: {
        playUrl:
            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
    },
    playButton: (
        <SpeakerBackgroundSvg
            dimensions={{ width: '60vw' }}
            centerItem={<PlayButtonSvg dimensions={{ width: '5vw'}} />}
        ></SpeakerBackgroundSvg>
    ),
    background: <StripedBackground />,
    logo: <LogoSenseRadioSvg dimensions={{ width: '30vw' }} />,
    socialButtons: [
        <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX}>
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
        </ComponentGroup>,
    ],
};

const meta: Meta = {
    title: 'molitio-core/Pages/Radio Page',
    component: RadioPage,
    argTypes: {
        themeName: {
            control: { type: 'select', options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA] },
        },
    },
};

export default meta;

const Template: Story<RadioPageProps & StyledThemeProps> = (args) => (
    <AppShell themeName={ThemeNameTags.BLACK_YELLOW}>
        <RadioPage {...args}></RadioPage>
    </AppShell>
);

export const RadioPageStory = Template.bind({});
RadioPageStory.args = {
    ...storyArgs,
};
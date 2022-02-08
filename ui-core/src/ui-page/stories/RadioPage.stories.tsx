import { Story, Meta } from '@storybook/react';
import { RadioPage, RadioPageProps } from 'ui-page';
import { ComponentGroupTags, StyleVariant, ThemeNameTags } from 'ui-core-models';
import { StyledThemeProps } from 'ui-context';
import {
    LogoFreshPrintSvg,
    LogoLedArtSvg,
    LogoNestMediaSvg,
    LogoSenseRadioSvg,
    PlayButtonSvg,
    SocialButtonsSvg,
    SpeakerBackgroundSvg,
} from 'ui-svg';
import { ComponentGroup, AppShell } from 'ui-common';
import { StripedBackground } from 'ui-background';
import { Button } from 'ui-controls';

const storyArgs: RadioPageProps & StyledThemeProps = {
    themeName: ThemeNameTags.BLACK_YELLOW,
    radio: {
        playUrl:
            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
    },
    playButton: (
        <SpeakerBackgroundSvg
            dimensions={{ height: '64vh' }}
            centerItem={<PlayButtonSvg dimensions={{ height: '25%' }} />}
        ></SpeakerBackgroundSvg>
    ),
    logo: <LogoSenseRadioSvg dimensions={{ height: '14vh' }} />,
    socialButtons: [
        <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX} dimensions={{ height: '6vh', width: '24vw' }}>
            <SocialButtonsSvg />
        </ComponentGroup>,
    ],
    background: <StripedBackground />,
    pageFooter: (
        <ComponentGroup
            groupingType={ComponentGroupTags.HORIZONTAL_FLEX}
            dimensions={{ height: '12vh' }}
            itemPadding="15px"
        >
            <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX}>
                <LogoFreshPrintSvg dimensions={{ height: '8vh' }} />
                <LogoLedArtSvg dimensions={{ height: '8vh' }} />
                <LogoNestMediaSvg dimensions={{ height: '8vh' }} />
            </ComponentGroup>
            <ComponentGroup
                groupingType={ComponentGroupTags.VERTICAL_FLEX}
                fontColor="#6D6E72"
                fontSize="0.8rem"
                itemPadding="2px"
            >
                <span>
                    Tel/Viber: +36 30 277 3939
                    <br />
                    Email: hello@radiosense.hu
                </span>
                <span>
                    © 2021 Radio Sense Hungary. All rights reserved.
                    <br />
                    by nestmedia
                </span>
            </ComponentGroup>
            <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX} itemPadding="1rem">
                <Button styleVariant={StyleVariant.ROUNDED}>egy</Button>
                <Button styleVariant={StyleVariant.ROUNDED}>ketto</Button>
            </ComponentGroup>
        </ComponentGroup>
    ),
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

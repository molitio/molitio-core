import React from 'react';
import { Meta, ComponentStory } from '@storybook/react';
import { RadioPage } from 'ui-page';
import { ThemeNameTags } from 'ui-core-models';
import {
    LogoAppStoreSvg,
    LogoFreshPrintSvg,
    LogoGooglePlaySvg,
    LogoLedArtSvg,
    LogoNestMediaSvg,
    LogoSenseRadioSvg,
    SocialButtonsSvg,
    SpeakerBackgroundPlayerSvg,
} from 'ui-svg';
import { AppShell, SpanBlock, DefaultFooter } from 'ui-common';
import { StripedBackground } from 'ui-background';

const meta: Meta = {
    title: 'molitio-core/Pages/Radio Page',
    component: RadioPage,
    argTypes: {
        themeName: {
            control: { type: 'radio', options: [ThemeNameTags.BLACK_YELLOW, ThemeNameTags.TEAM_JAMAICA] },
        },
        applyGlobalStyleRules: { control: { type: 'radio', options: [true, false] } },
    },
    args: {
        themeName: ThemeNameTags.BLACK_YELLOW,
        applyGlobalStyleRules: true,
    },
};

export default meta;

const Template: ComponentStory<typeof AppShell> = (args) => (
    <AppShell {...args}>
        <RadioPage
            radio={{
                playUrl:
                    'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
            }}
            playerElement={<SpeakerBackgroundPlayerSvg />}
            logo={<LogoSenseRadioSvg />}
            socialButtons={
                <SocialButtonsSvg
                    dimensions={{ height: '22pt' }}
                    facebookUrl="https://facebook.com"
                    instagramUrl="https://instagram.com"
                    youtubeUrl="https://youtube.com"
                    externalUrl="https://google.com"
                />
            }
            background={<StripedBackground />}
            externalBackgroundEffect="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/radio_sense_effect.webp"
            pageFooter={
                <DefaultFooter
                    leftColumnElements={[
                        <LogoFreshPrintSvg dimensions={{ height: '8vh' }} />,
                        <LogoLedArtSvg dimensions={{ height: '6vh' }} />,
                        <LogoNestMediaSvg dimensions={{ height: '8vh' }} />,
                    ]}
                    centerColumnElements={[
                        <SpanBlock rem={0.7} color={'secondary'} marginTop={'0.2rem'} center>
                            Tel/Viber: +36 30 277 3939
                            <br />
                            Email: hello@radiosense.hu
                        </SpanBlock>,
                        <SpanBlock rem={0.5} color={'secondary'} marginTop={'0.1rem'} center>
                            © 2022 Radio Sense Hungary. All rights reserved.
                            <br />
                            created by nestmedia
                        </SpanBlock>,
                    ]}
                    rightColumnElements={[
                        <LogoGooglePlaySvg
                            dimensions={{ height: '6vh' }}
                            opacity={0.8}
                            linkUrl="https://play.google.com/store"
                        />,
                        <LogoAppStoreSvg
                            dimensions={{ height: '6vh' }}
                            opacity={0.8}
                            linkUrl="https://www.apple.com/app-store/"
                        />,
                    ]}
                />
            }
        />
    </AppShell>
);

export const RadioPageStory = Template.bind({});
RadioPageStory.args = {
    themeName: ThemeNameTags.BLACK_YELLOW,
    applyGlobalStyleRules: true,
};

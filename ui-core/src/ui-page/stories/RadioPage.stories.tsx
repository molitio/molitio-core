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
                playUrl: 'https://stream1.virtualisan.net/prx/4800/live.mp3',
                //playUrl: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
                preload: 'auto',
            }}
            playerElement={<SpeakerBackgroundPlayerSvg />}
            logo={<LogoSenseRadioSvg dimensions={{ height: '5em' }} />}
            socialButtons={
                <SocialButtonsSvg
                    dimensions={{ height: '2em' }}
                    facebookUrl="https://facebook.com"
                    instagramUrl="https://instagram.com"
                    youtubeUrl="https://youtube.com"
                    externalUrl="https://google.com"
                />
            }
            background={
                <StripedBackground
                    backgroundEffectSrc={
                        'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/radio_sense_effect.webp'
                    }
                />
            }
            //externalBackgroundEffect="https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/radio_sense_effect.webp"
            pageFooter={
                <DefaultFooter
                    leftColumnElements={[
                        <LogoFreshPrintSvg dimensions={{ height: '2em' }} />,
                        <LogoLedArtSvg dimensions={{ height: '2em' }} />,
                        <LogoNestMediaSvg dimensions={{ height: '2em' }} />,
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
                            dimensions={{ height: '2em' }}
                            opacity={0}
                            linkUrl="https://play.google.com/store"
                        />,
                        <LogoAppStoreSvg
                            dimensions={{ height: '2em' }}
                            opacity={0}
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

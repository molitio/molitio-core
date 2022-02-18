import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RadioPage, RadioPageProps } from 'ui-page';
import { ComponentGroupTags, ThemeNameTags } from 'ui-core-models';
import { StyledThemeProps } from 'ui-context';
import {
    LogoAppStoreSvg,
    LogoFreshPrintSvg,
    LogoGooglePlaySvg,
    LogoLedArtSvg,
    LogoListenNowSvg,
    LogoNestMediaSvg,
    LogoSenseRadioSvg,
    PlayButtonSvg,
    SocialButtonsSvg,
    SpeakerBackgroundSvg,
} from 'ui-svg';
import { ComponentGroup, AppShell, SpanBlock } from 'ui-common';
import { StripedBackground } from 'ui-background';

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

const Template: Story<RadioPageProps & StyledThemeProps> = () => (
    <AppShell themeName={ThemeNameTags.BLACK_YELLOW} applyGlobalStyleRules>
        <RadioPage
            radio={{
                playUrl:
                    'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
            }}
            playButton={
                <SpeakerBackgroundSvg
                    dimensions={{ height: '68vh', width: '68vw' }}
                    playAreaIcon={<LogoListenNowSvg dimensions={{ height: '8pt', width: '20pt' }} />}
                    centerItem={<PlayButtonSvg dimensions={{ height: '160t', width: '16pt' }} />}
                ></SpeakerBackgroundSvg>
            }
            logo={<LogoSenseRadioSvg dimensions={{ height: '50pt', width: '100pt' }} />}
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
            pageFooter={
                <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX} dimensions={{ height: '14vh' }}>
                    <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX}>
                        <LogoFreshPrintSvg dimensions={{ height: '8vh' }} />
                        <LogoLedArtSvg dimensions={{ height: '6vh' }} />
                        <LogoNestMediaSvg dimensions={{ height: '8vh' }} />
                    </ComponentGroup>
                    <ComponentGroup groupingType={ComponentGroupTags.VERTICAL_FLEX}>
                        <SpanBlock rem={0.5} color={'secondary'} marginTop={'1rem'} maxContent>
                            Tel/Viber: +36 30 277 3939
                            <br />
                            Email: hello@radiosense.hu
                        </SpanBlock>
                        <SpanBlock rem={0.4} color={'secondary'} marginTop={'0rem'} maxContent>
                            © 2022 Radio Sense Hungary. All rights reserved.
                            <br />
                            Created by nestmedia
                        </SpanBlock>
                    </ComponentGroup>
                    <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX} itemGap="0.5rem">
                        <LogoGooglePlaySvg dimensions={{ height: '6vh' }} opacity={0.8} />
                        <LogoAppStoreSvg dimensions={{ height: '6vh' }} opacity={0.8} />
                    </ComponentGroup>
                </ComponentGroup>
            }
        />
    </AppShell>
);

export const RadioPageStory = Template.bind({});
RadioPageStory.args = {};

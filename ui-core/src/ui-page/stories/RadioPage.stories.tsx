import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RadioPage, RadioPageProps } from 'ui-page';
import { ComponentGroupTags, StyleVariant, ThemeNameTags } from 'ui-core-models';
import { StyledThemeProps } from 'ui-context';
import {
    LogoFreshPrintSvg,
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
import { Button } from 'ui-controls';

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
                    dimensions={{ height: '420pt', width: '420pt' }}
                    playAreaIcon={<LogoListenNowSvg dimensions={{ height: '8pt', width: '20pt' }} />}
                    centerItem={<PlayButtonSvg dimensions={{ height: '24pt', width: '40pt' }} />}
                ></SpeakerBackgroundSvg>
            }
            logo={<LogoSenseRadioSvg dimensions={{ height: '80pt' }} />}
            socialButtons={<SocialButtonsSvg dimensions={{ height: '40pt' }} />}
            background={<StripedBackground />}
            pageFooter={
                <ComponentGroup
                    groupingType={ComponentGroupTags.HORIZONTAL_FLEX}
                    dimensions={{ height: '12vh' }}
                    itemPadding="0.8rem"
                >
                    <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX}>
                        <LogoFreshPrintSvg dimensions={{ height: '8vh' }} />
                        <LogoLedArtSvg dimensions={{ height: '8vh' }} />
                        <LogoNestMediaSvg dimensions={{ height: '8vh' }} />
                    </ComponentGroup>
                    <SpanBlock>
                        Tel/Viber: +36 30 277 3939
                        <br />
                        Email: hello@radiosense.hu
                        <br />
                        © 2021 Radio Sense Hungary. All rights reserved.
                        <br />
                        by nestmedia
                    </SpanBlock>
                    <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX} itemGap="1rem">
                        <Button styleVariant={StyleVariant.ROUNDED} padding="0.5rem">
                            MYONLINE RADIO
                        </Button>
                        <Button styleVariant={StyleVariant.ROUNDED} padding="0.5rem">
                            ONLINE STREAM
                        </Button>
                    </ComponentGroup>
                </ComponentGroup>
            }
        />
    </AppShell>
);

export const RadioPageStory = Template.bind({});
RadioPageStory.args = {};

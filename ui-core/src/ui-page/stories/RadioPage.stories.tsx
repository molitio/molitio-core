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
import { ComponentGroup, AppShell, AppShellProps } from 'ui-common';
import { StripedBackground } from 'ui-background';
import { Button } from 'ui-controls';

const storyArgs: AppShellProps & StyledThemeProps = {
    themeName: ThemeNameTags.BLACK_YELLOW,
    applyGlobalStyleRules: true,
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
    <AppShell {...args}>
        <RadioPage
            themeName={storyArgs.themeName}
            radio={{
                playUrl:
                    'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
            }}
            playButton={
                <SpeakerBackgroundSvg
                    dimensions={{ height: '300pt', width: '300pt' }}
                    playAreaIcon={<LogoListenNowSvg dimensions={{ height: '8pt', width: '20pt' }} />}
                    centerItem={<PlayButtonSvg dimensions={{ height: '20pt', width: '40pt' }} />}
                ></SpeakerBackgroundSvg>
            }
            logo={<LogoSenseRadioSvg dimensions={{ height: '80pt' }} />}
            socialButtons={<SocialButtonsSvg dimensions={{ height: '40pt' }} />}
            background={<StripedBackground />}
            pageFooter={
                <ComponentGroup
                    groupingType={ComponentGroupTags.HORIZONTAL_FLEX}
                    dimensions={{ height: '10vh' }}
                    itemPadding="0.8rem"
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
                        itemPadding="0.2rem"
                    >
                        {
                            <>
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
                            </>
                        }
                    </ComponentGroup>
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
RadioPageStory.args = {
    ...storyArgs,
};

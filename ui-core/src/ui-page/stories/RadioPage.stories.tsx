import { Story, Meta } from '@storybook/react';
import { RadioPage, RadioPageProps } from 'ui-page';
import { ComponentGroupTags, ThemeNameTags } from 'ui-core-models';
import { StyledThemeProps } from 'ui-context';
import { LogoFreshPrintSvg, PlayButtonSvg } from 'ui-svg';
import { ComponentGroup, AppShell, Logo } from 'ui-common';
import { StripedBackground } from 'ui-background';

const storyArgs: RadioPageProps & StyledThemeProps = {
    themeName: ThemeNameTags.BLACK_YELLOW,
    radio: {
        playUrl:
            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/audio-store/chill-abstract-12099.mp3',
    },
    playButton: <PlayButtonSvg dimensions={{ width: '30vw', height: '30vh' }} />,
    background: <StripedBackground />,
    logo: (
        <Logo
            url={
                'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/nest-media/sense-radio/image-store/radio_sense_new_logo2.svg'
            }
            opacity={0.8}
        />
    ),
    socialButtons: [
        <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX}>
            <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
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

const Template: Story<RadioPageProps & StyledThemeProps> = (args) => (
    <AppShell themeName={ThemeNameTags.BLACK_YELLOW}>
        <RadioPage {...args}></RadioPage>
    </AppShell>
);

export const RadioPageStory = Template.bind({});
RadioPageStory.args = {
    ...storyArgs,
};

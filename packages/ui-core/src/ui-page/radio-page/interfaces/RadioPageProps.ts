import { UniversalRadio } from '@molitio/system-schema';

export interface RadioPageProps {
    playerElement?: JSX.Element;
    playButton?: JSX.Element;
    playButtonTopLogo?: JSX.Element;
    playButtonBackground?: JSX.Element;
    background?: JSX.Element;
    externalBackgroundEffect?: string;
    logo?: JSX.Element;
    socialButtons?: JSX.Element;
    radio: UniversalRadio;
    pageFooter?: JSX.Element;
}

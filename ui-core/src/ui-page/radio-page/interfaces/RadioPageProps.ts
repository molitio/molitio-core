import { TUniversalRadio } from 'ui-core-models';

export interface RadioPageProps {
    playButton: JSX.Element;
    background: JSX.Element;
    logo?: JSX.Element;
    socialButtons?: JSX.Element[];
    radio: TUniversalRadio;
    pageFooter?: JSX.Element;
}

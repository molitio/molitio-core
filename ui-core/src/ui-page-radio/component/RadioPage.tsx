import React from 'react';
import { RadioPageProps } from '../interface/RadioPageProps';
import { createUseStyles } from 'react-jss';
import { StripedBackground } from 'ui-background';
import { LogoFreshPrintSvg, PlayButtonSvg } from 'ui-svg';
import { AudioPlayer } from './AudioPlayer';
import { PlayerContext, PlayerContextProvider } from 'media-player-context';

export const RadioPage: React.FC<RadioPageProps> = ({ ...props }: RadioPageProps) => {
    const useStyles = createUseStyles({
        pageContainer: {
            width: '100vw',
            height: '100vh',
            margin: 0,
            pointerEvents: 'none',
        },
        content: {
            top: 0,
            position: 'relative',
            zIndex: 100,
        },
        pageTitle: {
            border: '1px solid blue',
        },
        playButton: {
            width: '50vw',
            height: '50vh',
            marginTop: '20vh',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    });

    const style = useStyles();

    return (
        <main className={style.pageContainer}>
            <StripedBackground />
            <PlayerContextProvider>
                <AudioPlayer src={props.radio.playUrl} />
                <div className={style.content}>
                    {props.radio.playUrl}
                    <h1 className={style.pageTitle}>Show content</h1>
                    <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                    <div className={style.playButton}>
                        <PlayButtonSvg dimensions={{ width: '100%', height: '100%' }} />
                    </div>
                </div>
            </PlayerContextProvider>
        </main>
    );
};

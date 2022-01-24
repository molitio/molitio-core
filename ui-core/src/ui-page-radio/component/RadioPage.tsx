import React, { useState } from 'react';
import { RadioPageProps } from '../interface/RadioPageProps';
import { createUseStyles } from 'react-jss';
import { StripedBackground } from 'ui-background';
import { LogoFreshPrintSvg, PlayButtonSvg } from 'ui-svg';
import { AudioPlayer } from './AudioPlayer';
import { PlayerContext, PlayerContextProvider } from 'media-player-context';
import { ThemeContextProvider, ThemeProps } from 'ui-theme-context';
import { ComponentGroup } from 'ui-common';
import { ComponentGroupTags } from 'ui-core-models';

export const RadioPage: React.FC<RadioPageProps & ThemeProps> = ({ ...props }) => {
    const playerState = useState(PlayerContext);

    const style = createUseStyles({
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
    }).apply({});

    return (
        <main className={style.pageContainer}>
            <StripedBackground />
            <PlayerContextProvider>
                <AudioPlayer src={props.radio.playUrl} />
                <div className={style.content}>
                    {props.radio.playUrl}
                    <div className={style.playButton}>
                        <PlayButtonSvg dimensions={{ width: '100%', height: '100%' }} />
                    </div>
                    <ComponentGroup groupingType={ComponentGroupTags.HORIZONTAL_FLEX}>
                        <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                        <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                        <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                        <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                        <LogoFreshPrintSvg dimensions={{ width: '50px', height: '50px' }} />
                    </ComponentGroup>
                </div>
            </PlayerContextProvider>
        </main>
    );
};

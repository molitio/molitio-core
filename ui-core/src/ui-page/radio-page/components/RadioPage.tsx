import React from 'react';
import { createUseStyles } from 'react-jss';
import { AudioPlayer } from 'ui-common';
import { AudioPlayerContextProvider } from 'ui-context';
import { StyledThemeProps } from 'ui-context';
import { RadioPageProps } from '../interfaces/RadioPageProps';

export const RadioPage: React.FC<RadioPageProps & StyledThemeProps> = ({ ...props }) => {
    const style = createUseStyles({
        pageContainer: {
            width: '100vw',
            height: '100vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            pointerEvents: 'none',
        },
        pageHeader: {
            display: 'flex',
            zIndex: 90,
            '& > *': {
           /*      border: '1px solid purple', */
            },
        },
        logo: {
            paddingTop: '10vh',
            paddingLeft: '10vw',
            /*     width: '30vw',
            height: '20vh', */
            /* zIndex: 90, */
            '& > *': {
                /*        height: '100%',
                width: '100%', */
            },
        },
        spacer: {
            flex: 1,
        },
        socialButtons: {
            paddingTop: '10vh',
            paddingRight: '10vw',
            '& > *': {
                /*   top: 0,
                left: 0,
                height: '100%',
                position: 'relative', 
                width: '100%', */
            },
        },
        contentContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        },
        content: {
            marginTop: '-10vh',
            zIndex: 100,
        },
    }).apply({});

    return (
        <main className={style.pageContainer}>
            <div className={style.pageHeader}>
                <div className={style.logo}>{props.logo}</div>
                <div className={style.spacer}></div>
                <div className={style.socialButtons}>{props.socialButtons}</div>
            </div>
            <div className={style.contentContainer}>
                <div className={style.content}>
                    <AudioPlayerContextProvider>
                        <AudioPlayer src={props.radio.playUrl} />
                        {props.playButton}
                    </AudioPlayerContextProvider>
                </div>
            </div>
            {props.background}
        </main>
    );
};

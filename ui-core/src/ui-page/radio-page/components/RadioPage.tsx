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
            margin: 0,
            pointerEvents: 'none',
        },
        logo: {
            position: 'absolute',
            top: '10vh',
            left: '10vw',
            /*     width: '30vw',
            height: '20vh', */
            border: '1px solid purple',
            zIndex: 90,
            '& > *': {
                height: '100%',
                width: '100%',
                /* border: '3px solid purple', */
            },
        },
        socialButtons: {
            position: 'absolute',
            top: '10vh',
            right: '0vw',
            width: '40vw',
            zIndex: 90,
            '& > *': {
                top: 0,
                left: 0,
                position: 'relative',
                height: '100%',
                width: '100%',
                /* border: '3px solid purple', */
            },
        },
        contentContainer: {
            width: '100%',
            height: '100%',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
        },
        content: {
            marginTop: '10vh',
            zIndex: 100,
        },
    }).apply({});

    return (
        <main className={style.pageContainer}>
            <div className={style.logo}>{props.logo}</div>
            <div className={style.socialButtons}>{props.socialButtons}</div>
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

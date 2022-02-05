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
            position: 'absolute',
            margin: 0,
            pointerEvents: 'none',
        },
        logo: {
            position: 'fixed',
            top: '0vh',
            left: '0vw',
            width: '40vw',
            height: '30vh',

            '& > *': {
                height: '100%',
                width: '100%',
                /* border: '3px solid purple', */
            },
        },
        socialButtons: {
            position: 'fixed',
            top: '0vh',
            right: '0vw',
            width: '40vw',
            height: '30vh',

            '& > *': {
                height: '100%',
                width: '100%',
                /* border: '3px solid purple', */
            },
        },
        content: {
            position: 'fixed',
            top: '40vh',
            width: '30vw',
            left: '35vw',
            zIndex: 100,
        },
    }).apply({});

    return (
        <main className={style.pageContainer}>
            {props.background}
            <div className={style.logo}>{props.logo}</div>
            {/* <div className={style.socialButtons}>{props.socialButtons}</div> */}
            <div className={style.content}>
                <AudioPlayerContextProvider>
                    <AudioPlayer src={props.radio.playUrl} />
                    {props.playButton}
                </AudioPlayerContextProvider>
            </div>
        </main>
    );
};

import React from 'react';
import { createUseStyles } from 'react-jss';
import { AudioPlayer } from 'ui-common';
import { AudioPlayerContextProvider, StyledThemeContext } from 'ui-context';
import { StyledThemeProps } from 'ui-context';
import { RadioPageProps } from '../interfaces/RadioPageProps';

export const RadioPage: React.FC<RadioPageProps & StyledThemeProps> = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        pageContainer: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'none',
        },
        pageHeader: {
            display: 'flex',
            zIndex: 90,
        },
        logo: {
            paddingTop: '6vh',
            paddingLeft: '10vw',
        },
        spacer: {
            flex: 1,
        },
        socialButtons: {
            paddingTop: '6vh',
            paddingRight: '10vw',
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
        pageFooter: {
            zIndex: 90,
            backgroundColor: theme.backgroundColor,
        },
    })).apply({});

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
            <div className={style.pageFooter}>{props.pageFooter}</div>
            {props.background}
        </main>
    );
};

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
            paddingTop: '4vh',
            paddingLeft: '8vw',
        },
        spacer: {
            flex: 1,
        },
        socialButtons: {
            paddingTop: '4vh',
            paddingRight: '8vw',
            display: 'flex',
            justifyContent: 'flex-end',
            '& > *': {
                // border: '1px dashed purple',
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
        pageFooter: {
            display: 'flex',
            zIndex: 90,
            minHeight: '12vh',
            backgroundColor: theme.backgroundColor,
            '& > *': {
                flex: 1,
                marginTop: '0.8rem',
                marginLeft: '10vw',
                marginRight: '10vw',
            },
        },
    })).apply({});

    return (
        <div className={style.pageContainer}>
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
        </div>
    );
};

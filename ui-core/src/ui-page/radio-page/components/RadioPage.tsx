import React from 'react';
import { createUseStyles } from 'react-jss';
import { AudioPlayer } from 'ui-common';
import { AudioPlayerContextProvider, StyledThemeContext } from 'ui-context';
import { RadioPageProps } from '../interfaces/RadioPageProps';

export const RadioPage: React.FC<RadioPageProps> = ({ ...props }) => {
    const headerTopMargin = '4vh';
    const headerSideMargin = '10vw';
    const style = createUseStyles((theme: StyledThemeContext) => ({
        pageContainer: {},
        pageContentContainer: {
            minHeight: 'calc(100vh)',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'none',
        },
        pageHeader: {
            display: 'flex',
            zIndex: 90,
        },
        logo: {
            paddingTop: headerTopMargin,
            paddingLeft: headerSideMargin,
        },
        spacer: {
            flex: 1,
        },
        socialButtons: {
            paddingTop: headerTopMargin,
            paddingRight: headerSideMargin,
            display: 'flex',
            //justifyContent: 'flex-end',
            '& > *': {
                // border: '1px dashed purple',
            },
        },
        contentContainer: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        content: {
            marginTop: '-15vh',
            //  zIndex: 100,
            //alignSelf: 'stretch',
        },
        pageFooter: {
            display: 'flex',
            //zIndex: 90,
            minHeight: '12vh',
            backgroundColor: theme.backgroundColor,
            '& > *': {
                flex: 1,
                marginTop: '0.8rem',
                marginLeft: '8vw',
                marginRight: '8vw',
            },
        },
    })).apply({});

    return (
        <div className={style.pageContainer}>
            <div className={style.pageContentContainer}>
                <div className={style.pageHeader}>
                    <div className={style.logo}>{props.logo}</div>
                    <div className={style.spacer}></div>
                    <div className={style.socialButtons}>{props.socialButtons}</div>
                </div>
                <div className={style.contentContainer}>
                    <AudioPlayerContextProvider>
                        <AudioPlayer src={props.radio.playUrl} />
                        <div className={style.content}>{props.playButton}</div>
                    </AudioPlayerContextProvider>
                </div>
                <div className={style.pageFooter}>{props.pageFooter}</div>
            </div>
            {props.background}
        </div>
    );
};

import React from 'react';
import { createUseStyles } from 'react-jss';
import { AudioPlayer } from 'ui-common';
import { AudioPlayerContextProvider, StyledThemeContext } from 'ui-context';
import { RadioPageProps } from '../interfaces/RadioPageProps';

export const RadioPage: React.FC<RadioPageProps> = ({ ...props }) => {
    const headerItemSpacingTop = '2em';
    const headerItemSpacingSide = '6em';
    const playerWidthAndHeightSM = '80vw';
    const playerWidthAndHeightLG = '70vw';
    const playerWidthAndHeightWIDE = '60vh';

    const style = createUseStyles((theme: StyledThemeContext) => ({
        pageContainer: {
            top: 0,
            left: 0,
            zIndex: 100,
            height: '100vh',
            width: '100vw',
            position: 'relative',
            '& * ': {
                zIndex: 50,
            },
        },
        contentContainer: {
            position: 'relative',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'none',
        },
        logo: {
            position: 'fixed',
            top: headerItemSpacingTop,
            left: headerItemSpacingSide,
            zIndex: 100,
            '@media (max-width: 900px)': {
                left: `10vw`,
            },
            '& > *': {
                height: '4em',
                '@media (max-width: 900px)': {
                    height: '3em',
                },
            },
        },
        socialButtons: {
            position: 'fixed',
            zIndex: 100,
            top: headerItemSpacingTop,
            right: headerItemSpacingSide,
            '@media (max-width: 900px)': {
                width: 'max-content',
                height: 'max-content',
                position: 'fixed',
                top: '93vh',
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        content: {
            flex: 1,
            flexWrap: 'nowrap',
            position: 'relative',

            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        player: {
            width: playerWidthAndHeightWIDE,
            height: playerWidthAndHeightWIDE,
            marginTop: '4em',
            '@media (max-width: 900px)': {
                width: playerWidthAndHeightLG,
                height: playerWidthAndHeightLG,
                marginTop: '7em',
            },
            '@media (max-width: 500px)': {
                marginTop: '6em',
                width: playerWidthAndHeightSM,
                height: playerWidthAndHeightSM,
            },
        },

        pageFooter: {
            zIndex: 80,
            minHeight: '10vh',
            backgroundColor: theme.backgroundColor,
        },
    })).apply({});

    return (
        <>
            {props.background}
            <div className={style.pageContainer}>
                <div className={style.logo}>{props.logo}</div>
                <div className={style.socialButtons}>{props.socialButtons}</div>
                <div className={style.contentContainer}>
                    <div className={style.content}>
                        <div className={style.player}>
                            <AudioPlayerContextProvider>
                                {props.playerElement}
                                <AudioPlayer src={props.radio.playUrl} />
                            </AudioPlayerContextProvider>
                        </div>
                    </div>
                    <div className={style.pageFooter}>{props.pageFooter}</div>
                </div>
            </div>
        </>
    );
};

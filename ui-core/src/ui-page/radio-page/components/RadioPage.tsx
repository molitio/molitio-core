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
            zIndex: 100,
            //position: 'relative',
            '& * ': {
                zIndex: 60,
            },
        },
        contentContainer: {
            /*    position: 'relative',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            pointerEvents: 'none', */
        },
        logo: {
            position: 'fixed',
            top: headerItemSpacingTop,
            left: headerItemSpacingSide,
            zIndex: 100,
        },
        socialButtons: {
            position: 'fixed',
            zIndex: 100,
            width: 'max-content',
            height: 'max-content',
            top: headerItemSpacingTop,
            right: headerItemSpacingSide,
            bottom: 'auto',
        },
        content: {
            flex: 1,
            flexWrap: 'nowrap',
            height: '100vh',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '& > *': {
                //flexBasis: 'auto',
            },
            /*      left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto', */
        },
        player: {
            width: playerWidthAndHeightWIDE,
            height: playerWidthAndHeightWIDE,
            marginTop: '-4em',
        },
        externalBackgroundEffect: {
            position: 'fixed',
            zIndex: 80,
            visibility: props.externalBackgroundEffect ? 'visible' : 'hidden',
            backgroundImage: `url(${props.externalBackgroundEffect})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            pointerEvents: 'none',
        },
        pageFooter: {
            zIndex: 70,
            position: 'fixed',
            width: '100vw',
            bottom: 0,
            height: '5em',
            backgroundColor: theme.backgroundColor,
        },
        '@media (max-width: 1400px)': {},
        '@media (max-width: 1200px)': {
            logo: {
                left: `calc(${headerItemSpacingSide} + 1em)`,
                '& > *': {
                    height: '5em',
                },
            },
        },
        '@media (max-width: 992px)': {
            logo: {
                left: `calc(${headerItemSpacingSide} - 1em)`,
                '& > *': {
                    height: '4em',
                },
            },
            socialButtons: {
                position: 'fixed',
                top: 'auto',
                bottom: '0.8em',
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            player: {
                maxWidth: playerWidthAndHeightLG,
                maxHeight: playerWidthAndHeightLG,
                // marginTop: '7em',
            },
            pageFooter: {
                '& > *': {
                    visibility: 'hidden',
                },
            },
        },
        '@media (max-width: 768px)': {
            logo: {
                left: `calc(${headerItemSpacingSide} - 1.5em)`,
                '& > *': {
                    height: '4em',
                },
            },
        },
        '@media (max-width: 576px)': {
            logo: {
                left: `calc(${headerItemSpacingSide} - 4em)`,
                '& > *': {
                    height: '3em',
                },
            },
            player: {
                //marginTop: '10em',
                width: playerWidthAndHeightSM,
                height: playerWidthAndHeightSM,
            },
        },
        '@media (orientation: landscape)': {
            logo: {
                left: `calc(${headerItemSpacingSide} - 1em)`,
                '& > *': {
                    height: '4em',
                },
            },
            player: {
                //marginTop: '10em',
                width: playerWidthAndHeightWIDE,
                height: playerWidthAndHeightWIDE,
            },
        },
    })).apply({});

    return (
        <>
            {props.background}
            <div className={style.pageContainer}>
                <div className={style.logo}>{props.logo}</div>
                <div className={style.socialButtons}>{props.socialButtons}</div>
                {/* {props.externalBackgroundEffect ? <div className={style.externalBackgroundEffect} /> : null} */}
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

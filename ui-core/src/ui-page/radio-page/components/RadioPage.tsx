import React from 'react';
import { createUseStyles } from 'react-jss';
import { AudioPlayer } from 'ui-common';
import { AudioPlayerContextProvider, StyledThemeContext } from 'ui-context';
import { RadioPageProps } from '../interfaces/RadioPageProps';

export const RadioPage: React.FC<RadioPageProps> = ({ ...props }) => {
    const headerItemSpacingTop = '2em';
    const headerItemSpacingSide = '6em';
    const playerWidthAndHeightMicro = '8em';
    const playerWidthAndHeightSM = '80vw';
    const playerWidthAndHeightLG = '70vw';
    const playerWidthAndHeightWIDE = '60vh';

    const style = createUseStyles((theme: StyledThemeContext) => ({
        pageContainer: {
            zIndex: 100,
            '& * ': {
                position: 'relative',
                zIndex: 60,
            },
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
            left: 0,
            bottom: 0,
            width: 'calc(env(safe-area-inset-left, 0px) + 100% + env(safe-area-inset-right, 0px))',
            height: '5em',
            backgroundColor: theme.backgroundColor,
        },
        '@media (max-width: 1400px)': {
            logo: {
                left: `calc(${headerItemSpacingSide} + 1em)`,
                '& > *': {
                    height: '5em',
                },
            },
        },
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
        '@media (max-width: 576px) and (max-height: 576px)': {
            logo: {
                bottom: 'auto',
                top: '0.2em',
                left: '0.2em',
                '& > *': {
                    height: '1em',
                },
            },
            socialButtons: {
                position: 'fixed',
                top: 'auto',
                bottom: '0.8em',
                right: '1em',
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
                width: playerWidthAndHeightSM,
                height: playerWidthAndHeightSM,
            },
        },
        '@media (max-width: 200px) or (max-height: 200px)': {
            logo: {
                bottom: '0.1em',
                top: 'auto',
                left: '0.5em',
                '& > *': {
                    height: '1em',
                },
            },
            player: {
                marginTop: '-1em',
                width: playerWidthAndHeightMicro,
                height: playerWidthAndHeightMicro,
            },
            pageFooter: {
                height: '1em',
            },
            socialButtons: {
                display: 'none',
            },
        },
        '@media (orientation: landscape) and (min-height: 200px) and (max-height: 576px)': {
            logo: {
                left: '1em',
                '& > *': {
                    height: '3em',
                },
            },
            player: {
                width: playerWidthAndHeightWIDE,
                height: playerWidthAndHeightWIDE,
            },
            pageFooter: {
                height: '3em',
            },
            socialButtons: {
                height: '2em',
                bottom: '0.6em',
            },
        },
    })).apply({});

    return (
        <>
            {props.background}
            <div className={style.pageContainer}>
                <div className={style.logo}>{props.logo}</div>
                <div className={style.socialButtons}>{props.socialButtons}</div>
                <div>
                    <div className={style.content}>
                        <div className={style.player}>
                            <AudioPlayerContextProvider>
                                {props.playerElement}
                                <AudioPlayer
                                    mediaSource={{
                                        sourceUrl: props.radio.mediaSource.sourceUrl,
                                        mediaType: props.radio.mediaSource.mediaType,
                                    }}
                                    alternativeMediaSource={{
                                        sourceUrl: props.radio.alternativeMediaSource?.sourceUrl
                                            ? props.radio.alternativeMediaSource.sourceUrl
                                            : '',
                                        mediaType: props.radio.alternativeMediaSource?.mediaType
                                            ? props.radio.alternativeMediaSource.mediaType
                                            : 'audio/mpeg',
                                    }}
                                    preload={props.radio.preload}
                                />
                            </AudioPlayerContextProvider>
                        </div>
                    </div>
                </div>
                <div className={style.pageFooter}>{props.pageFooter}</div>
            </div>
        </>
    );
};

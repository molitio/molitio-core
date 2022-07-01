import React from 'react';
import { createUseStyles } from 'react-jss';
import { AudioPlayer } from 'ui-common';
import { AudioPlayerContextProvider, StyledThemeContext } from 'ui-context';
import { RadioPageProps } from '../interfaces/RadioPageProps';

export const RadioPage: React.FC<RadioPageProps> = (props) => {
    const { background, logo, socialButtons, playerElement, radio, pageFooter } = props;

    const { externalBackgroundEffect } = props;

    const headerItemSpacingTop = '2em';
    const headerItemSpacingSide = '12em';
    //const playerWidthAndHeightMicro = '8em';
    const playerWidthAndHeightSM = '80vw';
    const playerWidthAndHeightLG = '80vw';
    const playerWidthAndHeightWIDE = '60vh';

    const style = createUseStyles((themeContext: StyledThemeContext) => ({
        pageContainer: {
            top: 'env(safe-area-inset-top, 0px)',
            left: 'env(safe-area-inset-left, 0px)',

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
            right: 'auto',
            zIndex: 100,
            '& > *': {
                //maxHeight: '5em',
            },
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
            visibility: externalBackgroundEffect ? 'visible' : 'hidden',
            backgroundImage: `url(${externalBackgroundEffect})`,
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
            backgroundColor: themeContext.theme?.backgroundColor,
        },

        '@media (orientation: landscape) and (max-width: 1400px)': {
            logo: {
                left: `calc(${headerItemSpacingSide} - 2em)`,
            },
            socialButtons: {
                right: `calc(${headerItemSpacingSide} - 2em)`,
            },
        },

        '@media (orientation: landscape) and (max-width: 1200px)': {
            logo: {
                left: `calc(${headerItemSpacingSide} - 4em)`,
                '& > *': {
                    maxHeight: '8em',
                },
                socialButtons: {
                    right: `calc(${headerItemSpacingSide} - 4em)`,
                },
            },
        },

        '@media (orientation: landscape) and (max-height: 992px)': {
            logo: {
                left: '4em',
                '& > *': {
                    maxHeight: '7em',
                },
            },
            socialButtons: {
                right: '4em',
                '& > *': {
                    maxHeight: '2em',
                },
            },

            pageFooter: {
                maxHeight: '4em',
            },
        },
        '@media (orientation: landscape) and (max-height: 776px)': {
            logo: {
                left: '3em',
                '& > *': {
                    maxHeight: '6em',
                },
            },
            socialButtons: {
                right: '3em',
                '& > *': {
                    maxHeight: '2em',
                },
            },
        },
        '@media (orientation: landscape) and (max-height: 576px)': {
            logo: {
                top: '1em',
                '& > *': {
                    maxHeight: '3em',
                },
            },
            socialButtons: {
                top: '1em',
            },
            player: {
                marginTop: '1em',
            },
            pageFooter: {
                maxHeight: '1em',
                '& :nth-of-type(n+1)': {
                    visibility: 'hidden',
                },
            },
        },
        '@media (orientation: portrait)': {
            logo: {
                left: '50%',
                transform: 'translateX(-50%)',
                marginRight: 'auto',
                marginLeft: 'auto',
            },
            socialButtons: {
                top: 'auto',
                bottom: '0.1em',
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
            player: {
                maxWidth: playerWidthAndHeightLG,
                maxHeight: playerWidthAndHeightLG,
            },
            pageFooter: {
                maxHeight: '3.5em',
                '& :nth-of-type(n+1)': {
                    visibility: 'hidden',
                },
            },
        },
        '@media (orientation: portrait) and (max-height: 992px)': {
            logo: {
                '& > *': {
                    maxHeight: '6em',
                },
            },
            player: {
                marginTop: '1em',
            },
        },
        '@media (orientation: portrait) and (max-height: 776px)': {
            logo: {
                '& > *': {
                    maxHeight: '4em',
                },
            },
            player: {
                marginTop: '1em',
                maxWidth: playerWidthAndHeightSM,
                maxHeight: playerWidthAndHeightSM,
            },
            socialButtons: {
                '& > *': {
                    maxHeight: '2em',
                },
            },
            pageFooter: {
                maxHeight: '3em',
            },
        },
    })).apply({});

    return (
        <>
            {background}
            <div className={style.pageContainer}>
                <div className={style.logo}>{logo}</div>
                <div className={style.socialButtons}>{socialButtons}</div>
                <div>
                    <div className={style.content}>
                        <div className={style.player}>
                            <AudioPlayerContextProvider>
                                <>
                                    {playerElement}
                                    <AudioPlayer
                                        mediaSource={{
                                            sourceUrl: radio.mediaSource.sourceUrl,
                                            mediaType: radio.mediaSource.mediaType,
                                        }}
                                        alternativeMediaSource={{
                                            sourceUrl: radio.alternativeMediaSource?.sourceUrl
                                                ? radio.alternativeMediaSource.sourceUrl
                                                : '',
                                            mediaType: radio.alternativeMediaSource?.mediaType
                                                ? radio.alternativeMediaSource.mediaType
                                                : 'audio/mpeg',
                                        }}
                                        preload={radio.preload}
                                    />
                                </>
                            </AudioPlayerContextProvider>
                        </div>
                    </div>
                </div>
                <div className={style.pageFooter}>{pageFooter}</div>
            </div>
        </>
    );
};

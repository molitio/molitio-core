import React from 'react';
import { createUseStyles } from 'react-jss';
import { AudioPlayer } from 'ui-common';
import { AudioPlayerContextProvider, StyledThemeContext } from 'ui-context';
import { RadioPageProps } from '../interfaces/RadioPageProps';

export const RadioPage: React.FC<RadioPageProps> = ({ ...props }) => {
    const headerItemSpacingTop = '2em';
    const headerItemSpacingSide = '6em';
    //const controlsAreaHightAndWidth = 'calc((60vh + 60vw) / 2)';
    const controlsAreaHight = '60vh';
    const controlsAreaWidth = '60vh';

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
                height: '6em',
                '@media (max-width: 900px)': {
                    height: '5em',
                },
            },
        },
        socialButtons: {
            position: 'fixed',
            zIndex: 100,
            top: headerItemSpacingTop,
            right: headerItemSpacingSide,
            '@media (max-width: 900px)': {
                //border: '3px dashed pink',
                width: 'max-content',
                height: 'max-content',
                position: 'fixed',
                //bottom: headerItemSpacingTop,
                top: '93vh',
                //right: headerItemSpacingSide,
                left: 0,
                right: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        content: {
            //border: '3px dashed purple',
            flex: 1,
            flexWrap: 'nowrap',
            position: 'relative',
            marginTop: '4em',
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: controlsAreaWidth,
            height: controlsAreaHight,
            '@media (max-width: 900px)': {
                // height: `calc(${controlsAreaHight} / 3) * 2)`,
                marginTop: '7em',
                //justifyContent: 'flex-end',
                '& > *': {
                    // border: '1px dashed purple',
                },
            },
            '@media (max-height: 400px)': {
                height: `calc(${controlsAreaHight} / 2)`,
            },
            //  zIndex: 100,
            //alignSelf: 'stretch',
        },
        player: {
            width: controlsAreaWidth,
            height: controlsAreaHight,
            border: '3px dashed purple',
        },
/*         playControls: {
            //border: '3px dashed orange',
            zIndex: 90,
            //top: '4vh',
            position: 'relative',
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
        },
        playButtonTopLogo: {
            //border: '3px dashed azure',
            marginTop: '15vh',
            width: '5em',
            alignSelf: 'center',
        },
        playButton: {
            // border: '3px dashed yellow',
            width: '15vh',
            alignSelf: 'center',
        }, 
        playControlsBackground: {
            //border: '3px dashed white',
            position: 'absolute',
            top: 0,
            zIndex: 80,
            width: controlsAreaWidth,
            height: controlsAreaHight,
        },*/
        pageFooter: {
            //border: '3px dashed red',
            zIndex: 80,
            //display: 'flex',

            //zIndex: 90,
            minHeight: '10vh',
            //justifySelf: 'flex-end',
            backgroundColor: theme.backgroundColor,
            //backgroundColor: 'black',
            '& > *': {
                //flex: 1,
                //marginTop: '0.8rem',
                //marginLeft: '8vw',
                //marginRight: '8vw',
            },
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

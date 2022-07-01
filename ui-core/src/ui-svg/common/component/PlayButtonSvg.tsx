import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from '../interface/SvgComponentProps';
import { AudioPlayerContext } from 'ui-context';
import { StyledThemeContext } from 'ui-context';

export const PlayButtonSvg: React.FC<SvgComponentProps> = (props) => {
    const { dimensions } = props;

    const playerContext = React.useContext(AudioPlayerContext);

    const style = createUseStyles((themeContext: StyledThemeContext) => ({
        svg: {
            //position: props.dimensions === 'FULLSCREEN' ? 'fixed' : 'relative',
            height: dimensions === 'FULLSCREEN' ? '100%' : dimensions?.height ?? '100%',
            width: dimensions === 'FULLSCREEN' ? '100%' : dimensions?.width ?? '100%',
            pointerEvents: 'none',
            preserveAspectRatio: 'xMidYMid meet',
            //border: '3px dashed green',
        },
        playButton: {
            pointerEvents: 'auto',
            cursor: 'pointer',
        },
        circle: {
            //fill: theme.primary,
            stroke: '#0b0b0a',
            strokeWidth: '1',
            fill: '#f6c339',
        },
        controlColoring: {
            fill: themeContext.theme?.secondary,
            stroke: themeContext.theme?.secondary,
        },
        visible: {
            visibility: 'visible',
        },
        hidden: {
            visibility: 'hidden',
        },
    })).apply({});

    const togglePlayPause = () => {
        //playerContext.setIsPlaying(!playerContext.isPlaying);
    };

    return (
        <svg
            id="ctrl-play"
            className={style.svg}
            //preserveAspectRatio="xMidYMid meet"
            onClick={() => togglePlayPause()}
            version="1.1"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/2000/xlink"
        >
            <g id="ctrl-play-circle-g" className={style.playButton}>
                <circle id="ctrl-play-circle" className={style.circle} cx="50" cy="50" r="48" />
            </g>
            <g id="ctrl-play-triangle-g" className={`${playerContext.isPlaying ? style.hidden : style.visible}`}>
                <polygon
                    id="ctrl-play-triangle"
                    className={style.controlColoring}
                    points="42,34 68,50 42,66"
                    strokeLinejoin="round"
                    strokeOpacity="1"
                    strokeWidth="5"
                />
            </g>

            <g id="ctrl-pause-path-g" className={`${playerContext.isPlaying ? style.visible : style.hidden}`}>
                <path
                    id="ctrl-pause-path-1"
                    className={style.controlColoring}
                    fill="none"
                    strokeOpacity="1"
                    strokeDasharray="none"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeLinecap="round"
                    strokeWidth="10"
                    stroke="#000000"
                    d="m 42,30 v 40"
                />
                <path
                    id="ctrl-pause-path-2"
                    className={style.controlColoring}
                    fill="none"
                    strokeOpacity="1"
                    strokeDasharray="none"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeLinecap="round"
                    strokeWidth="10"
                    stroke="#000000"
                    d="m 58,30 v 40"
                />
            </g>
        </svg>
    );
};

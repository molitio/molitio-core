import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from './interface/SvgComponentProps';
import { PlayerContext } from 'media-player-context';

export const PlayButtonSvg: React.FC<SvgComponentProps> = ({ ...props }) => {
    const playerContext = React.useContext(PlayerContext);
    const [playPauseToggle, setPlayPauseToggle] = React.useState(playerContext.isPlaying);

    React.useEffect(() => {
        const effect = () => {
            playerContext.setIsPlaying(playPauseToggle);
            console.log(`play button: ${playerContext.isPlaying}`);
        };
        effect();
    }, [playPauseToggle]);

    const style = createUseStyles({
        svg: {
            position: props.dimensions === 'FULLSCREEN' ? 'fixed' : 'relative',
            height: props.dimensions === 'FULLSCREEN' ? '100vh' : props.dimensions.height,
            width: props.dimensions === 'FULLSCREEN' ? '100vw' : props.dimensions.width,
            pointerEvents: 'none',
        },
        circle: {
            pointerEvents: 'auto',
            cursor: 'pointer',
        },
        play: {
            '& path': {
                fill: 'black',
                stroke: 'black',
            },
        },
        pause: {},
        visible: {
            visibility: 'visible',
        },
        hidden: {
            visibility: 'hidden',
        },
    }).apply({});

    const togglePlayPause = () => {
        setPlayPauseToggle(!playPauseToggle);
    };

    return (
        <svg
            id="ctrl-play"
            className={style.svg}
            onClick={() => togglePlayPause()}
            width="200pt"
            height="200pt"
            version="1.1"
            viewBox="0 0 70.556 70.556"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="ctrl-play-circle-g" className={style.circle}>
                <circle id="ctrl-play-circle" cx="35.278" cy="35.278" r="31.75" fill="#f6c339" />
            </g>
            <g id="ctrl-play-triangle-g" className={`${style.play} ${playPauseToggle ? style.visible : style.hidden}`}>
                <path
                    id="ctrl-play-triangle"
                    transform="matrix(.17487 0 0 .17487 77.463 29.074)"
                    d="m-179.09 35.477-93.233 53.828v-107.66z"
                    fill="#0b0b0a"
                    stroke="#0b0b0a"
                    strokeLinejoin="round"
                    strokeOpacity="1"
                    strokeWidth="21.909"
                />
            </g>

            <g id="ctrl-pause-path-g" className={`${style.pause} ${playPauseToggle ? style.hidden : style.visible}`}>
                <path
                    id="ctrl-pause-path-1"
                    fill="none"
                    strokeOpacity="1"
                    strokeDasharray="none"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeLinecap="round"
                    strokeWidth="5"
                    stroke="#000000"
                    d="m 30,25.1 v 20"
                />
                <path
                    id="ctrl-pause-path-2"
                    fill="none"
                    strokeOpacity="1"
                    strokeDasharray="none"
                    strokeMiterlimit="4"
                    strokeLinejoin="miter"
                    strokeLinecap="round"
                    strokeWidth="5"
                    stroke="#000000"
                    d="m 40,25.1 v 20"
                />
            </g>
        </svg>
    );
};

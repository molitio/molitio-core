import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyledThemeContext } from '@molitio/system-schema';
import { AudioPlayerContext } from 'ui-media';
import { SvgComponentProps } from '../interface/SvgComponentProps';
import { EmbededImage } from './EmbededImage';

export const SpeakerBackgroundPlayerSvg: React.FC<SvgComponentProps> = (props) => {
    const { dimensions, embededImageSrc } = props;

    const componentHeight = dimensions === 'FULLSCREEN' ? '100%' : dimensions?.height ?? 'auto';
    const componentWidth = dimensions === 'FULLSCREEN' ? '100%' : dimensions?.width ?? 'auto';

    const playerContext = React.useContext(AudioPlayerContext);
    const playButtonRef = React.useRef<SVGGElement>(null);

    React.useEffect(() => {
        const effect = async () => {
            if (playButtonRef.current) {
                playerContext.setPlayButtonRef(playButtonRef.current);
            }
        };
        effect();
    }, []);

    const style = createUseStyles((themeContext: StyledThemeContext) => ({
        svg: {
            height: componentHeight,
            width: componentWidth,
            pointerEvents: 'none',
            position: 'relative',
            zIndex: 60,
        },
        listenNowSvg: {
            width: '30%',
            height: '10%',
        },
        playerButtonSvg: {
            width: '30%',
            height: '30%',
            display: 'hidden',
            zIndex: 100,
            pointerEvents: 'auto',
            cursor: 'pointer',
        },
        '@keyframes pulseLoad': {
            '0%': {
                opacity: 0.4,
                strokeWidth: 2,
                boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)',
            },

            '70% ': {
                opacity: 0.8,
                strokeWidth: 8,
                boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)',
            },

            '100%': {
                opacity: 1,
                strokeWidth: 5,
                boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
            },
        },
        playerButtonPulse: {
            stroke: '3px dashed purple',
            animation: '$pulseLoad 2s ease-in-out 0s infinite alternate;',
        },
        st0: {
            fill: '#2A2A2A',
        },
        st1: {
            fill: 'url(#SVGID_1_)',
        },
        st2: {
            fill: 'url(#SVGID_2_)',
        },
        st3: {
            fill: 'url(#SVGID_3_)',
        },
        st4: {
            fill: 'url(#SVGID_4_)',
        },
        st5: {
            fill: 'url(#SVGID_5_)',
        },
        st6: {
            fill: 'url(#SVGID_6_)',
        },
        st7: {
            fill: 'url(#SVGID_7_)',
        },
        st8: {
            fill: 'url(#SVGID_8_)',
        },
        st9: { fill: '#FFFFFF' },
        stopColor1: {
            stopColor: '#858181',
        },
        stopColor2: {
            stopColor: '#2A2A2A',
        },
        stopColor3: {
            stopColor: '#FFFFFF',
        },
        stopColor4: {
            stopColor: '#A7A7A7',
        },
        stopColor5: {
            stopColor: '#939393',
        },
        lnst0: {
            enableBackground: 'new',
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
        displayInline: {
            display: 'inline',
        },
    })).apply({});

    return (
        <svg
            version="1.1"
            id="Audio_speaker"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid slice"
            className={style.svg}
            xmlns="http://www.w3.org/2000/svg"
        >
            <clipPath id="clipSpeakerBackground">
                <circle cx="50" cy="50" r="45" stroke="green" />
            </clipPath>
            <g clipPath="url(#clipSpeakerBackground)">
                <circle className={style.st0} cx="50" cy="50" r="45.099998" id="circle826" />
                <linearGradient
                    id="SVGID_1_"
                    gradientUnits="userSpaceOnUse"
                    x1="13.815"
                    y1="51.000599"
                    x2="86.182404"
                    y2="51.000599"
                    gradientTransform="rotate(90,50.49965,50.50095)"
                >
                    <stop offset="0" className={style.stopColor1} id="stop828" />
                    <stop offset="0.2781" className={style.stopColor2} id="stop830" />
                    <stop offset="1" className={style.stopColor2} id="stop832" />
                </linearGradient>
                <circle className={style.st1} cx="50" cy="50" r="36.200001" id="circle835" />
                <linearGradient
                    id="SVGID_2_"
                    gradientUnits="userSpaceOnUse"
                    x1="18.838699"
                    y1="51.000599"
                    x2="81.158699"
                    y2="51.000599"
                    gradientTransform="rotate(-90,49.49905,50.49965)"
                >
                    <stop offset="0" className={style.stopColor1} id="stop837" />
                    <stop offset="0.2781" className={style.stopColor2} id="stop839" />
                    <stop offset="1" className={style.stopColor2} id="stop841" />
                </linearGradient>
                <circle className={style.st2} cx="50" cy="50" r="31.200001" id="circle844" />
                <circle className={style.st0} cx="50" cy="50" r="25.6" id="circle846" />
                <radialGradient
                    id="SVGID_3_"
                    cx="49.8587"
                    cy="96.239799"
                    r="47.061901"
                    gradientTransform="matrix(1,0,0,-1,0,100.4094)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" className={style.stopColor3} id="stop850" />
                    <stop offset="0.3438" className={style.stopColor4} id="stop852" />
                    <stop offset="0.807" className={style.stopColor2} id="stop854" />
                </radialGradient>
                <path
                    className={style.st3}
                    d="m 50,11.2 c 21.5,0 38.9,17.3 39.1,38.7 0,-0.1 0,-0.2 0,-0.3 C 89.1,28 71.6,10.5 50,10.5 c -21.6,0 -39.1,17.5 -39.1,39 0,0.1 0,0.2 0,0.3 C 11.1,28.5 28.5,11.2 50,11.2 Z"
                    id="path857"
                />
                <linearGradient
                    id="SVGID_4_"
                    gradientUnits="userSpaceOnUse"
                    x1="-879.51617"
                    y1="1175.6417"
                    x2="-879.51617"
                    y2="1136.0554"
                    gradientTransform="matrix(-0.9817,-0.1906,-0.1906,0.9817,-596.8809,-1232.9004)"
                >
                    <stop offset="0" className={style.stopColor5} id="stop859" />
                    <stop offset="0.8694" className={style.stopColor2} id="stop861" />
                </linearGradient>
                <path
                    className={style.st4}
                    d="M 42.6,88.1 C 21.6,84 7.8,63.8 11.7,42.8 c 0,0.1 -0.1,0.2 -0.1,0.3 -4.1,21.1 9.7,41.6 30.8,45.7 21.1,4.1 41.6,-9.7 45.7,-30.8 0,-0.1 0,-0.2 0.1,-0.3 -4.3,20.9 -24.6,34.5 -45.6,30.4 z"
                    id="path864"
                />
                <radialGradient
                    id="SVGID_5_"
                    cx="49.375"
                    cy="81.850403"
                    r="28.633699"
                    gradientTransform="matrix(1,0,0,-1,0,100.4094)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" className={style.stopColor3} id="stop866" />
                    <stop offset="0.3662" className={style.stopColor4} id="stop868" />
                    <stop offset="0.8595" className={style.stopColor2} id="stop870" />
                </radialGradient>
                <path
                    className={style.st5}
                    d="m 50,14.2 c 19.9,0 36.1,16.1 36.2,36 0,-0.1 0,-0.1 0,-0.2 C 86.2,30 70,13.8 50,13.8 30,13.8 13.8,30 13.8,50 c 0,0.1 0,0.1 0,0.2 0.1,-19.9 16.3,-36 36.2,-36 z"
                    id="path873"
                />
                <radialGradient
                    id="SVGID_6_"
                    cx="41.2005"
                    cy="74.651001"
                    r="26.4492"
                    gradientTransform="matrix(1,0,0,-1,0,100.4094)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" className={style.stopColor3} id="stop875" />
                    <stop offset="0.3203" className={style.stopColor4} id="stop877" />
                    <stop offset="0.7517" className={style.stopColor2} id="stop879" />
                </radialGradient>
                <path
                    className={style.st6}
                    d="m 50,16.5 c 18.4,0 33.3,14.9 33.4,33.3 0,0 0,-0.1 0,-0.2 0,-18.5 -15,-33.4 -33.4,-33.4 -18.4,0 -33.4,15 -33.4,33.4 0,0 0,0.1 0,0.2 0.1,-18.4 15,-33.3 33.4,-33.3 z"
                    id="path882"
                />
                <radialGradient
                    id="SVGID_7_"
                    cx="45.994099"
                    cy="33.429298"
                    r="22.591499"
                    gradientTransform="matrix(0.995,0,0,-1,-2.1982,100.4094)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.2406" className={style.stopColor3} id="stop884" />
                    <stop offset="0.5085" className={style.stopColor4} id="stop886" />
                    <stop offset="0.8694" className={style.stopColor2} id="stop888" />
                </radialGradient>
                <path
                    className={style.st7}
                    d="m 50,78.2 c -15.6,0 -28.3,-12.7 -28.4,-28.4 0,0.1 0,0.1 0,0.2 0,15.8 12.7,28.5 28.4,28.5 15.7,0 28.4,-12.8 28.4,-28.5 0,-0.1 0,-0.1 0,-0.2 C 78.3,65.5 65.6,78.2 50,78.2 Z"
                    id="path891"
                />
                <radialGradient
                    id="SVGID_8_"
                    cx="-875.45172"
                    cy="1176.8612"
                    r="25.9375"
                    gradientTransform="matrix(-0.9817,-0.1906,-0.1906,0.9817,-596.8809,-1232.9004)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" className={style.stopColor5} id="stop893" />
                    <stop offset="0.8694" className={style.stopColor2} id="stop895" />
                </radialGradient>
                <path
                    className={style.st8}
                    d="M 43.6,81.3 C 25.9,77.9 14.4,60.8 17.6,43.2 c 0,0.1 0,0.2 -0.1,0.3 -3.4,17.8 8.1,35 25.9,38.4 17.8,3.4 35,-8.2 38.4,-25.9 0,-0.1 0,-0.2 0.1,-0.3 -3.6,17.6 -20.7,29 -38.3,25.6 z"
                    id="path898"
                />
                <g id="listenNow" className={style.displayInline}>
                    <g
                        id="g844"
                        transform="matrix(0.3111169,0,0,0.3111169,33.831033,16.510935)"
                        className={`${style.displayInline} ${style.lnst0}`}
                    >
                        <path
                            id="lnst-0"
                            className={style.st9}
                            d="m24.8 56.2c0.2-0.1 0.4-0.1 0.5 0 0.2 0.1 0.3 0.2 0.3 0.4s0 0.3-0.2 0.4c-0.5 0.4-1.1 0.7-1.6 1-0.6 0.3-1.2 0.6-1.9 0.9s-1.4 0.5-2 0.6-1.3 0.2-2 0.2-1.3-0.2-1.9-0.4c-0.5-0.2-0.9-0.5-1.3-0.9s-0.6-0.8-0.8-1.3-0.3-1-0.4-1.5c-0.1-0.6-0.1-1.1-0.1-1.6s0.1-1 0.1-1.6c0.2-1.8 0.5-3.5 0.9-5.3s0.8-3.7 1.4-5.8 1.1-3.7 1.5-5 1-3.1 1.7-5.5c0.1-0.2 0.2-0.3 0.4-0.3s0.3 0 0.5 0.2c0.1 0.1 0.2 0.3 0.1 0.5-2.2 6.9-3.7 12.6-4.7 17.3 0 0.2-0.1 0.6-0.3 1.3-0.1 0.6-0.2 1.1-0.3 1.4s-0.1 0.8-0.2 1.4-0.1 1.1-0.1 1.5 0 0.8 0.1 1.3 0.2 0.9 0.3 1.3c0.3 0.6 0.6 1.1 1.1 1.5 0.5 0.3 1 0.5 1.7 0.5 0.6 0 1.2 0 1.9-0.1s1.3-0.3 2-0.6 1.3-0.6 1.8-0.8c0.5-0.4 1-0.7 1.5-1z"
                        />
                        <path
                            id="lnst-1"
                            className={style.st9}
                            d="m29 46.4c0.1 0 0.3 0 0.4 0.1s0.2 0.2 0.2 0.3 0 0.3-0.1 0.4c-0.2 0.3-0.5 0.7-0.8 1-0.3 0.4-0.7 0.8-1.3 1.4-0.5 0.6-1.1 1-1.7 1.4-0.6 0.3-1.1 0.5-1.6 0.5-0.3 0-0.6-0.1-0.9-0.2-0.3-0.2-0.5-0.6-0.6-1.1s0-1.2 0.1-1.9 0.3-1.4 0.5-1.9c0.2-0.6 0.3-1.1 0.6-1.7 0-0.1 0.1-0.2 0.3-0.3 0.1-0.1 0.3-0.1 0.4 0 0.1 0 0.2 0.1 0.2 0.2 0.1 0.1 0.1 0.2 0.1 0.2v0.3c-0.3 0.9-0.6 1.7-0.8 2.5s-0.3 1.5-0.3 1.9c0 0.5 0 0.8 0.1 0.9 0.5 0.3 1.2 0 2.2-0.9 1-0.8 1.9-1.8 2.7-2.9 0-0.1 0.1-0.2 0.3-0.2zm-4.9-3.7c-0.3 0-0.4-0.1-0.5-0.4-0.1-0.1-0.1-0.3 0-0.4l0.3-0.3h0.1c0.1 0 0.1-0.1 0.2-0.1s0.1-0.1 0.2-0.1 0.2-0.1 0.3-0.1l0.4 1c-0.5 0.2-0.8 0.3-0.9 0.3 0 0.1 0 0.1-0.1 0.1z"
                        />
                        <path
                            id="lnst-2"
                            className={style.st9}
                            d="m46.7 39.1h0.4l0.3 0.3c0.1 0.1 0 0.2 0 0.4-0.2 0.6-1 1-2.2 1.4s-2.8 0.5-4.7 0.3c-0.7-0.1-1.3-0.1-1.9-0.2-0.7 1.4-1.5 2.8-2.2 4-0.1 0.3-0.2 0.6-0.4 0.9v0.2c-0.2 1.2-0.3 2.5-0.2 3.8s0.3 2.1 0.6 2.4c0.1 0.1 0.3 0.2 0.4 0.2 0.3 0 0.6-0.2 1-0.6 0.4-0.3 0.6-0.7 0.8-1 0.1-0.1 0.2-0.2 0.3-0.2s0.3 0 0.4 0.1 0.2 0.2 0.2 0.3 0 0.3-0.1 0.4-0.1 0.2-0.2 0.3-0.2 0.2-0.4 0.5l-0.6 0.6c-0.2 0.2-0.4 0.3-0.7 0.5-0.3 0.1-0.5 0.2-0.8 0.3h-0.2c-0.4 0-0.7-0.1-1-0.4-0.5-0.4-0.8-1.1-0.9-2.2s-0.2-2.2-0.1-3.4c-0.6 0.6-1.5 1.2-2.5 1.9 0.4 1 0.3 1.9-0.2 2.7s-1.3 1.4-2.1 1.9c-0.9 0.5-1.7 0.7-2.3 0.7-0.2 0-0.4 0-0.5-0.1-0.6-0.1-0.9-0.5-1-1.1 0-0.3 0-0.6 0.2-0.9 0.1-0.3 0.3-0.6 0.5-0.8s0.5-0.5 0.9-0.8 0.8-0.5 1.1-0.7 0.7-0.4 1.3-0.8c0.5-0.3 0.8-0.4 0.9-0.5-0.2-0.4-0.6-0.9-1.1-1.5-0.3-0.3-0.4-0.6-0.6-0.7-0.1-0.2-0.2-0.4-0.4-0.6-0.1-0.2-0.2-0.4-0.2-0.6 0-0.4 0-0.8 0.2-1.2 0.1-0.4 0.4-0.7 0.6-1 0.3-0.3 0.5-0.5 0.8-0.7s0.6-0.4 0.9-0.5 0.5-0.2 0.7-0.3 0.2-0.1 0.3-0.1h0.4c0.1 0.1 0.2 0.2 0.2 0.3s0 0.3-0.1 0.4l-0.3 0.3c-0.1 0-0.2 0-0.3 0.1-0.1 0-0.4 0.1-0.7 0.3-0.3 0.1-0.6 0.3-0.8 0.5s-0.5 0.4-0.6 0.8c-0.2 0.3-0.3 0.6-0.2 1 0 0.2 0.3 0.6 0.9 1.4 0.5 0.7 0.9 1.2 1.1 1.6 1.6-1 2.7-1.9 3.3-2.9 0.3-1.5 0.7-3.1 1.1-4.6-0.8 0-1.6 0-2.3-0.1h-1.7c-0.5 0-0.9 0.1-1.2 0.1s-0.6 0.1-0.8 0.1c-0.2 0.1-0.4 0.1-0.5 0.2-0.1 0-0.2 0.1-0.3 0.1-0.1 0.1-0.2 0.2-0.4 0.2-0.1 0-0.3-0.1-0.4-0.2s-0.1-0.2-0.1-0.4c0-0.1 0.1-0.3 0.2-0.4 0.8-0.8 3.4-1 7.8-0.8 1.3-4.5 2.4-7.1 3.5-7.8 0.3-0.2 0.6-0.3 0.9-0.2s0.6 0.3 0.7 0.6c0.4 0.9-0.3 3.4-2.3 7.2 0 0.1-0.1 0.2-0.2 0.4 0.5 0 1 0.1 1.5 0.1 0.8 0.1 1.5 0.1 2.1 0 0.6 0 1.1-0.1 1.6-0.2s0.8-0.2 1.2-0.3c0.3-0.1 0.5-0.3 0.7-0.4s0.3-0.2 0.3-0.3c0.2-0.1 0.3-0.2 0.4-0.3zm-15.6 12.6c0.3-0.4 0.3-0.9 0.2-1.5-0.3 0.2-0.6 0.3-0.8 0.5-0.4 0.2-0.7 0.4-0.9 0.5s-0.5 0.3-0.8 0.5-0.6 0.4-0.8 0.5-0.3 0.3-0.5 0.5-0.3 0.3-0.4 0.5-0.1 0.4-0.1 0.5 0.1 0.2 0.2 0.2c0.4 0.1 1.1 0 1.9-0.5 0.8-0.3 1.5-0.9 2-1.7zm5.7-9.3c0.2-0.3 0.4-0.7 0.6-1.1h-0.3c-0.1 0.4-0.2 0.8-0.3 1.1zm3.6-9.1c-0.8 0.5-1.8 2.8-3 7h0.5c0.6-1.2 1.1-2.3 1.6-3.3 0.4-1 0.7-1.8 0.9-2.5s0.2-1.1 0-1.2c0.1-0.1 0.1-0.1 0 0z"
                        />
                        <path
                            id="lnst-3"
                            className={style.st9}
                            d="m46.5 47.3c0.1 0 0.3 0 0.4 0.1s0.2 0.2 0.2 0.4c0 0.1 0 0.3-0.1 0.4l-0.8 0.8c-0.3 0.3-0.8 0.7-1.4 1.2s-1.2 0.9-1.9 1.2-1.3 0.5-1.8 0.5-1-0.2-1.4-0.5c-0.4-0.4-0.6-0.9-0.7-1.5s-0.1-1.2 0.1-1.8 0.4-1.2 0.7-1.9c0.4-0.8 0.9-1.4 1.5-1.9s1.2-0.7 1.8-0.5 0.9 0.5 1 0.9c0 0.3-0.1 0.7-0.4 1.1s-0.7 0.8-1.2 1.2-0.9 0.8-1.4 1c-0.4 0.3-0.8 0.6-1.3 0.9-0.1 0.8 0.1 1.3 0.4 1.6 0.2 0.2 0.5 0.3 0.9 0.2s0.8-0.2 1.2-0.4 0.9-0.5 1.4-0.8 0.9-0.7 1.3-1 0.7-0.7 1-1c0.3-0.1 0.4-0.2 0.5-0.2zm-5.8-0.6c-0.1 0.2-0.3 0.5-0.4 0.7 0.8-0.5 1.4-1.1 2-1.5s0.8-0.8 0.8-1c0 0-0.1 0-0.2-0.1h-0.1c-0.3 0-0.6 0.2-1 0.5-0.5 0.3-0.8 0.8-1.1 1.4z"
                        />
                        <path
                            id="lnst-4"
                            className={style.st9}
                            d="m53.8 50.3c0.1 0 0.3 0 0.4 0.2 0.1 0.1 0.1 0.2 0.1 0.4s-0.1 0.3-0.2 0.4c-0.5 0.5-1 0.7-1.5 0.7-0.3 0-0.5-0.1-0.7-0.2s-0.4-0.4-0.5-0.7-0.2-0.6-0.2-0.9-0.1-0.7-0.1-1.2c-0.1-1-0.2-1.5-0.3-1.7-0.4 0.1-1.2 1-2.7 2.8-0.5 0.6-0.9 1.1-1.2 1.4s-0.5 0.4-0.6 0.5c-0.2 0.1-0.3 0.1-0.5-0.1-0.2-0.1-0.2-0.3-0.2-0.5 0.1-0.9 0.6-3.3 1.6-7.1 0-0.1 0.1-0.2 0.2-0.3s0.2-0.1 0.4-0.1c0.1 0 0.2 0.1 0.3 0.2s0.1 0.3 0.1 0.4c-0.5 1.8-0.9 3.6-1.3 5.4 0.1-0.1 0.2-0.3 0.4-0.5 1-1.2 1.7-2 2.3-2.5 0.5-0.5 1-0.7 1.4-0.6 0.2 0 0.4 0.1 0.5 0.2s0.2 0.3 0.3 0.6 0.1 0.6 0.2 0.8c0 0.2 0.1 0.6 0.1 1 0.1 1.3 0.3 2 0.4 2.1s0.2 0 0.4-0.1 0.4-0.2 0.5-0.3c0.2-0.2 0.3-0.3 0.4-0.3z"
                        />
                        <path
                            id="lnst-5"
                            className={style.st9}
                            d="m66.9 50.3c0.1 0 0.3 0 0.4 0.2 0.1 0.1 0.1 0.2 0.1 0.4s-0.1 0.3-0.2 0.4c-0.5 0.5-1 0.7-1.5 0.7-0.3 0-0.5-0.1-0.7-0.2s-0.4-0.4-0.5-0.7-0.2-0.6-0.2-0.9-0.1-0.7-0.1-1.2c-0.1-1-0.2-1.5-0.3-1.7-0.4 0.1-1.2 1-2.7 2.8-0.5 0.6-0.9 1.1-1.1 1.4-0.3 0.3-0.5 0.4-0.6 0.5-0.2 0.1-0.3 0.1-0.5-0.1-0.2-0.1-0.2-0.3-0.2-0.5 0.1-0.9 0.6-3.3 1.6-7.1 0-0.1 0.1-0.2 0.2-0.3s0.2-0.1 0.4-0.1c0.1 0 0.2 0.1 0.3 0.2s0.1 0.3 0.1 0.4c-0.5 1.8-0.9 3.6-1.3 5.4 0.1-0.1 0.2-0.3 0.4-0.5 1-1.2 1.7-2 2.3-2.5 0.5-0.5 1-0.7 1.4-0.6 0.2 0 0.4 0.1 0.5 0.2s0.2 0.3 0.3 0.6 0.1 0.6 0.2 0.8c0 0.2 0.1 0.6 0.1 1 0.1 1.3 0.3 2 0.4 2.1s0.2 0 0.4-0.1 0.4-0.2 0.5-0.3c0.1-0.2 0.2-0.3 0.3-0.3z"
                        />
                        <path
                            id="lnst-6"
                            className={style.st9}
                            d="m74.1 44.4c0.1 0 0.3 0.1 0.3 0.2 0.1 0.1 0.1 0.2 0.1 0.4 0 0.1-0.1 0.3-0.2 0.3-0.9 0.7-2 0.9-3.3 0.6 0.1 0.5 0 1.2-0.1 2.2-0.1 0.4-0.3 1-0.6 1.7s-0.7 1.2-1.2 1.5c-0.3 0.2-0.6 0.3-0.9 0.3-0.2 0-0.3 0-0.5-0.1-1-0.4-1.4-1.5-1.2-3.3v-0.2c0-0.4 0.2-0.9 0.5-1.5s0.6-1 1.1-1.4 1-0.6 1.5-0.6c0.4 0 0.6 0.1 0.9 0.4 1.4 0.5 2.4 0.5 3.2-0.2 0.1-0.3 0.2-0.3 0.4-0.3zm-4.2 3.6c0.2-1.3 0.1-2.1 0-2.4-0.1 0-0.3-0.1-0.4-0.2-0.4 0.1-0.8 0.4-1.2 1s-0.6 1.1-0.7 1.6v0.2c-0.1 0.5-0.1 0.9 0 1.4s0.2 0.7 0.5 0.9c0.2 0.1 0.3 0 0.5-0.1s0.4-0.4 0.6-0.7 0.4-0.7 0.5-1 0.2-0.6 0.2-0.7z"
                        />
                        <path
                            id="lnst-7"
                            className={style.st9}
                            d="m83 44.8c0.1 0 0.3 0.1 0.4 0.2s0.1 0.2 0.1 0.4c-0.1 0.6-0.5 1.6-1.4 2.8-0.8 1.3-1.6 2.1-2.3 2.4-0.5 0.2-0.9 0.2-1.3 0-0.7-0.5-1-1.6-0.8-3.3-1.2 1.6-2.2 2.7-2.9 3.4s-1.4 1-1.8 1c-0.1 0-0.3 0-0.4-0.1-0.3-0.2-0.5-0.6-0.5-1.2s0.1-1.2 0.3-2 0.5-1.5 0.8-2.2 0.6-1.4 0.9-2.1l0.3-0.3h0.4l0.3 0.3c0.1 0.1 0 0.3 0 0.4-0.6 1.4-1.2 2.7-1.5 3.9-0.4 1.2-0.5 2-0.3 2.2 0.4-0.1 1-0.7 2.1-1.9 1-1.2 2.1-2.6 3.1-4.2 0.2-0.2 0.4-0.3 0.6-0.2 0.1 0 0.2 0.1 0.3 0.2s0.1 0.2 0 0.4c-0.2 0.6-0.3 1.2-0.4 1.9s-0.2 1.3-0.1 1.8c0 0.5 0.1 0.9 0.3 1h0.3c0.6-0.3 1.2-1 1.9-2.1s1.1-1.9 1.2-2.3c0-0.1 0.1-0.3 0.2-0.4h0.2z"
                        />
                        <path
                            id="lnst-8"
                            className={style.st9}
                            d="m85.8 52.2c0.1-0.1 0.2-0.1 0.4-0.1 0.1 0 0.3 0.1 0.4 0.2 0.2 0.3 0.2 0.5-0.1 0.7l-0.6 0.6c-0.1 0.1-0.2 0.1-0.4 0.1-0.1 0-0.3-0.1-0.4-0.2-0.2-0.2-0.2-0.5 0.1-0.7zm3.8-21.1c0.1-0.2 0.3-0.2 0.5-0.2s0.3 0.1 0.4 0.3 0 0.3-0.1 0.5c-0.2 0.3-0.4 0.6-0.6 1.1-0.2 0.4-0.3 0.8-0.4 1s-0.2 0.7-0.4 1.3c-0.2 0.7-0.3 1-0.3 1-0.4 1.5-0.8 3.1-1.1 4.6-0.5 2.8-0.8 5.7-0.8 8.8 0 0.2-0.1 0.3-0.3 0.4s-0.3 0-0.5-0.1-0.3-0.3-0.3-0.5c0.1-3.5 0.4-6.8 1.1-10.1 0.3-1.4 0.7-2.9 1.1-4.2 0-0.1 0.1-0.4 0.2-0.8s0.2-0.7 0.3-0.9 0.2-0.4 0.3-0.8c0.1-0.3 0.3-0.6 0.4-0.9 0.2-0.1 0.4-0.3 0.5-0.5z"
                        />
                    </g>
                </g>
                <g width="100" height="100">
                    {embededImageSrc ? (
                        <EmbededImage embededImageSrc={embededImageSrc} dimensions={{ width: '100', height: '100' }} />
                    ) : (
                        ''
                    )}
                </g>
                <g id="playButton" className={style.displayInline} ref={playButtonRef}>
                    <g id="g1262" transform="matrix(0.25,0,0,0.25,37.5,37.5)" className={style.displayInline}>
                        <g id="ctrl-play-circle-g" className={style.playButton}>
                            <circle id="ctrl-play-circle" cx="50" cy="50" r="48" className={style.circle} />
                        </g>
                        <g id="ctrl-play-triangle-g">
                            <polygon
                                id="ctrl-play-triangle"
                                points="42,34 68,50 42,66"
                                className={`${style.controlColoring} 
                            ${playerContext.isLoading ? style.playerButtonPulse : ''} 
                            ${playerContext.isMuted ? style.visible : style.hidden}`}
                                strokeLinejoin="round"
                                strokeOpacity="1"
                                strokeWidth="5"
                            />
                        </g>
                        <g
                            id="ctrl-pause-path-g"
                            className={`${!playerContext.isMuted ? style.visible : style.hidden}`}
                        >
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
                                d="M 42,30 V 70"
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
                                d="M 58,30 V 70"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

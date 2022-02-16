import React from 'react';
import { createUseStyles } from 'react-jss';
import { EmbededElementProps } from '../interface/EmbededElementProps';
import { SvgComponentProps } from '../interface/SvgComponentProps';
import { SvgEmbeddedHtml } from './SvgEmbeddedHtml';

export const SpeakerBackgroundSvg: React.FC<SvgComponentProps & EmbededElementProps> = ({ ...props }) => {
    const componentHeight = props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.height ?? 'max-content';
    const componentWidth = props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.width ?? 'max-content';

    console.log(`SpeakerBackgroundSvg - componentHeight: ${componentHeight}, componentWidth: ${componentWidth}`);
    const style = createUseStyles({
        svg: {
            position: props.dimensions === 'FULLSCREEN' ? 'fixed' : 'relative',
            height: componentHeight,
            width: componentWidth,
            pointerEvents: 'none',
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
        centerItem: {
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 90,
            '& > *': {
                flex: 1,
                minWidth: 0,
                minHeight: 0,
            },
        },
        centerItemLabel: {
            marginTop: '-12%',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        embededContent: {
            width: '100%',
            height: '100%',
            position: 'absolute',
        },
    }).apply({});

    return (
        <svg
            version="1.1"
            id="speaker-background"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            xmlSpace="preserve"
            className={style.svg}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs id="defs903" />

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
            <SvgEmbeddedHtml x="0" y="0" height={'100%'} width={'100%'} className={style.embededContent}>
                <div className={style.centerItem}>
                    <div className={style.centerItemLabel}>
                        {props.playAreaIcon}
                        {props.centerItem}
                    </div>
                </div>
            </SvgEmbeddedHtml>
        </svg>
    );
};

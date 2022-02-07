import React from 'react';
import { createUseStyles } from 'react-jss';
import { EmbededElementProps } from '../interface/EmbededElementProps';
import { SvgComponentProps } from '../interface/SvgComponentProps';
import { SvgEmbeddedHtml } from './SvgEmbeddedHtml';

export const SpeakerBackgroundSvg: React.FC<SvgComponentProps & EmbededElementProps> = ({ ...props }) => {
    const style = createUseStyles({
        svg: {
            position: props.dimensions === 'FULLSCREEN' ? 'fixed' : 'relative',
            height: props.dimensions === 'FULLSCREEN' ? '100vh' : props.dimensions?.height,
            width: props.dimensions === 'FULLSCREEN' ? '100vw' : props.dimensions?.width,
            pointerEvents: 'none',
           /*  border: '1px solid purple', */
        },
        st0: { fill: '#2A2A2A' },
        st1: { fill: 'url(#SVGID_1_)' },
        st2: { fill: 'url(#SVGID_2_)' },
        centerItem: {
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 90,
            /* border: '1px solid purple', */
            '& > *': {},
        },
    }).apply({});

    return (
        <svg
            id="Audio_speaker"
            className={style.svg}
            version="1.1"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle id="playb" className={style.st0} cx="50" cy="50" r="45.1" />
            <linearGradient
                id="SVGID_1_"
                x1="13.815"
                x2="86.182"
                y1="51.001"
                y2="51.001"
                gradientTransform="rotate(90 50.5 50.501)"
                gradientUnits="userSpaceOnUse"
            >
                <stop id="playc" stop-color="#858181" offset="0" />
                <stop id="playd" stop-color="#2A2A2A" offset=".2781" />
                <stop id="playe" stop-color="#2A2A2A" offset="1" />
            </linearGradient>
            <circle id="playf" className={style.st1} cx="50" cy="50" r="36.2" />
            <linearGradient
                id="SVGID_2_"
                x1="18.839"
                x2="81.159"
                y1="51.001"
                y2="51.001"
                gradientTransform="rotate(-90 49.499 50.5)"
                gradientUnits="userSpaceOnUse"
            >
                <stop id="playg" stop-color="#858181" offset="0" />
                <stop id="playh" stop-color="#2A2A2A" offset=".2781" />
                <stop id="playi" stop-color="#2A2A2A" offset="1" />
            </linearGradient>
            <circle id="playj" className={style.st2} cx="50" cy="50" r="31.2" />
            <circle id="playk" className={style.st0} cx="50" cy="50" r="25.6" />
            <g preserveAspectRatio="xMidYMid meet">
                <foreignObject x="0" y="0" width="100%" height="100%">
                    <SvgEmbeddedHtml className={style.centerItem} xmlns="http://www.w3.org/1999/xhtml">
                        {props.centerItem}
                    </SvgEmbeddedHtml>
                </foreignObject>
            </g>
        </svg>
    );
};

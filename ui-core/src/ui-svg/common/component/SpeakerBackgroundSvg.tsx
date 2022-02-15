import React from 'react';
import { createUseStyles } from 'react-jss';
import { EmbededElementProps } from '../interface/EmbededElementProps';
import { SvgComponentProps } from '../interface/SvgComponentProps';
import { SvgEmbeddedHtml } from './SvgEmbeddedHtml';

export const SpeakerBackgroundSvg: React.FC<SvgComponentProps & EmbededElementProps> = ({ ...props }) => {
    const componentHeight = props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.height ?? 'auto';
    const componentWidth = props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.width ?? 'auto';

    console.log(`componentHeight: ${componentHeight}, componentWidth: ${componentWidth}`);
    const style = createUseStyles({
        svg: {
            position: props.dimensions === 'FULLSCREEN' ? 'fixed' : 'relative',
            height: componentHeight,
            width: componentWidth,
            pointerEvents: 'none',
            /*  border: '1px solid purple', */
        },
        st0: {
            height: componentHeight,
            width: componentWidth,
            fill: '#2A2A2A',
        },
        st1: {
            height: componentHeight,
            width: componentWidth,
            fill: 'url(#SVGID_1_)',
        },
        st2: {
            height: componentHeight,
            width: componentWidth,
            fill: 'url(#SVGID_2_)',
        },
        centerItem: {
            width: '100%',
            height: '100%',
            //width: componentWidth,
            //height: componentHeight,
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 90,

            /* border: '1px solid purple', */
            '& > *': {
                flex: 1,
                minWidth: 0,
                minHeight: 0,
            },
        },
        centerItemLabel: {
            marginTop: '-5%',
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
                <stop id="playc" stopColor="#858181" offset="0" />
                <stop id="playd" stopColor="#2A2A2A" offset=".2781" />
                <stop id="playe" stopColor="#2A2A2A" offset="1" />
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
                <stop id="playg" stopColor="#858181" offset="0" />
                <stop id="playh" stopColor="#2A2A2A" offset=".2781" />
                <stop id="playi" stopColor="#2A2A2A" offset="1" />
            </linearGradient>
            <circle id="playj" className={style.st2} cx="50" cy="50" r="31.2" />
            <circle id="playk" className={style.st0} cx="50" cy="50" r="25.6" />
            {/* <SvgEmbeddedHtml x="0" y="0" height={componentHeight} width={componentWidth}> */}
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

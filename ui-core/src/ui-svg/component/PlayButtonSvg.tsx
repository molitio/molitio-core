import React from 'react';
import { createUseStyles } from 'react-jss';

export const PlayButtonSvg: React.FC = () => {
    const style = createUseStyles({
        background: {
            width: '100%',
            top: 0,
        },
        triangle: {
            style: 'paint-order:markers fill stroke',
        },
    }).apply({});
    //CSSProperties;

    //React.CSSProperties

    return (
        <svg
            id="ctrl-play"
            width="200pt"
            height="200pt"
            version="1.1"
            viewBox="0 0 70.556 70.556"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="ctrl-play-circle-g">
                <circle id="ctrl-play-circle" cx="35.278" cy="35.278" r="31.75" fill="#f6c339" />
            </g>
            <g id="ctrle-play-triangle-g">
                <path
                    className={style.triangle}
                    id="ctrle-play-triangle"
                    transform="matrix(.17487 0 0 .17487 77.463 29.074)"
                    d="m-179.09 35.477-93.233 53.828v-107.66z"
                    fill="#0b0b0a"
                    stroke="#0b0b0a"
                    stroke-linejoin="round"
                    stroke-opacity=".98"
                    stroke-width="21.909"
                />
            </g>
        </svg>
    );
};

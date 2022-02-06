import React from 'react';
import { createUseStyles } from 'react-jss';

export const StripesSvg: React.FC = () => {
    const isBackground = true;

    const bckg = {
        background: {
            position: 'fixed',
            height: '100%',
            width: '100%',
            zIndex: -90,
        },
        backgroundStripes: {
            '&:hover': {
                fill: 'transparent',
                strokeWidth: 2,
                stroke: 'yellow',
            },
        },
    };

    const fixedWidth = {
        background: {
            position: 'relative',
            height: '500px',
            width: '500px',
        },
        backgroundStripes: {
            '&:hover': {
                fill: 'transparent',
                strokeWidth: 2,
                stroke: 'yellow',
            },
        },
    };

    /*      
            margin: 0,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundColor: 'transparent',
  
            zIndex: -90,
            width: '100vw',
            height: '100vh', */

    const style = createUseStyles(isBackground ? { ...bckg } : { ...fixedWidth }).apply({});

    return (
        <svg
            id="playb"
            className={style.background}
            preserveAspectRatio="xMidYMid slice"
            width="1920pt"
            height="1080pt"
            version="1.1"
            viewBox="0 0 1920 1080"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs id="stripeDefs">
                <pattern
                    id="stripePattern"
                    width="100"
                    height="100"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(-45)"
                >
                    <path
                        id="stripePath"
                        d="M 0,0 L 0,100"
                        stroke="black"
                        strokeWidth="100"
                        className={style.backgroundStripes}
                    />
                </pattern>
            </defs>
            <g id="rect">
                <rect id="playe" width="1920" height="1080" fill="url(#stripePattern)" />
            </g>
        </svg>
    );
};

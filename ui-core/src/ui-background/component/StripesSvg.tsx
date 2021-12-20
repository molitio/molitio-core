import React from 'react';
import { createUseStyles } from 'react-jss';

export const StripesSvg: React.FC = () => {
    const isBackground = false;

    const bckg = {
        background: {
            position: 'fixed',
            height: '100%',
            width: '100%',
        },
        backgroundStripes: {
            '& rect:hover': {
                fill: 'transparent',
                strokeWidth: 2,
                stroke: 'yellow',
            },
            '& #stripes': {
                fill: 'aqua',
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
            '& rect:hover': {
                fill: 'transparent',
                strokeWidth: 2,
                stroke: 'yellow',
            },
            '& #stripes': {
                fill: 'aqua',
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
            className={style.background}
            preserveAspectRatio="xMidYMid slice"
            id="stripe-background_a"
            version="1.1"
            viewBox="0 0 1920 1080"
            xmlns="http://www.w3.org/2000/svg"
        >
            <clipPath id="myClip">
                <rect x="0" y="0" width="100%" height="100%" />
            </clipPath>
            <g width="100px" height="100px">
                <g>
                    <rect
                        x="-7.1054e-15"
                        width="100%"
                        height="100%"
                        fill="#2b2b2b"
                        fillRule="evenodd"
                        strokeWidth="14.547"
                    />
                </g>
                <g
                    id="stripes"
                    className={style.backgroundStripes}
                    fill="#363636"
                    fillOpacity=".87059"
                    fillRule="evenodd"
                    strokeWidth=".6404"
                    clipPath="url(#myClip)"
                >
                    <rect
                        id="stripe-background_c"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="-733.07"
                        y="635.7"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_d"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="-572.12"
                        y="474.75"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_e"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="-411.16"
                        y="313.79"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_f"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="-250.21"
                        y="152.84"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_g"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="-89.251"
                        y="-8.1171"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_h"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="232.66"
                        y="-330.03"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_i"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="71.704"
                        y="-169.07"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_j"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="393.61"
                        y="-490.98"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_k"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="715.52"
                        y="-812.89"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_l"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="554.57"
                        y="-651.94"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_m"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="876.48"
                        y="-973.85"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_n"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="1037.4"
                        y="-1134.8"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_o"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="1198.4"
                        y="-1295.8"
                        width="1578.7"
                        height="94.453"
                    />
                    <rect
                        id="stripe-background_p"
                        transform="matrix(.68342 .73002 -.68342 .73002 0 0)"
                        x="1359.3"
                        y="-1456.7"
                        width="1578.7"
                        height="94.453"
                    />
                </g>
            </g>
        </svg>
    );
};

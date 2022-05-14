import React from 'react';
import { createUseStyles } from 'react-jss';

export const FlatColorSvg: React.FC = () => {
    const style = createUseStyles({
        background: {
            width: '100%',
            top: 0,
        },
    }).apply({});

    return (
        <svg className={style.background} version="1.1" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
            <g>
                <rect
                    x="-7.1054e-15"
                    width="1920"
                    height="1080"
                    fill="#2b2b2b"
                    fillRule="evenodd"
                    strokeWidth="14.547"
                />
            </g>
        </svg>
    );
};

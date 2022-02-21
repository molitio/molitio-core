import React from 'react';
import { createUseStyles } from 'react-jss';
import { StripesSvg } from 'ui-svg';

export const StripedBackground: React.FC = () => {
    const style = createUseStyles({
        backgroundContainer: {
            top: 0,
            left: 0,
            position: 'fixed',

            height: '100%',
            width: '100%',
            zIndex: -100,
            pointerEvents: 'none',
        },
    }).apply({});

    return (
        <div className={style.backgroundContainer}>
            <StripesSvg dimensions={'FULLSCREEN'} />
        </div>
    );
};

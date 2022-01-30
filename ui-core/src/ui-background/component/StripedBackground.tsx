import React from 'react';
import { createUseStyles } from 'react-jss';
import { StripesSvg } from 'ui-svg';

export const StripedBackground: React.FC = () => {
    const style = createUseStyles({
        componentContainer: {
            position: 'fixed',
            height: '100vh',
            width: '100vw',
            pointerEvents: 'none',
        },
    }).apply({});

    return (
        <div className={style.componentContainer}>
            <StripesSvg dimensions={'FULLSCREEN'} />
        </div>
    );
};

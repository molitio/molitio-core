import React from 'react';
import { createUseStyles } from 'react-jss';
import { StripesSvg } from 'ui-svg';

export const StripedBackground: React.FC = ({ children }) => {
    const style = createUseStyles({
        componentContainer: {
            position: 'relative',
        },
        componentContent: {
            /* position: 'absolute', */
            /*      
            display: 'none',
            margin: 0,
            position: 'fixed',
            backgroundColor: 'transparent',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            width: '100vw',
            height: '100vh', */
        },
    }).apply({});

    return (
        <div className={style.componentContainer}>
            {/*<StripesSvg background-type={BACKGROUND_TYPES.FlatWithStripes} />*/}
            <StripesSvg />
            <div className={style.componentContent}>{children}</div>
        </div>
    );
};

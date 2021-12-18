import React from 'react';
import { createUseStyles } from 'react-jss';

import flatBackground from '../svg/flatBackground.svg';
import stripeBackground from '../svg/stripeBackground.svg';

export const StripedBackground: React.FC = () => {
    const useStyles = createUseStyles({
        flatBackground: {
            margin: 0,
            position: 'fixed',
            backgroundColor: 'transparent',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            zIndex: -90,
            backgroundImage: `url(${flatBackground})`,
            width: '100vw',
            height: '100vh',
        },
        stripedBackground: {
            margin: 0,
            position: 'fixed',
            backgroundColor: 'transparent',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            zIndex: -90,
            backgroundImage: `url(${stripeBackground})`,
            width: '100vw',
            height: '100vh',
        },
    });

    const style = useStyles();

    return (
        <>
            <div className={style.flatBackground}></div>
            <div className={style.stripedBackground}></div>
        </>
    );
};

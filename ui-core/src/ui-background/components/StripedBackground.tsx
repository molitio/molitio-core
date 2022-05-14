import React from 'react';
import { createUseStyles } from 'react-jss';
import { StripedBackgroundProps } from '../interfaces/StripedBackgroundProps';
import { StripesSvg } from 'ui-svg';

export const StripedBackground: React.FC<StripedBackgroundProps> = ({ ...props }) => {
    const style = createUseStyles({
        backgroundContainer: {
            top: 'env(safe-area-inset-top, 0px)',
            left: 'env(safe-area-inset-left, 0px)',
            position: 'fixed',

            width: 'calc(env(safe-area-inset-left, 0px) + 100% + env(safe-area-inset-right, 0px))',
            height: 'calc(env(safe-area-inset-top, 0px) + 100% + env(safe-area-inset-bottom, 0px))',
            zIndex: -100,
            pointerEvents: 'none',
        },
    }).apply({});

    return (
        <div className={style.backgroundContainer}>
            <StripesSvg
                dimensions={'FULLSCREEN'}
                embededImageSrc={props.backgroundEffectSrc}
                highlightStripes={props.highlightStripes}
            />
        </div>
    );
};

import React from 'react';
import { createUseStyles } from 'react-jss';
import { StripedBackgroundProps } from '../interfaces/StripedBackgroundProps';
import { StripesSvg } from 'ui-svg';

export const StripedBackground: React.FC<StripedBackgroundProps> = ({ ...props }) => {
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
            <StripesSvg
                dimensions={'FULLSCREEN'}
                embededImageSrc={props.backgroundEffectSrc}
                highlightStripes={props.highlightStripes}
            />
        </div>
    );
};

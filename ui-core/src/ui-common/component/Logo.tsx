import React from 'react';
import { createUseStyles } from 'react-jss';
import { LogoProps } from 'ui-common/interface/LogoProps';

export const LargeLogoDimensions = {
    width: '300px',
    height: '300px',
};

export const Logo: React.FC<LogoProps> = ({ ...props }: LogoProps) => {
    const style = createUseStyles({
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: '90',
        },
        dimensions: {
            width: LargeLogoDimensions.width,
            height: LargeLogoDimensions.height,
            opacity: '0.7'
        },
    }).apply({});
    return <img className={`${style.center} ${style.dimensions}`} src={props.url} />;
};

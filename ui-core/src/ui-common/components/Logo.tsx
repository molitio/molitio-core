import React from 'react';
import { createUseStyles } from 'react-jss';
import { LogoProps } from '../interfaces/LogoProps';

export const LargeLogoDimensions = {
    width: '300px',
    height: '300px',
};

export const Logo: React.FC<LogoProps> = ( props: LogoProps) => {

  const {opacity, url} = props;

    const style = createUseStyles({
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: '90',
        },
        dimensions: {
            opacity: opacity,
        },
    }).apply({});

    return <img className={`${style.center} ${style.dimensions}`} src={url} />;
};

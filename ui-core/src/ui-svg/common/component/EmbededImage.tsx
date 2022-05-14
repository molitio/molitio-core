import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from '../interface/SvgComponentProps';

export const EmbededImage: React.FC<SvgComponentProps> = ({ ...props }: SvgComponentProps) => {
    const componentHeight = props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.height ?? 'auto';
    const componentWidth = props.dimensions === 'FULLSCREEN' ? '100%' : props.dimensions?.width ?? 'auto';

    const style = createUseStyles({
        dimensions: {
            opacity: props.opacity,
            pointerEvents: 'none',
        },
    }).apply({});

    return (
        <image
            className={`${style.dimensions}`}
            width={componentWidth}
            height={componentHeight}
            preserveAspectRatio="xMaxYMax slice"
            xlinkHref={props.embededImageSrc}
        />
    );
};

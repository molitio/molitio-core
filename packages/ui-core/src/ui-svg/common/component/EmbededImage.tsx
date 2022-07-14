import React from 'react';
import { createUseStyles } from 'react-jss';
import { SvgComponentProps } from '../interface/SvgComponentProps';

export const EmbededImage: React.FC<SvgComponentProps> = (props: SvgComponentProps) => {
    const { dimensions, opacity, embededImageSrc } = props;

    const componentHeight = dimensions === 'FULLSCREEN' ? '100%' : dimensions?.height ?? 'auto';
    const componentWidth = dimensions === 'FULLSCREEN' ? '100%' : dimensions?.width ?? 'auto';

    const style = createUseStyles({
        dimensions: {
            opacity: opacity,
            pointerEvents: 'none',
        },
    }).apply({});

    return (
        <image
            className={`${style.dimensions}`}
            width={componentWidth}
            height={componentHeight}
            preserveAspectRatio="xMaxYMax slice"
            xlinkHref={embededImageSrc}
        />
    );
};

import React from 'react';
import { SvgEmbeddedHtmlProps } from '../interface/SvgEmbeddedHtmlProps';

export const EmbededHtml: React.FC<SvgEmbeddedHtmlProps & React.HTMLAttributes<HTMLDivElement>> = (props) => {

const {x, y, width, height, className, children } = props;

    const xmlProps = {
        xmlns: 'http://www.w3.org/2000/xhtml',
    };
    return (
        <foreignObject x={x} y={y} width={width} height={height}>
            <div {...xmlProps}>
                <div className={className}>{children}</div>
            </div>
        </foreignObject>
    );
};

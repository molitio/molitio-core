import React from 'react';
import { SvgEmbeddedHtmlProps } from '../interface/SvgEmbeddedHtmlProps';

export const EmbededHtml: React.FC<SvgEmbeddedHtmlProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    const xmlProps = {
        xmlns: 'http://www.w3.org/2000/xhtml',
    };
    return (
        <foreignObject x={props.x} y={props.y} width={props.width} height={props.height}>
            <div {...xmlProps}>
                <div className={props.className}>{props.children}</div>
            </div>
        </foreignObject>
    );
};

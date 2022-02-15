import React from 'react';
import { SvgEmbeddedHtmlProps } from '../interface/SvgEmbeddedHtmlProps';

export const SvgEmbeddedHtml: React.FC<
    SvgEmbeddedHtmlProps & React.HTMLAttributes<HTMLDivElement> & React.HTMLAttributes<SVGElement>
> = ({ ...props }) => {
    const xmlProps = {
        xmlns: 'http://www.w3.org/2000/xhtml',
        xmlnsXlink: 'http://www.w3.org/2000/xlink',
    };
    return (
        <foreignObject x={props.x} y={props.y} width={props.width} height={props.height}>
            <div {...xmlProps} className={props.className}>
                {props.children}
            </div>
        </foreignObject>
    );
};

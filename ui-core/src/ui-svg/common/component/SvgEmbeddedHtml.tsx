import React from 'react';
import { SvgEmbeddedHtmlProps } from '../interface/SvgEmbeddedHtmlProps';

export const SvgEmbeddedHtml: React.FC<SvgEmbeddedHtmlProps & React.HTMLAttributes<HTMLDivElement>> = ({
    ...props
}) => {
    return <div {...props}>{props.children}</div>;
};

import React from 'react';
import { PageTagProps } from '../interfaces/PageTagProps';

export const PageTag: React.FC<PageTagProps> = ({ ...props }: PageTagProps) => {
    return <span>{`tag: ${props.tag.pageName} theme: ${props.tag.theme}`}</span>;
};

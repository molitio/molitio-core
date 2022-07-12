import React from 'react';
import { PageTagProps } from '../interfaces/PageTagProps';

export const PageTag: React.FC<PageTagProps> = (props: PageTagProps) => {
    const { tag } = props;

    return <span>{`tag: ${tag.pageName} theme: ${tag.theme}`}</span>;
};

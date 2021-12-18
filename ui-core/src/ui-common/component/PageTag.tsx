import React from 'react';
import { PageTagProps } from '../interface/PageTagProps';

export const PageTag: React.FC<PageTagProps> = ({ data }: PageTagProps) => {
    return <span>{`tag: ${data.tag} theme: ${data.theme}`}</span>;
};

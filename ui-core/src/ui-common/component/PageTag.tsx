import React from 'react';
import { PageTagProps } from 'ui-core-models';

export const PageTag: React.FC<PageTagProps> = ({ data }: PageTagProps) => {
    return <span>{`tag: ${data.tag} theme: ${data.theme}`}</span>;
};

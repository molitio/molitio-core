import React from 'react';
import { PageTagProps } from '../ui-core-models/PageTagProps';

export const PageTag: React.FC<PageTagProps> = ({ tag, theme }: PageTagProps) => {
    return (
        <span>
            {`tag: ${tag} theme: ${theme}`}
        </span>
    );
};

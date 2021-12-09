import React from 'react';
import { PageTagProps } from '../ui-core-models/interface/Page/PageTagProps';

export const PageTag: React.FC<PageTagProps> = ({ tag, theme }: PageTagProps) => {
    return (
        <span>
            {`tag: ${tag} theme: ${theme}`}
        </span>
    );
};

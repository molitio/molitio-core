import React from 'react';
import { createUseStyles } from 'react-jss';
import { MultiColumnPageProps } from '../interfaces/MultiColumnPageProps';

export const MultiColumnPage: React.FC<MultiColumnPageProps> = ({ ...props }) => {
    const style = createUseStyles({
        pageBackground: {
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
        },
    }).apply({});

    return <div className={style.pageBackground}>{props.pageSections.map((section) => section.element)}</div>;
};

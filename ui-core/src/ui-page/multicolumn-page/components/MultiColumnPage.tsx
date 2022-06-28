import React from 'react';
import { createUseStyles } from 'react-jss';
import { WithChildren } from 'ui-core-schema';
import { MultiColumnPageProps } from '../interfaces/MultiColumnPageProps';

export const MultiColumnPage: React.FC<MultiColumnPageProps & WithChildren> = ({ ...props }) => {
    const style = createUseStyles({
        pageBackground: {
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
        },
    }).apply({});

    return <div className={style.pageBackground}>{props.pageSections.map((section) => section.element)}</div>;
};

import React from 'react';
import { createUseStyles } from 'react-jss';
import { MultiColumnPageProps } from '../interfaces/MultiColumnPageProps';

export const MultiColumnPage: React.FC<MultiColumnPageProps & React.PropsWithChildren> = (props) => {
    const { pageSections } = props;

    const style = createUseStyles({
        pageBackground: {
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
        },
    }).apply({});

    return (
        <div className={style.pageBackground}>
            {pageSections.map((section, index) => (
                <div key={index}>{section.element}</div>
            ))}
        </div>
    );
};

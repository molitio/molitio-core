import React from 'react';
import { nanoid } from 'nanoid';
import { createUseStyles } from 'react-jss';
import { MultiColumnLayoutProps } from 'ui-layout';
import { DevHighlight } from 'ui-style-service';

export const MultiColumnLayout: React.FC<MultiColumnLayoutProps> = (props) => {
    const { layoutColumns } = props;

    const style = createUseStyles({
        landing: {
            minHeight: 'calc(100vh - 10px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minMax(10vw, 1fr))',
        },
        pageColumn: {
            height: '100%',
            textAlign: 'center',
        },
        devHighlight: {
            ...DevHighlight,
        },
    }).apply({});

    const columnCollectionKey = nanoid();

    console.log(`columnCollectionKey: ${columnCollectionKey}`);

    return (
        <div key={columnCollectionKey} className={`${style.landing}`}>
            {layoutColumns.map((layoutColumn, index) => (
                <div key={index} className={`${style.pageColumn} ${style.devHighlight}`}>
                    {layoutColumn}
                </div>
            ))}
        </div>
    );
};

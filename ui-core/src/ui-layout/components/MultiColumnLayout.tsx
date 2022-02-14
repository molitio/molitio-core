import React from 'react';
import { createUseStyles } from 'react-jss';
import { MultiColumnLayoutProps } from 'ui-layout';
import { DevHighlight } from 'ui-context';

export const MultiColumnLayout: React.FC<MultiColumnLayoutProps> = ({ ...props }) => {
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

    return (
        <div className={`${style.landing}`}>
            {props.layoutColumns.map((layoutColumn) => (
                <div className={`${style.pageColumn} ${style.devHighlight}`}>{layoutColumn}</div>
            ))}
        </div>
    );
};

import React from 'react';
import { createUseStyles } from 'react-jss';
import { DevHighlight } from 'ui-theme-context';

export const LayoutColumn: React.FC = ({ ...props }) => {
    const style = createUseStyles({
        pageColumn: {
            height: '100%',
            textAlign: 'center',
        },
        devHighlight: {
            ...DevHighlight,
        },
    }).apply({});

    return <div className={`${style.pageColumn} ${style.devHighlight}`}>{props.children}</div>;
};

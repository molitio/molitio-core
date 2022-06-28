import React from 'react';
import { createUseStyles } from 'react-jss';
import { DevHighlight } from 'ui-context';
import { WithChildren } from 'ui-core-schema';

export const LayoutColumn: React.FC<WithChildren> = ({ ...props }) => {
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

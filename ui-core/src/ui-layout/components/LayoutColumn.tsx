import React from 'react';
import { nanoid } from 'nanoid';
import { createUseStyles } from 'react-jss';
import { DevHighlight } from 'ui-style-service';

export const LayoutColumn: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    const style = createUseStyles({
        pageColumn: {
            height: '100%',
            textAlign: 'center',
        },
        devHighlight: {
            ...DevHighlight,
        },
    }).apply({});

    return (
        <div key={nanoid()} className={`${style.pageColumn} ${style.devHighlight}`}>
            {children}
        </div>
    );
};

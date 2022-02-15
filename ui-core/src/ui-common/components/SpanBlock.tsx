import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyledThemeContext } from 'ui-context';

export const LargeLogoDimensions = {
    width: '300px',
    height: '300px',
};

export const SpanBlock: React.FC = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        spanBlock: { color: theme.primaryFontColor },
    })).apply({});

    return <span className={`${style.spanBlock} `}> {props.children}</span>;
};

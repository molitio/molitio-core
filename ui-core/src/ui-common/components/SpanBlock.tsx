import React from 'react';
import { createUseStyles } from 'react-jss';
import { TypographyProps } from '../interfaces/TypographyProps';
import { StyledThemeContext } from 'ui-context';

export const SpanBlock: React.FC<TypographyProps> = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        spanBlock: {
            color: props?.color && props?.color === 'primary' ? theme.primaryFontColor : theme.secondaryFontColor,
            fontSize: `${props.rem}rem`,
        },
    })).apply({});

    return <span className={`${style.spanBlock} `}> {props.children}</span>;
};

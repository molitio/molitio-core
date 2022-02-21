import React from 'react';
import { createUseStyles } from 'react-jss';
import { TypographyProps } from '../interfaces/TypographyProps';
import { StyledThemeContext } from 'ui-context';

export const SpanBlock: React.FC<TypographyProps> = ({ ...props }) => {
    const maxContentSpacing = props.maxContent ? { width: 'max-content', height: 'max-content' } : {};

    const style = createUseStyles((theme: StyledThemeContext) => ({
        spanBlock: {
            color: props?.color && props?.color === 'primary' ? theme.primaryFontColor : theme.secondaryFontColor,
            fontSize: `${props.rem}rem`,
            marginTop: props?.marginTop,
            align: props.center ? 'center' : 'inherit',
            ...maxContentSpacing,
        },
    })).apply({});

    return <p className={`${style.spanBlock} `}> {props.children}</p>;
};

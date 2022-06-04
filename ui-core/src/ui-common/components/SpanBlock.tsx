import React from 'react';
import { createUseStyles } from 'react-jss';
import { TypographyProps } from '../interfaces/TypographyProps';
import { StyledThemeContext } from 'ui-context';
import { WithChildren } from 'ui-core-models';

export const SpanBlock: React.FC<TypographyProps & WithChildren> = ({ ...props }) => {
    const maxContentSpacing = props.maxContent ? { width: 'max-content', height: 'max-content' } : {};

    const style = createUseStyles((theme: StyledThemeContext) => ({
        spanBlock: {
            color: props?.color && props?.color === 'primary' ? theme.primaryFontColor : theme.secondaryFontColor,
            fontSize: `${props.rem}rem`,
            marginTop: props?.marginTop,
            ...maxContentSpacing,
        },
    })).apply({});

    return <p className={`${style.spanBlock} `}> {props.children}</p>;
};

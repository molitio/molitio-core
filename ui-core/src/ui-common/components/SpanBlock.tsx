import React from 'react';
import { createUseStyles } from 'react-jss';
import { TypographyProps } from '../interfaces/TypographyProps';
import { StyledThemeContext } from 'ui-context';

export const SpanBlock: React.FC<TypographyProps> = (props) => {
    const { textContent, color, rem, marginTop } = props;

    const maxContentSpacing = props.maxContent ? { width: 'max-content', height: 'max-content' } : {};

    const style = createUseStyles((themeContext: StyledThemeContext) => ({
        spanBlock: {
            color:
                color && color === 'primary'
                    ? themeContext.theme?.primaryFontColor
                    : themeContext.theme?.secondaryFontColor,
            fontSize: `${rem}rem`,
            marginTop: marginTop,
            ...maxContentSpacing,
        },
    })).apply({});

    return <p className={`${style.spanBlock} `}> {textContent}</p>;
};

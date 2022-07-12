import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyledThemeContext } from 'ui-core-schema';
import { TypographyProps } from '../interfaces/TypographyProps';

export const SpanBlock: React.FC<TypographyProps> = (props) => {
    const { maxContent, textContent, color, rem, marginTop } = props;

    const maxContentSpacing = maxContent ? { width: 'max-content', height: 'max-content' } : {};

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

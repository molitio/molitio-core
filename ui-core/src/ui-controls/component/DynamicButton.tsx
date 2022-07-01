import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { ButtonStyleVariant, StyledThemeContext } from 'ui-core-schema';
import { DynamicButtonProps } from '../interface/DynamicButtonProps';
import { getStyleVariantRules } from 'ui-style-service';

export const DynamicButton: React.FC<DynamicButtonProps> = (props) => {
    const { styleVariant, label, children } = props;

    const styles = createUseStyles({
        testBackground: {
            backgroundColor: '#e5db7f',
        },
        buttonStyleRounded: {
            border: 0,
            borderRadius: '6px',
            cursor: 'pointer',
        },
        btnBasic: {
            borderStyle: 'none',
            boxSizing: 'border-box',
            cursor: 'pointer',
            display: 'inline-block',
            fontFamily: 'Helvetica Neue Arial sans-serif',
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: 1.5,
            margin: 0,
            maxWidth: '200px',
            minHeight: '44px',
            minWidth: '10px',
            outline: 'none',
            overflow: 'hidden',
            padding: '9px 20px 8px',
            position: 'relative',
            textAlign: 'center',
            textTransform: 'none',
            userSelect: 'none',
            '-webkit-user-select': 'none',
            touchAction: 'manipulation',
            width: '100%',
            '& :hover :focus': {
                opacity: 0.75,
            },
        },
    }).apply({});

    const themeContext = useTheme<StyledThemeContext>();
    const createStyleVariantRules = (variant: ButtonStyleVariant) => {
        return createUseStyles(() => ({
            buttonStyle: {
                backgroundColor: themeContext.theme?.backgroundColor,
                ...getStyleVariantRules(variant),
            },
        })).apply({});
    };
    const themeStyle = createStyleVariantRules(styleVariant);

    return (
        <button data-testid="dynamic-button" className={`${themeStyle.buttonStyle} ${styles.btnBasic}`}>
            {label ?? children}
        </button>
    );
};

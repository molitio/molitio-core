import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { ButtonStyleVariant } from 'ui-core-schema';
import { DynamicButtonProps } from '../interface/DynamicButtonProps';
import { getStyleVariantRules } from 'ui-style-service';
import styles from '../styles/DynamicButton.module.scss';
import { StyledThemeContext } from 'ui-context';

export const DynamicButton: React.FC<DynamicButtonProps> = (props) => {

const {styleVariant, label, children} = props;

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

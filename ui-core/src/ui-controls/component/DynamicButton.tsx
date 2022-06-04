import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { ButtonStyleVariant } from 'ui-core-models';
import { DynamicButtonProps } from '../interface/DynamicButtonProps';
import { getStyleVariantRules } from 'style-service';
import styles from '../styles/DynamicButton.module.scss';
import { StyledThemeContext } from 'ui-context';

export const DynamicButton: React.FC<DynamicButtonProps> = ({ ...props }) => {
    const theme = useTheme<StyledThemeContext>();
    const createStyleVariantRules = (variant: ButtonStyleVariant) => {
        return createUseStyles(() => ({
            buttonStyle: {
                backgroundColor: theme?.backgroundColor,
                ...getStyleVariantRules(variant),
            },
        })).apply({});
    };
    const themeStyle = createStyleVariantRules(props.styleVariant);

    return (
        <button data-testid="dynamic-button" className={`${themeStyle.buttonStyle} ${styles.btnBasic}`}>
            {props.label ?? props.children}
        </button>
    );
};
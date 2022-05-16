import React from 'react';
import { createUseStyles } from 'react-jss';
import { ButtonStyleVariant } from 'ui-core-models';
import { ButtonProps } from '../interface/ButtonProps';
import { getStyleVariantRules } from 'style-service';
import styles from '../styles/Button.module.scss';

export const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
    const createStyleVariantRules = (variant: ButtonStyleVariant) => {
        return createUseStyles(() => ({
            buttonStyle: {
                ...getStyleVariantRules(variant),
            },
        })).apply({});
    };

    return (
        <button className={`${createStyleVariantRules(props.styleVariant)} ${styles.btnBasic}`}>
            {props.label ?? props.children}
        </button>
    );
};

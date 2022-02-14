import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyleVariant } from 'ui-core-models';
import { StyledThemeContext } from 'ui-context';
import { ButtonProps } from '../interface/ButtonProps';

export const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
    let buttonStyleRounded = {
        border: 0,
        borderRadius: '6px',
        cursor: 'pointer',
    };
    let buttonStyleRectangle = {
        border: 0,
        cursor: 'pointer',
    };

    const getVariantStyle = () => {
        switch (props.styleVariant) {
            case StyleVariant.ROUNDED:
                return buttonStyleRounded;
            case StyleVariant.RECTANGLE:
                return buttonStyleRectangle;
            default:
                return { buttonStyle: {} };
        }
    };

    const style = createUseStyles((theme: StyledThemeContext) => ({
        buttonStyle: {
            padding: props.padding,
            backgroundColor: theme.primary,
            color: theme.secondary,
            ...getVariantStyle(),
        },
    })).apply({});

    return <button className={props.className ?? style.buttonStyle}>{props.label ?? props.children}</button>;
};

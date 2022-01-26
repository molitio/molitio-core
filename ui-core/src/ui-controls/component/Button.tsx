import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyleVariant } from 'ui-core-models';
import { IThemeContext } from 'ui-theme-context';
import { ButtonProps } from '../interface/ButtonProps';

export const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    let buttonStyleRounded = {
        border: '1px solid blue',
        borderRadius: '16px',
        cursor: 'pointer',
    };
    let buttonStyleRectangle = {
        border: '1px solid blue',
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

    const style = createUseStyles((theme: IThemeContext) => ({
        buttonStyle: {
            padding: '8px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            ...getVariantStyle(),
        },
    })).apply({});

    return <button className={props.className ?? style.buttonStyle}>{props.label ?? props.children}</button>;
};

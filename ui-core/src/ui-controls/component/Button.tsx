import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyleVariant } from 'ui-core-models';
import { ButtonProps } from '../interface/ButtonProps';

export const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLDivElement>> = ({ ...props }) => {
    let buttonStyleRounded = {
        buttonStyle: {
            border: '1px solid blue',
            borderRadius: '5px',
            pointerEvents: 'cursor',
        },
    };
    let buttonStyleRectangle = {
        buttonStyle: {
            border: '1px solid blue',
            pointerEvents: 'cursor',
        },
    };

    const getStyle = () => {
        switch (props.styleVariant) {
            case StyleVariant.ROUNDED:
                return buttonStyleRounded;
                break;

            case StyleVariant.RECTANGLE:
                return buttonStyleRectangle;
                break;
            default:
                return { buttonStyle: {} };
                break;
        }
    };
    let useStyles = createUseStyles({ ...getStyle() });

    const style = useStyles();

    return <button className={props.className ?? style.buttonStyle}>{props.customText ?? props.children}</button>;
};

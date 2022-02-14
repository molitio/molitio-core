import React from 'react';
import { createUseStyles } from 'react-jss';
import { AppShellProps } from '../interfaces/AppShellProps';
import { StyledThemeContextProvider } from 'ui-context';

const globalStyles = {
    '@global': {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        html: {
            fontSize: '16px',
            overflowY: 'hidden',
            overflowX: 'hidden',
        },
        '@media (max-width: 900px)': {
            html: {
                fontSize: '15px',
            },
        },
        '@media (max-width: 400px)': {
            html: {
                fontSize: '13px',
            },
        },
        body: {
            width: '100%',
            minHeight: '100vh',
        },

        'body::-webkit-scrollbar': {
            /*               width: '7px', */
        },
        '::-webkit-scrollbar': {
            /*             '-webkit-appearance': 'none',
                        width: '7px', */
        },
        '::-webkit-scrollbar-thumb': {
            /*        borderRadius: '4px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        '-webkit-box-shadow': '0 0 1px rgba(255, 255, 255, 0.5)', */
        },
    },
};

export const AppShell: React.FC<AppShellProps> = ({ ...props }) => {
    const classes = createUseStyles({
        shellMain: {
            border: '3px dashed purple',
        },
        ...globalStyles,
    }).apply({});

    //Implement content tree, be able to define content sections
    return (
        <main className={classes.shellMain}>
            <StyledThemeContextProvider themeName={props.themeName}>{props.children}</StyledThemeContextProvider>
        </main>
    );
};

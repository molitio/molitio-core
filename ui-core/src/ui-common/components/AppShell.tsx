import React from 'react';
import { createUseStyles } from 'react-jss';
import { AppShellProps } from '../interfaces/AppShellProps';
import { StyledThemeContextProvider } from 'ui-context';
/* 
const defaultStyles = {
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
    },
    '@global': {
        '*': {
        },
        html: {
        },
        '@media (max-width: 900px)': {
            html: {
            },
        },
        '@media (max-width: 400px)': {
            html: {
            },
        },
        body: {
        },
    }, 
};
*/

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
    },
};

const shellMain = {
    shellMain: {
        border: '3px dashed purple',
    },
};

export const AppShell: React.FC<AppShellProps> = ({ ...props }) => {
    const styleOverrides = props.applyGlobalStyleRules ? globalStyles : {};
    const classes = createUseStyles({
        ...shellMain,
        ...styleOverrides,
    }).apply({});

    //Implement content tree, be able to define content sections
    return (
        <main className={classes.shellMain}>
            <StyledThemeContextProvider themeName={props.themeName}>{props.children}</StyledThemeContextProvider>
        </main>
    );
};

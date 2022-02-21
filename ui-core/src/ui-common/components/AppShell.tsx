import React from 'react';
import { createUseStyles } from 'react-jss';
import { AppShellProps } from '../interfaces/AppShellProps';
import { StyledThemeContextProvider } from 'ui-context';
import { ThemeNameTags } from 'ui-core-models';

const globalStyles = {
    '@global': {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        html: {
            fontSize: '18px',
            fontFamily: 'Open Sans',
            overflowY: 'hidden',
            overflowX: 'hidden',
        },
        '@media (max-width: 900px)': {
            html: {
                fontSize: '14px',
            },
        },
        '@media (max-width: 400px)': {
            html: {
                fontSize: '12px',
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
        height: '100vh',
        width: '100vw',
        border: '0px dashed purple',
    },
};

export const AppShell: React.FC<AppShellProps> = ({ ...props }) => {
    const [selectedTheme, setSelectedTheme] = React.useState<ThemeNameTags>();

    React.useEffect(() => {
        setSelectedTheme(props.themeName);
    }, [props.themeName]);

    const styleOverrides = props.applyGlobalStyleRules ? globalStyles : {};
    const classes = createUseStyles({
        ...shellMain,
        ...styleOverrides,
    }).apply({});

    //Implement content tree, be able to define content sections
    //Implement possibly multiple font family [] prop option

    const head = document.querySelector('head');
    const fontFamily = document.createElement('link');
    fontFamily.type = 'text/css';
    fontFamily.rel = 'stylesheet';
    fontFamily.href = 'https://fonts.googleapis.com/css?family=Open Sans';
    head?.appendChild(fontFamily);

    return (
        <main className={classes.shellMain}>
            <StyledThemeContextProvider themeName={selectedTheme}>{props.children}</StyledThemeContextProvider>
        </main>
    );
};

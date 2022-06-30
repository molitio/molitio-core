import React from 'react';
import { createUseStyles } from 'react-jss';
import { AppShellProps } from '../interfaces/AppShellProps';
import { isClient } from '../services/Platform';
import { StyledThemeContextProvider, DeviceContextProvider } from 'ui-context';
import { ThemeNameTags } from 'ui-core-schema';

const globalStyles = {
    '@global': {
        '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
        },
        html: {
            fontSize: '20px',
            fontFamily: 'Open Sans',
            overflowY: 'hidden',
            overflowX: 'hidden',
            pointerEvents: 'none',
            paddingTop: 'env(safe-area-inset-top, 0px)',
            paddingLeft: 'env(safe-area-inset-left, 0px)',
            paddingRight: 'env(safe-area-inset-right, 0px)',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
        },
        '@media (max-width: 1400px)': {
            html: {
                fontSize: '20px',
            },
        },
        '@media (max-width: 1200px)': {
            html: {
                fontSize: '20px',
            },
        },
        '@media (max-width: 992px)': {
            html: {
                fontSize: '20px',
            },
        },
        '@media (max-width: 768px)': {
            html: {
                fontSize: '20px',
            },
        },
        '@media (max-width: 576px)': {
            html: {
                fontSize: '20px',
            },
        },
        body: {
            /*  width: '100vw',
            minHeight: '100vh', */
        },
    },
};

const shellMain = {
    shellMain: {
        /*      height: '100vh',
        width: '100vw', */
        border: '0px dashed purple',
    },
};

/***
 * AppShell provides a wrapper around componets and pages to provide theme context and global style rules
 *
 * @params AppShellProps
 */

export const AppShell: React.FC<AppShellProps & React.PropsWithChildren> = (props) => {
    
    const { children, themeName, applyGlobalStyleRules } = props;

    const [selectedTheme, setSelectedTheme] = React.useState<ThemeNameTags>();

    React.useEffect(() => {
        const effect = async () => {
            setSelectedTheme(themeName);
        };
        effect();
    }, [themeName]);

    const styleOverrides = applyGlobalStyleRules ? globalStyles : {};
    const classes = createUseStyles({
        ...shellMain,
        ...styleOverrides,
    }).apply({});

    //Implement content tree, be able to define content sections
    //Implement possibly multiple font family [] prop option

    if (isClient()) {
        const head = document.querySelector('head');
        const fontFamily = document.createElement('link');
        fontFamily.type = 'text/css';
        fontFamily.rel = 'stylesheet';
        fontFamily.href = 'https://fonts.googleapis.com/css?family=Open Sans';
        head?.appendChild(fontFamily);
    }

    return (
        <div>
            <React.StrictMode>
                <div className={classes.shellMain}>
                    <DeviceContextProvider>
                        <StyledThemeContextProvider themeName={selectedTheme}>{children}</StyledThemeContextProvider>
                    </DeviceContextProvider>
                </div>
            </React.StrictMode>
        </div>
    );
};

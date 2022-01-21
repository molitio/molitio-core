import React, { useEffect } from 'react';
import { ThemeContextProviderProps } from '../interface/ThemeContextProviderProps';
import { getThemes } from '../store/ThemeContextStore';
import { IThemeContext, YellowHighlight } from 'ui-theme-context';
import { ThemeProvider } from 'react-jss';

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ ...props }) => {
    const [themeMap, setThemeMap] = React.useState(new Map<string, IThemeContext>());
    const [selectedTheme, setSelectedTheme] = React.useState<IThemeContext>({
        themeName: 'testTheme01',
        backgroundColor: 'gray',
        interactiveHighlight: {
            ...YellowHighlight,
        },
    });

    /*
    useEffect(() => {
        setThemeMap(getThemes());
        //setSelectedTheme(themeMap.get());
    }, []); */

    //const ThemeContext = React.createContext<IThemeContext>({});

    return <ThemeProvider theme={{ ...selectedTheme }}>{props.children}</ThemeProvider>;
};

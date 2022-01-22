import React, { useEffect } from 'react';
import { ThemeContextProviderProps } from '../interface/ThemeContextProviderProps';
import { getThemes } from '../store/ThemeContextStore';
import { IThemeContext } from 'ui-theme-context';
import { ThemeProvider } from 'react-jss';

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ ...props }) => {
    const [themeMap, setThemeMap] = React.useState(new Map<string, IThemeContext>());
    const [selectedTheme, setSelectedTheme] = React.useState<IThemeContext>({});

    useEffect(() => {
        const populateThemes = async () => {
            const themes = await getThemes();
            if (themes) {
                setThemeMap(themes);
            }
        };

        populateThemes();
    }, []);

    useEffect(() => {
        const setTheming = async () => {
            const theme = themeMap.get(props.themeName ?? 'default') ?? {};
            if (theme) {
                setSelectedTheme(theme);
            }
        };

        setTheming();
    }, [themeMap, props.themeName]);

    return <ThemeProvider theme={selectedTheme}>{props.children}</ThemeProvider>;
};

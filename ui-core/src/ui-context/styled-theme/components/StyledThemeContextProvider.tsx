import React from 'react';
import { StyledThemeContextProviderProps } from '../interface/StyledThemeContextProviderProps';
import { getThemes } from '../store/ThemeContextStore';
import { StyledThemeContext } from '../interface/StyledThemeContext';
import { ThemeProvider } from 'react-jss';

export const StyledThemeContextProvider: React.FC<StyledThemeContextProviderProps> = ({ ...props }) => {
    const [themeMap, setThemeMap] = React.useState(new Map<string, StyledThemeContext>());
    const [selectedTheme, setSelectedTheme] = React.useState<StyledThemeContext>({});

    React.useEffect(() => {
        const effect = async () => {
            const themes = await getThemes();
            if (themes) {
                setThemeMap(themes);
            }
        };

        effect();
    }, []);

    React.useEffect(() => {
        const effect = async () => {
            const theme = themeMap.get(props.themeName ?? 'default') ?? {};
            if (theme) {
                setSelectedTheme(theme);
            }
        };

        effect();
    }, [themeMap, props.themeName]);

    return <ThemeProvider theme={selectedTheme}>{props.children}</ThemeProvider>;
};

import React from 'react';
import { StyledThemeContextProviderProps } from '../interfaces/StyledThemeContextProviderProps';
import { getThemes } from '../hooks/ThemeContextStore';
import { ThemeProvider } from 'react-jss';
import { StyledThemeContext } from '@molitio/molitio-schema';

export const StyledThemeContextProvider: React.FC<StyledThemeContextProviderProps & React.PropsWithChildren> = (
    props,
) => {
    const [themeMap, setThemeMap] = React.useState(Object.create({}));
    const [selectedTheme, setSelectedTheme] = React.useState<StyledThemeContext | {}>({});

    const { children } = props;

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
            theme.deviceType = props.deviceType;
            if (theme) {
                setSelectedTheme(theme);
            }
        };

        effect();
    }, [themeMap, props.themeName]);

    return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

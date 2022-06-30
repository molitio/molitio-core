import React from 'react';
import { StyledThemeContextProviderProps } from '../../ui-context/styled-theme/interface/StyledThemeContextProviderProps';
import { getThemes } from '../../ui-context/styled-theme/store/ThemeContextStore';
import { StyledThemeContext } from '../../ui-context/styled-theme/interface/StyledThemeContext';
import { ThemeProvider } from 'react-jss';

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
        /*      const effect = async () => {
            const theme = themeMap.get(props.themeName ?? 'default') ?? {};
            theme.deviceType = props.deviceType;
            if (theme) {
                setSelectedTheme(theme);
            }
        };

        effect(); */
    }, [themeMap, props.themeName]);

    return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};

import React from 'react';
import { StyledThemeContextProviderProps } from '../interface/StyledThemeContextProviderProps';
import { getThemes } from '../store/ThemeContextStore';
import { StyledThemeContext } from '../interface/StyledThemeContext';
import { ThemeProvider } from 'react-jss';
import { WithChildren } from 'ui-core-models';

export const StyledThemeContextProvider: React.FC<StyledThemeContextProviderProps & WithChildren> = ({ ...props }) => {
    const [themeMap, setThemeMap] = React.useState(new Map<string, StyledThemeContext>());
    const [selectedTheme, setSelectedTheme] = React.useState<StyledThemeContext>({});
    const [children, setChildren] = React.useState<React.ReactElement<any, any>>();

    React.useEffect(() => {
        const effect = async () => {
            setChildren(props.children);
        };
        effect();
    }, [props.children]);

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

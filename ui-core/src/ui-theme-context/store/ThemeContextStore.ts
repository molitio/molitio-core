import { YellowHighlight } from 'ui-theme-context';
import { IThemeContext } from '../interface/IThemeContext';

export const getThemes = () => {
    //TODO: connect to backend

    return new Map<string, IThemeContext>([
        ['storybookTheme01', {
            themeName: 'testTheme01', backgroundColor: 'black', interactiveHighlight: {
            ...YellowHighlight
        } }],
    ]);
};




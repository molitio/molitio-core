import { ThemeNameTags, StyledThemeContext } from '@molitio/molitio-schema';
import { OrangeHighlight, YellowHighlight } from '../styles/SvgBorderHighLights';

export const getThemes = async (): Promise<Map<string, StyledThemeContext>> => {
    //TODO: connect to backend
    const commonStyles = {
        gridGroup: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
        verticalGroup: {
            display: 'flex',
            flexDirection: 'column',
        },
        horizontalGroup: {
            display: 'flex',
            flexDirection: 'row',
        },
    };

    const themeMap = new Map<string, StyledThemeContext>([
        [
            ThemeNameTags.BLACK_YELLOW,
            {
                ...commonStyles,
                themeName: 'testTheme01',
                theme: {
                    primary: '#f6c339',
                    secondary: '#2a2a2a',
                    primaryFontColor: 'white',
                    secondaryFontColor: '#6d6e72',
                    backgroundColor: '#2b2b2b',
                    secondaryBackgroundColor: '#363636',

                    interactiveHighlight: {
                        ...YellowHighlight,
                    },
                },
            },
        ],
        [
            ThemeNameTags.TEAM_JAMAICA,
            {
                ...commonStyles,
                themeName: 'testTheme02',
                theme: {
                    primary: 'orange',
                    secondary: 'lightyellow',
                    primaryFontColor: 'white',
                    secondaryFontColor: 'yellow',
                    backgroundColor: 'yellow',
                    secondaryBackgroundColor: 'green',
                    interactiveHighlight: {
                        ...OrangeHighlight,
                    },
                },
            },
        ],
    ]);

    return new Promise((resolve, reject) => {
        try {
            resolve(themeMap);
        } catch (error) {
            reject(error);
        }
    });
};

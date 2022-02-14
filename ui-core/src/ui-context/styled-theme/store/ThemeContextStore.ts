import { ThemeNameTags } from 'ui-core-models';
import { OrangeHighlight, YellowHighlight } from '../styles/SvgBorderHighLights';
import { StyledThemeContext } from '../interface/StyledThemeContext';

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
                themeName: 'testTheme01',
                primary: '#f6c339',
                secondary: 'black',
                backgroundColor: '#2b2b2b',
                secondaryBackgroundColor: '#363636',

                interactiveHighlight: {
                    ...YellowHighlight,
                },
                ...commonStyles,
            },
        ],
        [
            ThemeNameTags.TEAM_JAMAICA,
            {
                themeName: 'testTheme02',
                primary: 'orange',
                secondary: 'lightyellow',
                backgroundColor: 'yellow',
                secondaryBackgroundColor: 'green',
                interactiveHighlight: {
                    ...OrangeHighlight,
                },
                ...commonStyles,
            },
        ],
    ]);

    //console.log(`theme store themes: ${JSON.stringify(themeMap.entries().next())}, map size: ${themeMap.size}`);

    return new Promise((resolve, reject) => {
        try {
            resolve(themeMap);
        } catch (error) {
            reject(error);
        }
    });
};

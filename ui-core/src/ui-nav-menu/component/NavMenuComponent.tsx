import React from 'react';
import { NavSegmentComponent } from './NavSegmentComponent';
import { NavMenuComponentProps } from '../interface/NavMenuComponentProps';
import { TNavPage, StyleContextTags } from '../../ui-core-models';
import { PageTag } from '../../ui-common';
import { IThemeContext, ThemeContextProvider } from '../../ui-theme-context';
import { createUseStyles, useTheme } from 'react-jss';

export const NavMenuComponent: React.FC<NavMenuComponentProps> = ({ ...props }: NavMenuComponentProps) => {
    const [menuPages, setMenuPages] = React.useState<Map<string, TNavPage>>(new Map<string, TNavPage>());

    React.useEffect(() => {
        setMenuPages(new Map([...(props.pageCollection.pageCollection ?? new Map<string, TNavPage>())]));
    }, []);

    const theme = useTheme();

    const style = createUseStyles({
        pageTitle: {
            border: '1px solid blue',
        },
        itemText: {
            color: 'black',
        },
        pageBackground: {
            backgroundColor: theme.backgroundColor,
        },
    }).apply({});

    return (
        <nav>
            <PageTag tag={{ pageName: 'testPage01', theme: 'defaultThemeName' }} />

            <ThemeContextProvider themeName="storybookTheme01">
                <div>
                    <label className={style.pageTitle}> {props.pageCollection.tag} </label>
                    {Array.from(menuPages).map((page) => (
                        <div key={page[0]}>
                            <span>{page[1].pageName}</span>
                            <ul>
                                {(page[1].navSegments ?? []).map((item) => (
                                    <NavSegmentComponent key={item.itemName} navSegment={item} />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </ThemeContextProvider>
        </nav>
    );
};

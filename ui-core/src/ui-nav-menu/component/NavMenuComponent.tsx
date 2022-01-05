import React from 'react';
import { NavSegmentComponent } from './NavSegmentComponent';
import { NavMenuComponentProps } from '../interface/NavMenuComponentProps';
import { TNavPage, StyleContextTags } from '../../ui-core-models';
import { PageTag } from '../../ui-common';
import { StyleContext, StyleContextProvider } from '../../ui-style-context';
import { createUseStyles } from 'react-jss';

export const NavMenuComponent: React.FC<NavMenuComponentProps> = ({ ...props }: NavMenuComponentProps) => {
    const [menuPages, setMenuPages] = React.useState<Map<string, TNavPage>>(new Map<string, TNavPage>());

    React.useEffect(() => {
        setMenuPages(new Map([...(props.pageCollection.pageCollection ?? new Map<string, TNavPage>())]));
    }, []);

    const styleContext = React.useContext(StyleContext);

    const stylePelda = {
        pelda: { color: 'grey', backgroundColor: 'lightgreen' },
    };

    const useStyles = createUseStyles({
        pageTitle: {
            ...stylePelda.pelda,
            border: '1px solid blue',
        },
        itemText: {
            color: 'black',
        },
        pageBackground: {
            backgroundColor: styleContext.styleMap.get(StyleContextTags.THEME_BACKGROUND_IMAGE),
        },
    });

    const componentStyle = useStyles();

    // const navMenuStyle = styleContext.styleMap.get('nav-menu') ?? styleDefault();

    return (
        <nav>
            <PageTag tag={{ pageName: 'testPage01', theme: 'defaultThemeName' }} />

            <StyleContextProvider>
                <div>
                    <label className={componentStyle.pageTitle}> {props.pageCollection.tag} </label>
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
            </StyleContextProvider>
        </nav>
    );
};

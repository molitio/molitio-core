import React from 'react';
import { NavSegmentComponent } from './NavSegmentComponent';
import { NavMenuComponentProps, NavPage } from 'ui-core-models';
import { StyleContextProvider } from '../../style-context/StyleContextProvider';
import { StyleContext } from '../../style-context/StyleContextStore';
import { PageTag } from '../../page-tag/PageTag';
import { createUseStyles } from 'react-jss';

export const NavMenuComponent: React.FC<NavMenuComponentProps> = ({ data }: NavMenuComponentProps) => {
    const [menuPages, setMenuPages] = React.useState<Map<string, NavPage>>(new Map<string, NavPage>());

    React.useEffect(() => {
        setMenuPages(new Map([...(data.pageCollection ?? new Map<string, NavPage>())]));
        console.log(data.pageCollection);
    }, []);

    //console.log(JSON.stringify(StyleContext));
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
        itemBackground: {
            backgroundColor: 'blue',
        },
    });

    const componentStyle = useStyles();

    // const navMenuStyle = styleContext.styleMap.get('nav-menu') ?? styleDefault();

    return (
        <nav>
            <PageTag data={{tag: 'navMenu01', theme:'defaultThemeName'}}  />

            {/*  <StyleContextProvider> */}
            <div>
                <label className={componentStyle.pageTitle}> {data.pageCollectionTag} </label>
                {Array.from(menuPages).map((page) => (
                    <div key={page[0]}>
                        <span>{page[1].pageName}</span>
                        <ul>
                            {(page[1].navSegments ?? []).map((item) => (
                                <NavSegmentComponent key={item.itemName} data={item} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/*    </StyleContextProvider> */}
        </nav>
    );
};

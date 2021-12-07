import React from 'react';
import { UiNavMenuItemComponent } from './UiNavMenuItemComponent';
import { UiNavMenuPageData, UiNavMenuPageDataCollection } from '../index';
import { StyleContextProvider } from '../../style-context/StyleContextProvider';
import { StyleContext } from '../../style-context/StyleContextStore';
import { PageTag } from '../../page-tag/PageTag';
import { createUseStyles } from 'react-jss';

export const UiNavMenuComponent: React.FC<UiNavMenuPageDataCollection> = ({ ...data }: UiNavMenuPageDataCollection) => {
    const [menuPages, setmenuPages] = React.useState<Map<string, UiNavMenuPageData>>(
        new Map<string, UiNavMenuPageData>(),
    );

    React.useEffect(() => {
        setmenuPages(new Map([...(data.pageDataCollection ?? new Map<string, UiNavMenuPageData>())]));
        console.log(data.pageDataCollection);
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
            <PageTag tag={'navMenu01'} theme={'defaultThemeName'} />

            {/*  <StyleContextProvider> */}
            <div>
                <label className={componentStyle.pageTitle}> {data.pageDataCollectionTag} </label>
                {Array.from(menuPages).map((page) => (
                    <div key={page[0]}>
                        <span>{page[1].pageName}</span>
                        <ul>
                            {(page[1].menuItems ?? []).map((item) => (
                                <UiNavMenuItemComponent key={item.itemName} data={item} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {/*    </StyleContextProvider> */}
        </nav>
    );
};

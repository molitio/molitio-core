import React from 'react';
import { UiNavMenuItemComponent } from './UiNavMenuItemComponent';
import { UiNavMenuPageData, UiNavMenuPageDataCollection } from '../index';
import { StyleContextProvider } from '../../style-context/StyleContextProvider';
import { StyleContext } from '../../style-context/StyleContextStore';
import { PageTag } from '../../page-tag/PageTag';

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

    // const navMenuStyle = styleContext.styleMap.get('nav-menu') ?? styleDefault();

    return (
        <nav>
            <PageTag tag={'navMenu01'} theme={'defaultThemeName'} />

            <StyleContextProvider>
                <div>
                    {styleContext.themeName}
                    {Array.from(menuPages).map((page) => (
                        <div key={page[0]}>
                            <span>{page[1].pageName}</span>
                            <ul>
                                {/*   <ul className={navMenuStyle.menuList}> */}
                                {(page[1].menuItems ?? []).map((item) => (
                                    <li key={item.itemName}>
                                        <UiNavMenuItemComponent
                                            itemName={item.itemName}
                                            pathSegment={item.pathSegment}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </StyleContextProvider>
        </nav>
    );
};

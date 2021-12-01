import React from 'react';
import { UiNavMenuItemComponent } from './UiNavMenuItemComponent';
import { UiNavMenuPageData, UiNavMenuPageDataCollection } from '../../index';
import { StyleContextProvider } from '../../style-context/StyleContextProvider';
import { StyleContext, styleDefault } from '../../style-context/StyleContextStore';

export const UiNavMenuComponent: React.FC<UiNavMenuPageDataCollection> = ({ ...data }: UiNavMenuPageDataCollection) => {
    const [menuPages, setmenuPages] = React.useState<Map<string, UiNavMenuPageData>>(
        new Map<string, UiNavMenuPageData>(),
    );

    React.useEffect(() => {
        setmenuPages(new Map([...Array.from(data.menuPages ?? new Map<string, UiNavMenuPageData>())]));
    }, []);

    /* const styleContext = React.useContext(StyleContext);

    const navMenuStyle = styleContext.styleMap.get('nav-menu') ?? styleDefault(); */

    return (
        <>
{/*             <StyleContextProvider> */}
                <div>
                    test
                    {Array.from(menuPages).map((page) => (
                        <div key={page[0]}>
                            <span>{page[1].pageName}</span>
                            <ul>
                                {/* <ul className={navMenuStyle.menuList}> */}
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
          {/*   </StyleContextProvider> */}
        </>
    );
};

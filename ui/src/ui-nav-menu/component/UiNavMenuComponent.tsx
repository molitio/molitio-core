import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { UiNavMenuItemComponent } from './UiNavMenuItemComponent';
import { UiNavMenuPageData, UiNavMenuPageDataCollection } from '../../index';

export const UiNavMenuComponent: React.FC<UiNavMenuPageDataCollection> = ({ ...data }: UiNavMenuPageDataCollection) => {
    const [menuPages, setmenuPages] = React.useState<Map<string, UiNavMenuPageData>>(
        new Map<string, UiNavMenuPageData>(),
    );

    const useStyles = makeStyles(() =>
        createStyles({
            menuList: {
                listStyleType: 'none',
                color: 'blue',
                margin: '10px',
                border: 0,
                borderStyle: 'solid',
                borderColor: 'lightblue',
                boxShadow: '5px 2px 2px lightblue',
                opacity: 0.9,
                backgroundColor: 'transparent',
                borderRadius: 20,
            },
        }),
    );

    React.useEffect(() => {
        setmenuPages(new Map([...Array.from(data.menuPages ?? new Map<string, UiNavMenuPageData>())]));
    }, []);

    const componentStyle = useStyles();
    return (
        <div>
            test
            {Array.from(menuPages).map((page) => (
                <div key={page[0]}>
                    <span>{page[1].pageName}</span>
                    <ul className={componentStyle.menuList}>
                        {(page[1].menuItems ?? []).map((item) => (
                            <li key={item.itemName}>
                                <UiNavMenuItemComponent itemName={item.itemName} pathSegment={item.pathSegment} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

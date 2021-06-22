import React from 'react';
import { useTheme, makeStyles, createStyles } from '@material-ui/core';
import { MenuPageDataCollection } from 'ui-page-nav-menu/interface/IPagedMenu';
import { PagedMenuItemComponent } from 'ui-page-nav-menu';

export function PagedMenuComponent({ menuPages }: MenuPageDataCollection): JSX.Element {
    const theme = useTheme();
    const useStyles = makeStyles(() =>
        createStyles({
            menuList: {
                listStyleType: 'none',
                color: theme.palette.text.primary,
                margin: '10px',
                border: 0,
                borderStyle: 'solid',
                borderColor: theme.palette.secondary.main,
                boxShadow: theme.shadows[5],
                opacity: 0.9,
                [theme.breakpoints.down('xs')]: {},
                backgroundColor: 'transparent',
                borderRadius: 20,
                /*...theme.themeGradient,*/
            },
        }),
    );

    const componentStyle = useStyles();
    return (
        <div>
            test
            {Array.from(menuPages).map(page => (
                <div key={page[0]}>
                    <span>{page[1].pageName}</span>
                    <ul className={componentStyle.menuList}>
                        {page[1].menuItems.map(item => (
                            <li key={item.data.id}>
                                <PagedMenuItemComponent data={item.data} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

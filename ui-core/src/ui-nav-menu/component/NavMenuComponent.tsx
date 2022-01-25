import React from 'react';
import { NavSegmentComponent } from './NavSegmentComponent';
import { NavMenuComponentProps } from '../interface/NavMenuComponentProps';
import { TNavPage } from '../../ui-core-models';
import { PageTag } from '../../ui-common';
import { IThemeContext } from '../../ui-theme-context';
import { createUseStyles } from 'react-jss';

export const NavMenuComponent: React.FC<NavMenuComponentProps> = ({ ...props }: NavMenuComponentProps) => {
    const [menuPages, setMenuPages] = React.useState<Map<string, TNavPage>>(new Map<string, TNavPage>());

    React.useEffect(() => {
        setMenuPages(new Map([...(props.pageCollection.pageCollection ?? new Map<string, TNavPage>())]));
    }, []);

    const style = createUseStyles((theme: IThemeContext) => ({
        nav: {
            backgroundColor: theme.backgroundColor,
        },
        pageTitle: {
            color: theme.primary,
        },
        pageBackground: {
            backgroundColor: theme.backgroundColor,
        },
    })).apply({});

    return (
        <nav className={style.nav}>
            <PageTag  tag={{ pageName: 'testPage01', theme: 'defaultThemeName' }} />
            <div>
                <label className={style.pageTitle}> {props.pageCollection.tag} </label>
                {Array.from(menuPages).map((page) => (
                    <div key={page[0]}>
                        <span className={style.pageTitle}>{page[1].pageName}</span>
                        <ul>
                            {(page[1].navSegments ?? []).map((item) => (
                                <NavSegmentComponent key={item.itemName} navSegment={item} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>
    );
};

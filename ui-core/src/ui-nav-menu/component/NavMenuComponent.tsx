import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavSegmentComponent } from './NavSegmentComponent';
import { NavMenuComponentProps } from '../interface/NavMenuComponentProps';
import { TNavPage } from 'ui-core-schema';
import { StyledThemeContext } from 'ui-context';
import styles from '../styles/NavMenuComponent.module.scss';

export const NavMenuComponent: React.FC<NavMenuComponentProps> = ({ ...props }: NavMenuComponentProps) => {
    const [menuPages, setMenuPages] = React.useState<Map<string, TNavPage>>(new Map<string, TNavPage>());

    React.useEffect(() => {
        setMenuPages(new Map([...(props.pageCollection.pageCollection ?? new Map<string, TNavPage>())]));
    }, []);

    const style = createUseStyles((themeContext: StyledThemeContext) => ({
        nav: {
            /*  backgroundColor: theme.backgroundColor, */
            backgroundColor: 'DodgerBlue',
            overflow: 'hidden',
            borderRadius: '10px',
            display: 'flex',
            width: '100%',
        },
        siteDisplayName: {
            textAlign: 'center',
            padding: '30px 20px',
            color: '#d3d3d3',
            textDecoration: 'none',
            fontSize: '1.5rem',
            fontFamily: 'Roboto, sans-serif',
        },
        navUl: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minMax(120px, 1fr))',
            listStyleType: 'none',
            '& a': {
                float: 'left',
                display: 'none',
                color: '#d3d3d3',
                textAlign: 'center',
                padding: '30px 20px',
                textDecoration: 'none',
                fontSize: '27px',
                fontFamily: 'Roboto, sans-serif',
            },
        },
        pageTitle: {
            color: themeContext.theme?.primary,
        },
        pageBackground: {
            backgroundColor: themeContext.theme?.backgroundColor,
        },
        brandSection: {
            flexGrow: 1,
            gridTemplateColumns: 'repeat(auto-fit, minMax(120px, 1fr))',
            '& a': {
                float: 'left',
                color: '#d3d3d3',
                textAlign: 'center',
                padding: '30px 20px',
                textDecoration: 'none',
                fontSize: '27px',
                fontFamily: 'Roboto, sans-serif',
            },
        },
        pageCollection: {
            alignSelf: 'flex-end',
        },
    })).apply({});

    return (
        <nav className={styles.navbar}>
            <div className={styles.brandTitle}>
                <img src="" alt="" />
            </div>
            <a href="#" className={styles.toggleButton}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>
            <div className={styles.navbarLinks}>
                <ul>
                    {Array.from(menuPages).map((page) => (
                        <div key={page[0]}>
                            <span className={style.pageTitle}>{page[1].pageName}</span>
                            {(page[1].navSegments ?? []).map((item) => (
                                <NavSegmentComponent key={item.itemName} navSegment={item} />
                            ))}
                        </div>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

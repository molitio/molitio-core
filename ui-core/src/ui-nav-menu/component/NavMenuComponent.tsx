import React from 'react';
import { createUseStyles } from 'react-jss';
import { NavSegmentComponent } from './NavSegmentComponent';
import { NavMenuComponentProps } from '../interface/NavMenuComponentProps';
import { TNavPage } from 'ui-core-models';
import { StyledThemeContext } from 'ui-context';

export const NavMenuComponent: React.FC<NavMenuComponentProps> = ({ ...props }: NavMenuComponentProps) => {
    const [menuPages, setMenuPages] = React.useState<Map<string, TNavPage>>(new Map<string, TNavPage>());

    React.useEffect(() => {
        setMenuPages(new Map([...(props.pageCollection.pageCollection ?? new Map<string, TNavPage>())]));
    }, []);

    const style = createUseStyles((theme: StyledThemeContext) => ({
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
            color: theme.primary,
        },
        pageBackground: {
            backgroundColor: theme.backgroundColor,
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

        /* a {
 
}

.topnav a:hover {
  background-color: rgba(221, 221, 221, 0.133);
}

.topnav a.active {
  padding: 15px 30px 5px 30px;
  background-color:DodgerBlue;
  color: #d3d3d3;
}
.topnav.responsive > * {
  color: #d3d3d3;
}
.topnav .icon {
  border-radius: 10px;
  display: none;
} */
    })).apply({});

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    /*  function myFunction() {
         let myTopnav = document.getElementById('myTopnav');
        if (myTopnav.className === 'topnav') {
            myTopnav.className += ' responsive';
        } else {
            myTopnav.className = 'topnav';
        }
    }
 */

    return (
        <nav className={style.nav}>
            <div className={style.brandSection}>
                <a href="#home" id="home" className="active">
                    {'szép kép'}
                </a>
                <label className={style.siteDisplayName}> {props.pageCollection.siteDisplayName} </label>
            </div>
            <div className={style.pageCollection}>
                <ul className={style.navUl}>
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

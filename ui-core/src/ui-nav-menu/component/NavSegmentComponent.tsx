import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyledThemeContext } from 'ui-context';
import { NavSegmentProps } from '../interface/NavSegmentProps';
//import './style.css';

export const NavSegmentComponent: React.FC<NavSegmentProps> = (props: NavSegmentProps) => {
    const { navSegment } = props;

    const useStyles = createUseStyles((themeContext: StyledThemeContext) => ({
        itemText: {
            color: themeContext.theme?.primary,
        },
        navUl: {
            listStyleType: 'none',
        },
        itemBackground: {
            backgroundColor: themeContext.theme?.backgroundColor,
        },
        listItem: {
            '& a': {
                float: 'left',
                display: 'none',
                color: '#d3d3d3',
                textAlign: 'center',
                padding: '30px 20px',
                textDecoration: 'none',
                fontSize: '27px',
                fontFamily: '"Roboto", sans-serif',
            },
        },
    }));

    const style = useStyles();

    return (
        <li className={style.listItem} key={navSegment.itemName}>
            <a target="_blank" className={style.itemText} href={navSegment.pathSegment}>
                {navSegment.itemName}
            </a>
            {navSegment.navSegments ? (
                <ul className={style.navUl}>
                    {Array.from(navSegment.navSegments).map((item) => (
                        <NavSegmentComponent key={item.itemName} navSegment={item} />
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

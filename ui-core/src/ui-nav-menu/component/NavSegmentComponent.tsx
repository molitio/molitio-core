import React from 'react';
import { createUseStyles } from 'react-jss';
import { IThemeContext } from 'ui-theme-context';
import { NavSegmentProps } from '../interface/NavSegmentProps';
import './style.css';

export const NavSegmentComponent: React.FC<NavSegmentProps> = ({ ...props }: NavSegmentProps) => {
    const useStyles = createUseStyles((theme: IThemeContext) => ({
        itemText: {
            color: theme.primary,
        },
        navUl: {
            listStyleType: 'none',
        },
        itemBackground: {
            backgroundColor: theme.backgroundColor,
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
        <li className={style.listItem} key={props.navSegment.itemName}>
            <a target="_blank" className={style.itemText} href={props.navSegment.pathSegment}>
                {props.navSegment.itemName}
            </a>
            {props.navSegment.navSegments ? (
                <ul className={style.navUl}>
                    {Array.from(props.navSegment.navSegments).map((item) => (
                        <NavSegmentComponent key={item.itemName} navSegment={item} />
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

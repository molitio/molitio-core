import React from 'react';
import { createUseStyles } from 'react-jss';
import { IThemeContext } from 'ui-theme-context';
import { NavSegmentProps } from '../interface/NavSegmentProps';

export const NavSegmentComponent: React.FC<NavSegmentProps> = ({ ...props }: NavSegmentProps) => {
    const useStyles = createUseStyles((theme: IThemeContext) => ({
        itemText: {
            color: theme.primary,
        },
        itemBackground: {
            backgroundColor: theme.backgroundColor,
        },
    }));

    const componentStyle = useStyles();

    return (
        <li>
            <div key={props.navSegment.itemName}>
                <label
                    className={componentStyle.itemText}
                >{`label: ${props.navSegment.itemName} path: ${props.navSegment.pathSegment}`}</label>
            </div>
            {props.navSegment.navSegments ? (
                <ul>
                    {Array.from(props.navSegment.navSegments).map((item) => (
                        <NavSegmentComponent key={item.itemName} navSegment={item} />
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

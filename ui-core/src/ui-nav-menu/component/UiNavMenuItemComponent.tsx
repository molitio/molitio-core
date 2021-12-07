import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import {  ItemData } from 'ui-core-models/IUiNavMenu';
import { UiNavMenuItemProps } from 'ui-core-models/interface/UiNavMenuItemProps';

export const UiNavMenuItemComponent: React.FC<UiNavMenuItemProps> = ({ data }: UiNavMenuItemProps) => {
    const useStyles = makeStyles(() =>
        createStyles({
            itemText: {
                color: 'black',
            },
            itemBackground: {
                backgroundColor: 'blue',
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <li>
            <div key={data.itemName}>
                <label className={componentStyle.itemText}>{`label: ${data.itemName} path: ${data.pathSegment}`}</label>
            </div>
            {data.menuItems ? (
                <ul>
                    {Array.from(data.menuItems).map((item) => (
                        <UiNavMenuItemComponent key={item.itemName} data={item} />
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

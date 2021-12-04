import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { UiNavMenuItem } from 'ui-core-models/IUiNavMenu';

export const UiNavMenuItemComponent: React.FC<UiNavMenuItem> = ({ ...data }: UiNavMenuItem) => {
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
        <>
            <label className={componentStyle.itemText}>{data.pathSegment}</label>
        </>
    );
};

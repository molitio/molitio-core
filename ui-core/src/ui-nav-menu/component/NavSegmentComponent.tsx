import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core';
import { NavSegmentProps } from 'ui-core-models';

export const NavSegmentComponent: React.FC<NavSegmentProps> = ({ data }: NavSegmentProps) => {
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
            {data.navSegments ? (
                <ul>
                    {Array.from(data.navSegments).map((item) => (
                        <NavSegmentComponent key={item.itemName} data={item} />
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

import React from 'react';
import { RadioPageProps } from 'ui-core-models';
import { createUseStyles } from 'react-jss';


export const RadioPage: React.FC<RadioPageProps> = ({ data }: RadioPageProps) => {

        const useStyles = createUseStyles({
            pageTitle: {
                border: '1px solid blue',
            },
            itemText: {
                color: 'black',
            },
            pageBackground: {
                backgroundImage: data.assetUrls.get('radio-background'),
                backgroundColor: 'gray',
            },
        });

    const style = useStyles();
    
    return <main className={style.pageBackground}>{data.playUrl}</main>;
};

import React from 'react';
import { IStyleContext } from '../interface/IStyleContext';
import { createUseStyles } from 'react-jss';
import { Classes } from 'jss';

export const getStyles = () => {
    /* const useStyles = makeStyles(() =>
        createStyles({
            menuList: {
                listStyleType: 'none',
                color: 'blue',
                margin: '10px',
                border: 0,
                borderStyle: 'solid',
                borderColor: 'lightblue',
                boxShadow: '5px 2px 2px lightblue',
                opacity: 0.9,
                backgroundColor: 'transparent',
                borderRadius: 20,
            },
        }),
    );

    const componentStyle = useStyles(); */

    return new Map<string, Classes<string>>([['nav-menu', {}]]);
    // return new Map<string, ClassNameMap<string>>();
};

export const styleDefault = () => {
    const useStyles = createUseStyles({});
    const style = useStyles();
    return style;
};

export const StyleContext = React.createContext<IStyleContext>({ styleMap: getStyles() });

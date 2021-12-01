import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
import { IStyleContext } from './interface/IStyleContext';
import { ClassNameMap } from '@material-ui/styles';

const getStyles = () => {
    const useStyles = makeStyles(() =>
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

    const componentStyle = useStyles();

    return new Map<string, ClassNameMap<string>>([['nav-menu', { ...componentStyle }]]);
};

export const styleDefault = () => {
    const useStyles = makeStyles(() => createStyles({}));
    const style = useStyles();
    return style;
};

export const StyleContext = React.createContext<IStyleContext>({ styleMap: getStyles() });
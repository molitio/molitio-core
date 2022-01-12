import React from 'react';
import { IStyleContext } from '../interface/IStyleContext';
import { createUseStyles } from 'react-jss';
import { Classes } from 'jss';
/*     'highLight', */

export const getStyles = () => {
    /*  const customStyles = () =>
        new Map<string, Classes<string | number | symbol>>([
            'highLight',
            createUseStyles({
                menuList: {
                    ...yellowHighlight,
                },
            }),
        ]);

    return customStyles(); */
    return new Map<string, Classes<string>>([['yellow-highlight', {}]]);
    // return new Map<string, ClassNameMap<string>>();
};

export const styleDefault = () => {
    const useStyles = createUseStyles({});
    const style = useStyles();
    return style;
};

export const StyleContext = React.createContext<IStyleContext>({ styleMap: getStyles() });

import React, { useEffect } from 'react';
import { Classes } from 'jss';
import { StyleContextProviderProps } from 'ui-core-models';
import { getStyles, StyleContext } from '../store/StyleContextStore';

export const StyleContextProvider: React.FC<StyleContextProviderProps> = ({ children }) => {
    const [styleMap, setStyleMap] = React.useState(new Map<string, Classes<string>>());

    useEffect(() => {
        setStyleMap(getStyles());
    }, []);

    // console.log(JSON.stringify(styleMap));

    //value={{ styleMap: styleMap ?? new Map<string, ClassNameMap<string>>() }}

    return (
        <>
            <StyleContext.Provider
                value={{ styleMap: styleMap ?? new Map<string, Classes<string>>(), themeName: 'sirály' }}
            >
                {children}
            </StyleContext.Provider>
        </>
    );
};

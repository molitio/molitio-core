import React, { useEffect } from 'react';
import { Classes } from 'jss';
import { StyleContextProviderProps } from '../interface/StyleContextProviderProps';
import { getStyles, StyleContext } from '../store/StyleContextStore';

export const StyleContextProvider: React.FC<StyleContextProviderProps> = ({ children }) => {
    const [styleMap, setStyleMap] = React.useState(new Map<string, Classes<string>>());

    useEffect(() => {
        setStyleMap(getStyles());
    }, []);

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

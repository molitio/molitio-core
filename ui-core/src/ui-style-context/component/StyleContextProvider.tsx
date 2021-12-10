import React, { useEffect } from 'react';
import { ClassNameMap } from '@material-ui/styles';
import { StyleContextProviderProps } from '../interface/StyleContextProviderProps';
import { getStyles, StyleContext } from '../store/StyleContextStore';

export const StyleContextProvider: React.FC<StyleContextProviderProps> = ({ children }) => {
    const [styleMap, setStyleMap] = React.useState(new Map<string, ClassNameMap<string>>());

    useEffect(() => {
        setStyleMap(getStyles());
    }, []);

    // console.log(JSON.stringify(styleMap));

    //value={{ styleMap: styleMap ?? new Map<string, ClassNameMap<string>>() }}

    return (
        <>
            <StyleContext.Provider value={{ styleMap: styleMap ?? new Map<string, ClassNameMap<string>>(), themeName: "sirály"}}>
                {children}
            </StyleContext.Provider>
        </>
    );
};

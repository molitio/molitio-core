import React from 'react';
import { ClassNameMap } from '@material-ui/styles';
import { StyleContextProviderProps } from './interface/StyleContextProviderProps';
import { StyleContext } from './StyleContextStore';

export const StyleContextProvider: React.FC<StyleContextProviderProps> = ({ styleMap }: StyleContextProviderProps) => {
    return (
        <>
            <StyleContext.Provider
                value={{ styleMap: styleMap ?? new Map<string, ClassNameMap<string>>() }}
            ></StyleContext.Provider>
        </>
    );
};

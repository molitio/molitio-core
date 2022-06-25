import React, { PropsWithChildren } from 'react';
import systemStyles from '../styles/SystemStyles.module.scss';

export type TSystemThemeName = {
    themeId: string;
    themeName: string;
};

export type TSystemThemeStyles = {
    themeId: string;
    theme: Record<string, string>;
};

export interface SystemStylesProps {
    name: string;
    onThemeChange: (value: TSystemThemeName) => TSystemThemeStyles;
}
/** SystemStylesProps should come from SystemStylesContext */
export const SystemStyles: React.FC<SystemStylesProps & PropsWithChildren> = (props) => {
    const { name, onThemeChange: onChange } = props;

    const theName = name;

    const dbData = {
        systemThemeName: { themeId: 'mock_id_00', themeName: 'teamJamaica' },
        systemThemeStyles: { themeId: 'mock_id_00', theme: systemStyles.natureThemeColor },
    };
    const themeStyle = onChange(dbData.systemThemeName);

    return <></>;
};

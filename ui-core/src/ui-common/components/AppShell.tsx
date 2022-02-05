import React from 'react';
import { AppShellProps } from '../interfaces/AppShellProps';
import { StyledThemeContextProvider } from 'ui-context';
import './styles/styles.module.css';

export const AppShell: React.FC<AppShellProps> = ({ ...props }) => {
    //Implement content tree, be able to define content sections
    return <StyledThemeContextProvider themeName={props.themeName}>{props.children}</StyledThemeContextProvider>;
};

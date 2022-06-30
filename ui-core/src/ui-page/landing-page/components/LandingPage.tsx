import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyledThemeContext } from 'ui-context';
import { LandingPageProps } from '../interfaces/LandingPageProps';

export const LandingPage: React.FC<LandingPageProps & React.PropsWithChildren> = (props) => {

const {children, pageTitle} = props;

    const useStyles = createUseStyles((themeContext: StyledThemeContext) => ({
        landing: {
            display: 'flex',
            flexDirection: 'column',
        },
        paper: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            /* TODO: theme
                background: `linear-gradient(138deg,
                    ${theme.palette.primary.light} 10%, ${theme.palette.background.default} 100%)`,
                    [theme.breakpoints.up('sm')]: {
                        marginLeft: '15vw',
                        marginRight: '15vw',
                    }, */
        },
        pageContent: {
            margin: '10px 0px',
            border: 1,
            borderStyle: 'solid',
            borderRadius: 10,
            height: '2000px',
            /*             borderColor: theme.palette.secondary.main,
                    boxShadow: theme.shadows[5], */
        },
        pageTitle: {
            color: themeContext.theme?.primary,
        },
    }));

    const style = useStyles();
    return (
        <div className={style.landing}>
            <h1>{pageTitle}</h1>
            <div className={style.pageContent}>{children}</div>
        </div>
    );
};

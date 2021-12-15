import React from 'react';
import { createUseStyles } from 'react-jss';

export const LandingPage: React.FC = () => {
    const useStyles = createUseStyles({
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
    });

    const style = useStyles();
    return (
        <div className={style.landing}>
            <div className={style.pageContent}>Landing page</div>
        </div>
    );
};

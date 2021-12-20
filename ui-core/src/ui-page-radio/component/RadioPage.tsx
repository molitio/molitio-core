import React from 'react';
import { RadioPageProps } from '../interface/RadioPageProps';
import { createUseStyles } from 'react-jss';
import { StripedBackground } from '../../ui-background';

export const RadioPage: React.FC<RadioPageProps> = ({ data }: RadioPageProps) => {
    console.log(typeof data);
    const useStyles = createUseStyles({
        pageContainer: {
            margin: 0,
        },
        pageTitle: {
            border: '1px solid blue',
        },
        pageBackground: {
            margin: 0,
            position: 'fixed',
            backgroundColor: 'transparent',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh',
            minWidth: '100vw',
            zIndex: -90,
            backgroundImage: `url(${data.backgroundImage})`,
            width: '100vw',
            height: '100vh',
        },
    });

    const style = useStyles();

    return (
        <main className={style.pageContainer}>
            {data.playUrl}
            <StripedBackground>
                <h1>Show content</h1>
            </StripedBackground>
        </main>
    );
};

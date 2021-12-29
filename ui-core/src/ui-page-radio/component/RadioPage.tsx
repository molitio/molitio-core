import React from 'react';
import { RadioPageProps } from '../interface/RadioPageProps';
import { createUseStyles } from 'react-jss';
import { StripedBackground } from 'ui-background';
import { PlayButtonSvg } from 'ui-svg';

export const RadioPage: React.FC<RadioPageProps> = ({ data }: RadioPageProps) => {
    const useStyles = createUseStyles({
        pageContainer: {
            width: '100vw',
            height: '100vh',
            margin: 0,
            pointerEvents: 'none',
        },
        content: {
            top: 0,
            position: 'relative',
            zIndex: 100,
        },
        pageTitle: {
            border: '1px solid blue',
        },
        playButton: {
            width: '50vw',
            height: '50vh',
            marginTop: '20vh',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    });

    const style = useStyles();

    return (
        <main className={style.pageContainer}>
            <StripedBackground />
            <div className={style.content}>
                {data.playUrl}
                <h1 className={style.pageTitle}>Show content</h1>
                <div className={style.playButton}>
                    <PlayButtonSvg dimensions={{ width: '100%', height: '100%' }} />
                </div>
            </div>
        </main>
    );
};

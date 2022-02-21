import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyledThemeContext } from 'ui-context';
import { DefaultFooterProps } from '../interfaces/DefaultFooterProps';

export const DefaultFooter: React.FC<DefaultFooterProps> = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        content: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: theme.backgroundColor,
            '@media (max-width: 900px)': {
                visibility: 'hidden',
            },
        },
        leftColumnElements: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '3em',
        },
        centerColumnElements: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '& > *': {
                textAlign: 'center',
            },
        },
        rightColumnElements: {
            marginLeft: '3em',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
    })).apply({});

    return (
        <footer>
            <div className={style.content}>
                <div className={style.leftColumnElements}>
                    {props.leftColumnElements.map((element, i) => (
                        <div key={i}>{element}</div>
                    ))}
                </div>

                <div className={style.centerColumnElements}>
                    {props.centerColumnElements.map((element, i) => (
                        <div key={i}>{element}</div>
                    ))}
                </div>

                <div className={style.rightColumnElements}>
                    {props.rightColumnElements.map((element, i) => (
                        <div key={i}>{element}</div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

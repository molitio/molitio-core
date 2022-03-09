import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyledThemeContext } from 'ui-context';
import { DefaultFooterProps } from '../interfaces/DefaultFooterProps';

export const DefaultFooter: React.FC<DefaultFooterProps> = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        content: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '0.2em',
            backgroundColor: theme.backgroundColor,
        },
        leftColumnElements: {
            display: 'flex',
            gap: '0.5em',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: '3em',
        },
        centerColumnElements: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            justifyContent: 'center',
            '& > *': {
                textAlign: 'center',
            },
        },
        rightColumnElements: {
            marginLeft: '3em',
            gap: '0.5em',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
        '@media (max-width: 1400px)': {},
        '@media (max-width: 1200px)': {},
        '@media (max-width: 992px)': {},
        '@media (max-width: 768px)': {},
        '@media (max-width: 576px)': {},
        '@media (orientation: landscape)': {},
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

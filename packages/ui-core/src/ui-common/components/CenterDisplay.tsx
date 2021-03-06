import { createUseStyles } from 'react-jss';

export const CenterDisplay: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    const style = createUseStyles({
        center: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh',
        },
    }).apply({});

    return <div className={style.center}>{children}</div>;
};

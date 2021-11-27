import { makeStyles, createStyles } from '@material-ui/core';
import { UiNavMenuItem } from 'ui-nav-menu/interface/IUiNavMenu';

export const UiNavMenuItemComponent: React.FC<UiNavMenuItem> = ({ ...data }: UiNavMenuItem) => {
    const useStyles = makeStyles(() =>
        createStyles({
            itemText: {
                color: 'black',
            },
        }),
    );

    const componentStyle = useStyles();

    return (
        <>
            <label className={componentStyle.itemText}>{data.pathSegment}</label>
        </>
    );
};

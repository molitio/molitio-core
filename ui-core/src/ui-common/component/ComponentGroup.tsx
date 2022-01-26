import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { ComponentGroupProps } from 'ui-common/interface/ComponentGroupProps';
import { ComponentGroupTags } from 'ui-core-models';
import { IThemeContext } from 'ui-theme-context';

export const ComponentGroup: React.FC<ComponentGroupProps> = ({ ...props }) => {
    const [grouping, setGrouping] = React.useState({});
    const theme = useTheme<IThemeContext>();

    React.useEffect(() => {
        const groupType = () => {
            switch (props.groupingType) {
                case ComponentGroupTags.GRID:
                    return {
                        ...theme.gridGroup,
                    };
                case ComponentGroupTags.VERTICAL_FLEX:
                    return {
                        ...theme.verticalGroup,
                    };
                case ComponentGroupTags.HORIZONTAL_FLEX:
                    return {
                        ...theme.horizontalGroup,
                    };
                default:
                    return {};
            }
        };
        setGrouping({ ...groupType() });
    }, [props.groupingType]);

    const useStyle = createUseStyles((theme: IThemeContext) => ({
        position: grouping,
        backGroundStyle: { backgroundColor: theme.backgroundColor },
    }));

    const style = useStyle();

    return <div className={`${style.position}${style.backGroundStyle}`}>{props.children}</div>;
};

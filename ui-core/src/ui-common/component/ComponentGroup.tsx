import React from 'react';
import { createUseStyles } from 'react-jss';
import { ComponentGroupProps } from 'ui-common/interface/ComponentGroupProps';
import { ComponentGroupTags } from 'ui-core-models';
import { IThemeContext } from 'ui-theme-context';

export const ComponentGroup: React.FC<ComponentGroupProps> = ({ ...props }) => {
    const style = createUseStyles((theme: IThemeContext) => ({
        position: () => {
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
        },
    })).apply({});

    return <div className={style.position}>{props.children}</div>;
};

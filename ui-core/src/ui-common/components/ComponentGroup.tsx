import React from 'react';
import { createUseStyles } from 'react-jss';
import { ComponentGroupProps } from '../interfaces/ComponentGroupProps';
import { ComponentGroupTags } from 'ui-core-models';
import { StyledThemeContext } from 'ui-context';

export const ComponentGroup: React.FC<ComponentGroupProps> = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
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
        backGroundStyle: { backgroundColor: theme.backgroundColor },
    })).apply({});

    return <div className={`${style.position}${style.backGroundStyle}`}>{props.children}</div>;
};

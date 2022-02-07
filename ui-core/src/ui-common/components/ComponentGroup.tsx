import React from 'react';
import { createUseStyles } from 'react-jss';
import { ComponentGroupProps } from '../interfaces/ComponentGroupProps';
import { ComponentGroupTags } from 'ui-core-models';
import { StyledThemeContext } from 'ui-context';

export const ComponentGroup: React.FC<ComponentGroupProps> = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        dimensions: {
            width: props.dimensions?.width,
            height: props.dimensions?.height,
        },
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
                        alignItems: 'center',
                        '& > *': {
                            //flex: 1,
                        },
                    };
                default:
                    return {};
            }
        },
        backGroundStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.0)',

            /* backgroundColor: theme.backgroundColor */
        },
    })).apply({});

    return <div className={`${style.position} ${style.backGroundStyle} ${style.dimensions}`}>{props.children}</div>;
};

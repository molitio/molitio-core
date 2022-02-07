import React from 'react';
import { createUseStyles } from 'react-jss';
import { ComponentGroupProps } from '../interfaces/ComponentGroupProps';
import { ComponentGroupTags } from 'ui-core-models';
import { StyledThemeContext } from 'ui-context';

export const ComponentGroup: React.FC<ComponentGroupProps> = ({ ...props }) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        container: {
            height: props.dimensions?.height,
            width: props.dimensions?.width,
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
                        '& > *': {
                            flex: 1,
                            width: props.dimensions?.width,
                        },
                    };
                case ComponentGroupTags.HORIZONTAL_FLEX:
                    return {
                        ...theme.horizontalGroup,
                        justifyContent: 'center',
                        '& > *': {
                            flex: 1,
                            height: props.dimensions?.height,
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

    return <div className={`${style.container} ${style.position} ${style.backGroundStyle}`}>{props.children}</div>;
};

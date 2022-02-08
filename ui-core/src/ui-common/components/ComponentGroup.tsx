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
                        gap: props.itemGap,
                        color: props.fontColor,
                        fontSize: props.fontSize,
                        padding: props.itemPadding,
                    };
                case ComponentGroupTags.VERTICAL_FLEX:
                    return {
                        ...theme.verticalGroup,
                        gap: props.itemGap,
                        color: props.fontColor,
                        fontSize: props.fontSize,
                        justifyContent: 'center',
                        alignContent: 'center',
                        //border: '3px dashed purple',
                        '& > *': {
                            //border: '3px dashed purple',
                            flex: 1,
                            width: props.dimensions?.width,
                            padding: props.itemPadding,
                        },
                    };
                case ComponentGroupTags.HORIZONTAL_FLEX:
                    return {
                        ...theme.horizontalGroup,
                        gap: props.itemGap,
                        color: props.fontColor,
                        fontSize: props.fontSize,
                        //border: '3px dashed purple',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                        '& > *': {
                            //border: '3px dashed purple',
                            flex: 1,
                            height: props.dimensions?.height,
                            padding: props.itemPadding,
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

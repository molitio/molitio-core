import React, { HTMLAttributes } from 'react';
import { createUseStyles } from 'react-jss';
import { ComponentGroupProps } from '../interfaces/ComponentGroupProps';
import { ComponentGroupTags } from 'ui-core-schema';
import { StyledThemeContext } from 'ui-context';

/* type Props = {
    className?: string;
}; */

export type mediaLg = {
    rules?: {
        '@media (max-width: 900px)'?: {
            flexDirection: string;
            alignContent: string;
            display: string;
            '& > *': {
                justifyContent: string;
            };
        };
    };
};

export const ComponentGroup: React.FC<ComponentGroupProps & mediaLg & HTMLAttributes<HTMLDivElement>> = ({
    ...props
}) => {
    const style = createUseStyles((theme: StyledThemeContext) => ({
        container: {
            ...props.rules,
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
                        height: '100%',
                        gap: props.itemGap,
                        padding: props.itemPadding,
                        color: props.fontColor,
                        fontSize: props.fontSize,
                        /*    '@media (max-width: 900px)': props.switchDirectionOn?.some((breakpoint) => breakpoint === 'lg')
                            ? {
                                  border: '3px dashed purple',
                                  justifyContent: 'center',
                                  alignContent: 'center',
                                  '& > *': {
                                      border: '3px dashed yellow',
                                      justifyContent: 'center',
                                  },
                              }
                            : {}, */
                        justifyContent: props.justifyContent,
                        alignContent: 'center',
                        '& > *': {
                            //border: '3px dashed purple',
                            //flex: 1,
                            width: props.dimensions?.width,
                            padding: props.itemPadding,
                        },
                    };
                case ComponentGroupTags.HORIZONTAL_FLEX:
                    return {
                        ...theme.horizontalGroup,
                        width: '100%',
                        gap: props.itemGap,
                        padding: props.itemPadding,
                        color: props.fontColor,
                        fontSize: props.fontSize,
                        margin: props.margin,
                        marginTop: props.marginTop,
                        marginRight: props.marginRight,
                        marginBottom: props.marginBottom,
                        marginLeft: props.marginLeft,
                        /* '@media (max-width: 900px)': props.switchDirectionOn?.some((breakpoint) => breakpoint === 'lg')
                            ? {
                                  flexDirection: 'column',
                                  border: '3px dashed purple',
                                  alignContent: 'center',
                                  '& > *': {
                                      border: '3px dashed yellow',
                                      justifyContent: 'center',
                                  },
                              } 
                            : { justifyContent: props.justifyContent }, */
                        //border: '3px dashed purple',
                        justifyContent: props.justifyContent,
                        alignContent: 'center',
                        textAlign: 'center',
                        '& > *': {
                            //border: '3px dashed purple',
                            //flex: 1,
                            alignItems: 'center',
                            //height: props.dimensions?.height,
                            //  padding: props.itemPadding,
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

    return (
        <div className={`${style.container} ${style.position} ${style.backGroundStyle} ${props.className}`}>
            {props.children}
        </div>
    );
};

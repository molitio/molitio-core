import { ComponentGroupTags } from 'ui-core-schema';
import { ShapeDimensions } from 'ui-svg';

export type breakpoints = 'xs' | 'sm' | 'lg' | 'wide';

export interface ComponentGroupProps {
    groupingType: ComponentGroupTags;
    dimensions?: ShapeDimensions;
    itemGap?: string;
    itemPadding?: string;
    fontColor?: string;
    fontSize?: string;
    switchDirectionOn?: [breakpoints];
    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

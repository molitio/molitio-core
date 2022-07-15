import { ComponentCollectionTags } from '@molitio/system-schema';
import { ShapeDimensions } from 'ui-svg';

export type Breakpoints = 'xs' | 'sm' | 'lg' | 'wide';

export interface ComponentGroupProps {
    groupingType: ComponentCollectionTags;
    dimensions?: ShapeDimensions;
    itemGap?: string;
    itemPadding?: string;
    fontColor?: string;
    fontSize?: string;
    switchDirectionOn?: [Breakpoints];
    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

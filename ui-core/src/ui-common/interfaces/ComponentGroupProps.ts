import { ComponentGroupTags } from 'ui-core-models';
import { ShapeDimensions } from 'ui-svg';

export interface ComponentGroupProps {
    groupingType: ComponentGroupTags;
    dimensions?: ShapeDimensions;
    itemGap?: string;
    itemPadding?: string;
    fontColor?: string;
    fontSize?: string;
}

import { ComponentGroupTags } from 'ui-core-models';
import { ShapeDimensions } from 'ui-svg';

export interface ComponentGroupProps {
    groupingType: ComponentGroupTags;
    dimensions?: ShapeDimensions;
}

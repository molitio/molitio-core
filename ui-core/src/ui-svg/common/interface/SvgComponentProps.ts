import { ShapeDimensions } from './ShapeDimensions';

export interface SvgComponentProps {
    dimensions?: ShapeDimensions | 'FULLSCREEN';
    opacity?: number;
}

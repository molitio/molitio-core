import { TCollection } from './TCollection';
import { TResource } from './TResource';

export type TCategory = TCollection & {
    categoryName: string;
    resources: Map<string, TResource>;
};

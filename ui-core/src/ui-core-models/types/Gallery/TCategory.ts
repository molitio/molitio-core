import { TCollection } from '../Collections/TCollection';
import { TResource } from '../Resources/TResource';

export type TCategory = TCollection & {
    categoryName: string;
    resources: Map<string, TResource>;
};

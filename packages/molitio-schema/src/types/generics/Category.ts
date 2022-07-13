import { Collection } from './Collection';
import { Resource } from './Resource';

export type Category = Collection & {
    categoryName: string;
    resources: Map<string, Resource>;
};

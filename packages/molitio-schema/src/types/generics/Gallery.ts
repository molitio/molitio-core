import { Category } from './Category';

export type Gallery = {
    name: string;
    categories?: Map<string, Category>;
};

import { TCategory } from './TCategory';

export type TGallery = {
    name: string;
    categories: Map<string, TCategory>;
};

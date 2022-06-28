import { TNavPage } from 'ui-core-schema';

export type TNavPageCollection = {
    tag: string;
    siteDisplayName: string;
    pageCollection?: Map<string, TNavPage>;
};

import { TNavPage } from 'ui-core-models';

export type TNavPageCollection = {
    tag: string;
    siteDisplayName: string;
    pageCollection?: Map<string, TNavPage>;
};

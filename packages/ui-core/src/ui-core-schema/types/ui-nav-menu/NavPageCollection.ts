import { NavPage } from 'ui-core-schema';

export type NavPageCollection = {
    tag: string;
    siteDisplayName: string;
    pageCollection?: Map<string, NavPage>;
};

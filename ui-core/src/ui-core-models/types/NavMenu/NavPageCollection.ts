import { NavPage } from "ui-core-models";

export type NavPageCollection = {
    pageCollectionTag: string;
    pageCollection?: Map<string, NavPage>;
};

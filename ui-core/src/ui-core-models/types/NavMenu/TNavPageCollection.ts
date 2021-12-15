import { TNavPage } from "ui-core-models";

export type TNavPageCollection = {
    pageCollectionTag: string;
    pageCollection?: Map<string, TNavPage>;
};

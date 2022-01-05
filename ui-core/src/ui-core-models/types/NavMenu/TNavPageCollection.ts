import { TNavPage } from "ui-core-models";

export type TNavPageCollection = {
    tag: string;
    pageCollection?: Map<string, TNavPage>;
};

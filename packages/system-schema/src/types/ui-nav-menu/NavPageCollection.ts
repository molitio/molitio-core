import { NavPage } from "./NavPage";

export type NavPageCollection = {
  tag: string;
  siteDisplayName: string;
  pageCollection?: Map<string, NavPage>;
};

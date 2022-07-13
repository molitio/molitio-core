import { NavPage } from "@molitio/molitio-schema";

export type NavPageCollection = {
  tag: string;
  siteDisplayName: string;
  pageCollection?: Map<string, NavPage>;
};

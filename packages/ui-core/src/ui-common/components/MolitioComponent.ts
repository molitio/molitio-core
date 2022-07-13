import React from "react";
import { ComponentTag } from "@molitio/molitio-schema";

type MolitioComponentParams<T, D, S> = T &  {data?: Partial<Record<string, D>>} & {style?: Partial<Record<string, S>>} & {
  tag?: ComponentTag;
  //TODEV: resolve tag for geolocation and urgency weight
};

export type MolitioComponent<T, D, S> = React.FC<MolitioComponentParams<T, D, S>>;

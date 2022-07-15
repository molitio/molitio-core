import React from "react";
import { ComponentTag } from "@molitio/system-schema";

type MolitioComponentParams<T, D, S> = T &  {data?: Partial<Record<string, D>>} & {style?: Partial<Record<string, S>>} & {
  tag?: ComponentTag;
  //TODEV: resolve tag for geolocation and urgency weight
};

/**
 * Give T as component type data shape and applied styles
 * @param T component type
 * @param D component data
 * @param S component style
 * type MolitioComponent<T, D, S> = React.FC<MolitioComponentParams<T, D, S>>
 */
export type MolitioComponent<T, D, S> = React.FC<MolitioComponentParams<T, D, S>>;

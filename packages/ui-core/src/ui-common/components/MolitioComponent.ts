import React from "react";
import { ComponentTag } from "@molitio/molitio-schema";

type MolitioComponentParams<T> = T & {
  tag?: ComponentTag;
};

export type MolitioComponent<T> = React.FC<MolitioComponentParams<T>>;

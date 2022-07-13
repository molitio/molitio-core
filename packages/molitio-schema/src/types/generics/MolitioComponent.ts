import React from "react";
import { ComponentTag } from "../../tags/ui-common/ComponentTag";

type MolitioComponentParams<T> = T & {
  tag?: ComponentTag;
};

export type MolitioComponent<T> = React.FC<MolitioComponentParams<T>>;

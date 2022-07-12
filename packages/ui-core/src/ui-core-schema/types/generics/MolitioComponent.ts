import React from 'react';
import { ComponentTag } from 'ui-core-schema/tags/ui-common/ComponentTag';

type MolitioComponentParams<T> = T & {
    tag?: ComponentTag;
};

export type MolitioComponent<T> = React.FC<MolitioComponentParams<T>>;

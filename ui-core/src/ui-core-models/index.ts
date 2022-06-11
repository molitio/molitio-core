import React from 'react';

export type WithChildren<T = {}> = T & { children?: React.ReactElement<any, any> };

/* 
    types
*/

export type { TNavSegment } from './types/NavMenu/TNavSegment';
export type { TNavPage } from './types/NavMenu/TNavPage';
export type { TNavPageCollection } from './types/NavMenu/TNavPageCollection';

export type { TPageTag } from './types/PageTag/TPageTag';
export type { TUniversalRadio } from './types/UniversalRadio/TUniversalRadio';
export type { TDeviceTypes } from './types/DefaultTheme/TDeviceTypes';
export type { TImageResource } from './types/Resources/TImageResource';

/* 
   tags
*/

export { UniversalRadioTags } from './tags/RadioPage/UniversalRadioTags';
export { AudioPreloadTags } from './tags/RadioPage/AudioPreloadTags';
export { ThemeContextTags } from './tags/ThemeContext/ThemeContextTags';
export { ThemeNameTags } from './tags/ThemeContext/ThemeNameTags';
export { ComponentGroupTags } from './tags/Common/ComponentGroupTags';

/* 
style
*/

export type { ButtonStyleVariant } from './types/StyleService/ButtonStyleVariant';

/* 
resource gallery 
*/

export type { TCategory } from './types/Gallery/TCategory';
export type { TGallery } from './types/Gallery/TGallery';

import React from 'react';

export type WithChildren<T = {}> = T & { children?: React.ReactElement<any, any> };

/* 
    types
*/

export type { TNavSegment } from './types/ui-nav-menu/TNavSegment';
export type { TNavPage } from './types/ui-nav-menu/TNavPage';
export type { TNavPageCollection } from './types/ui-nav-menu/TNavPageCollection';

export type { TPage } from './types/generics/TPage';
export type { TUniversalRadio } from './types/generics/TUniversalRadio';
export type { TAudioPlayerState } from './types/ui-media/TAudioPlayerState';
export type { TResource } from './types/generics/TResource';
export type { TDeviceTypes } from './types/ui-platform/TDeviceTypes';

export type { TImageResource } from './types/generics/TImageResource';

export type { StyledThemeContext } from './types/ui-style-service/theme/StyledThemeContext';
export type { SystemThemeName } from './types/ui-style-service/theme/SystemThemeName';
export type { SystemThemeStyles } from './types/ui-style-service/theme/SystemThemeStyles';
export type { ThemeColor } from './types/ui-style-service/theme/ThemeColor';

/* 
   tags
*/

export { UniversalRadioTags } from './tags/ui-page-radio/UniversalRadioTags';
export { AudioPreloadTags } from './tags/ui-page-radio/AudioPreloadTags';
export { ThemeContextTags } from './tags/ui-style-service/theme/ThemeContextTags';
export { ComponentGroupTags } from './tags/ui-common/ComponentGroupTags';
export { ComponentTag } from './tags/ui-common/ComponentTag';
export { ThemeNameTags } from './tags/ui-style-service/theme/ThemeNameTags';
export { SystemStyleTag } from './tags/ui-style-service/SystemStyleTag';

export type { ButtonStyleVariant } from './types/ui-style-service/ButtonStyleVariant';

/* 
generics
*/

export type { TCategory } from './types/generics/TCategory';
export type { TGallery } from './types/generics/TGallery';

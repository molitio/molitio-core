import { StyledThemeContext } from 'ui-context';
import { SystemStyleTag } from 'ui-core-schema/tags/ui-style-service/SystemStyleTag';
import { ComponentTag } from 'ui-core-schema';
import { TSystemThemeName } from 'ui-core-schema/types/ui-style-service/theme/TSystemThemeName';
import SystemStylesScssModule from '../styles/SystemStylesScssModule.module.scss';
import ComponentStylesScssModule from '../styles/ComponentStylesScssModule.module.scss';

/***
 * Resolves a set of css rules that compose a predifined set of style rules based on the provided ComponentTag
 * @param componentTag {ComponentTag} - Tag for predifened stylesheets
 *
 * @return {Partial<Record<string, string>>} - Style rule collection matching the provided ComponentTag
 */
const resolveComponentStyle = (componentTag: ComponentTag): Partial<Record<string, string>> => {
    const styleRules: Partial<Record<string, string>> = Object.create({
        styleRules: ComponentStylesScssModule[componentTag],
    });
    return styleRules;
};

/***
 * Resolves a set of css rules that compose a predifined set of style rules based on the provided SystemStyleTag
 * @param themeNameTag {SystemStyleTag} - Tag for predifened stylesheets
 *
 * @return {Partial<Record<string, string>>} - Style rule collection matching the provided SystemStyleTag
 */
const resolveThemeContext = (themeNameTag: TSystemThemeName): Record<string, string> => {
    //TODO: create a managed theme context that can be resolved here
    const themeContext = {};
    return themeContext;
};

/***
 * Resolves a set of css rules that compose a predifined set of style rules based on the provided SystemStyleTag
 * @param styleFragmentTag {SystemStyleTag} - Tag for predifened stylesheets
 *
 * @return {Partial<Record<string, string>>} - Style rule collection matching the provided SystemStyleTag
 */
export const resolveSystemStyle = (styleFragmentTag: SystemStyleTag): Partial<Record<string, string>> => {
    const styleRules: Partial<Record<string, string>> = Object.create({
        styleRules: SystemStylesScssModule[styleFragmentTag],
    });
    return styleRules;
};

/***
 * Resolves a set of css rules that compose a predifined set of style rules based on the provided SystemStyleTag
 * @param styleFragmentTag {ComponentTag} - Tag for predifened stylesheets
 * @param themeNameTag {TSystemThemeName} -  for predifened stylesheets
 *
 * @returns {{resolvedStyle: Record<string, string>; resolvedThemeContext: StyledThemeContext}}  - Style rule collection matching the provided {SystemStyleTag}
 */
export const useSystemStyles = (
    styleFragmentTag: ComponentTag,
    themeNameTag: TSystemThemeName,
): { resolvedStyle: Record<string, string>; resolvedThemeContext: StyledThemeContext } => {
    const resolvedStyle = Object.create(resolveComponentStyle(styleFragmentTag));
    const resolvedThemeContext = resolveThemeContext(themeNameTag);
    return { resolvedStyle, resolvedThemeContext };
};

import { StyledThemeContext } from 'ui-context';
import { SystemStyleTag } from 'ui-context/style-service/SystemStyleTag';
import { TSystemThemeName } from 'ui-core-schema/types/ui-style-service/theme/TSystemThemeName';
import SystemStylesScssModule from '../styles/SystemStyles.module.scss';

/***
 * Resolves a set of css rules that compose a predifined set of style rules based on the provided {SystemStyleTag}
 * @param {SystemStyleTag} - Tag for predifened stylesheets
 *
 * @returns {Partial<Record<string, string>>} - Style rule collection matching the provided {SystemStyleTag}
 */
const resolveStyle = (styleFragmentTag: SystemStyleTag): Partial<Record<string, string>> => {
    const styleRules: Partial<Record<string, string>> = Object.create({
        styleRules: SystemStylesScssModule[styleFragmentTag],
    });
    return styleRules;
};

/***
 * Resolves a set of css rules that compose a predifined set of style rules based on the provided {SystemStyleTag}
 * @param {SystemStyleTag} - Tag for predifened stylesheets
 *
 * @returns {Partial<Record<string, string>>} - Style rule collection matching the provided {SystemStyleTag}
 */
const resolveThemeContext = (themeNameTag: TSystemThemeName): Record<string, string> => {
    //TODO: create a managed theme context that can be resolved here
    const themeContext = {};
    return themeContext;
};

/***
 * Resolves a set of css rules that compose a predifined set of style rules based on the provided {SystemStyleTag}
 * @param styleFragmentTag {SystemStyleTag} - Tag for predifened stylesheets
 * @param themeNameTag {TSystemThemeName} -  for predifened stylesheets
 *
 * @returns {Record<string, string>} - Style rule collection matching the provided {SystemStyleTag}
 */
export const useSystemStyles = (
    styleFragmentTag: SystemStyleTag,
    themeNameTag: TSystemThemeName,
): { resolvedStyle: Record<string, string>; resolvedThemeContext: StyledThemeContext } => {
    const resolvedThemeContext = resolveThemeContext(themeNameTag);
    const resolvedStyle = Object.create(resolveStyle(styleFragmentTag));
    return { resolvedStyle, resolvedThemeContext };
};

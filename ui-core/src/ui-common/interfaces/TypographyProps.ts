import { TThemeColor } from 'ui-core-schema/types/ui-style-service/theme/TThemeColor';

export interface TypographyProps {
    rem: number;
    color?: TThemeColor;
    marginTop?: string;
    maxContent?: boolean;
    center?: boolean;
    textContent?: string;
}

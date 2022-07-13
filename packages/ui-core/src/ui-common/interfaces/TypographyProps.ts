import { ThemeColor } from '@molitio/molitio-schema/types/ui-style-service/theme/ThemeColor';

export interface TypographyProps {
    rem: number;
    color?: ThemeColor;
    marginTop?: string;
    maxContent?: boolean;
    center?: boolean;
    textContent?: string;
}

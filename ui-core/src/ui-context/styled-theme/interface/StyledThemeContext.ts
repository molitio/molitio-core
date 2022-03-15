import { TDeviceTypes } from 'ui-core-models';

export interface StyledThemeContext {
    themeName?: string;
    deviceType?: TDeviceTypes;
    primary?: string;
    secondary?: string;
    primaryFontColor?: string;
    secondaryFontColor?: string;
    backgroundColor?: string;
    secondaryBackgroundColor?: string;
    interactiveHighlight?: { fill: string; strokeWidth: number; stroke: string };
    gridGroup?: {
        display: string;
        gridTemplateColumns: string;
    };
    verticalGroup?: {
        display: string;
        flexDirection: string;
    };
    horizontalGroup?: {
        display: string;
        flexDirection: string;
    };
}

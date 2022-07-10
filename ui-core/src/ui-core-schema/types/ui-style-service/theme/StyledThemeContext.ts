import { DeviceTypes } from 'ui-core-schema';

export type StyledThemeContext = {
    themeName?: string;
    deviceType?: DeviceTypes;
    theme?: {
        primary?: string;
        secondary?: string;
        primaryFontColor?: string;
        secondaryFontColor?: string;
        backgroundColor?: string;
        secondaryBackgroundColor?: string;
        interactiveHighlight?: { fill: string; strokeWidth: number; stroke: string };
    };
    gridGroup?: {
        display: string;
        gridTemplateColumns: string;
    };
    verticalGroup?: {
        display: string;
        flexDirection: string;
    };
    horizontalGroup?:
        | {
              display: string;
              flexDirection: string;
          }
        | undefined;
};

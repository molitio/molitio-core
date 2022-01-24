export interface IThemeContext {
    themeName?: string;
    primary?: string;
    secondary?: string;
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

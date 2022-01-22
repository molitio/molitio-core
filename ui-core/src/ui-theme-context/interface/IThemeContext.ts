export interface IThemeContext {
    themeName?: string;
    primary?: string;
    secondary?: string;
    backgroundColor?: string;
    secondaryBackgroundColor?: string;
    interactiveHighlight?: { fill: string; strokeWidth: number; stroke: string };
}

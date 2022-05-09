/* declare module '*.module.scss' {
    const styles: Record<string, string>;
    export default styles;
} */

declare module '*.scss' {
    const styles: {
        [className: string]: string;
    };
    export default styles;
}

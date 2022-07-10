/* declare module '*.module.scss' {
    const styles: Record<string, string>;
    export default styles;
} */

type NodeJSGlobal = typeof global;

declare module '*.scss' {
    const styles: {
        [className: string]: string;
    };
    export default styles;
}

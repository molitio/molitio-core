import { SVGAttributes } from "react";

declare module 'react' {
    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
        onHover?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }
}
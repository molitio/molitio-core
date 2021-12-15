import { TNavSegment } from "./TNavSegment";

export type TNavPage = {
    pageName: string;
    pathSegment?: string;
    navSegments?: TNavSegment[];
};

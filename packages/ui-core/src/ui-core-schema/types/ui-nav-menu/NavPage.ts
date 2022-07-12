import { NavSegment } from './NavSegment';

export type NavPage = {
    pageName: string;
    pathSegment?: string;
    navSegments?: NavSegment[];
};

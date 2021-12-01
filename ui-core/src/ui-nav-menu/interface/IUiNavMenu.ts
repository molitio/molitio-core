interface UiNavMenuItem {
    itemName: string;
    pathSegment?: string;
}

interface UiNavMenuPageData {
    pageName: string;
    pathSegment?: string;
    menuItems?: UiNavMenuItem[];
}

interface UiNavMenuPageDataCollection {
    menuPages?: Map<string, UiNavMenuPageData>;
}

export type { UiNavMenuItem, UiNavMenuPageData, UiNavMenuPageDataCollection };

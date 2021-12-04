type UiNavMenuItem = {
        itemName: string;
        pathSegment?: string;
        menuItems?: UiNavMenuItem[];
}

type UiNavMenuPageData = {
        pageName: string;
        pathSegment?: string;
        menuItems?: UiNavMenuItem[];
}

type UiNavMenuPageDataCollection  = {
        pageDataCollectionTag: string;
        pageDataCollection?: Map<string, UiNavMenuPageData>;
}

export type { UiNavMenuItem, UiNavMenuPageData, UiNavMenuPageDataCollection };

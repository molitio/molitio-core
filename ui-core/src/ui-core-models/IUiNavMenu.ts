type ItemData = {
    itemName: string;
    pathSegment?: string;
    menuItems?: ItemData[];
};

type UiNavMenuPageData = {
    pageName: string;
    pathSegment?: string;
    menuItems?: ItemData[];
};

type UiNavMenuPageDataCollection = {
    pageDataCollectionTag: string;
    pageDataCollection?: Map<string, UiNavMenuPageData>;
};

export type { ItemData , UiNavMenuPageData, UiNavMenuPageDataCollection };

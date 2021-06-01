export interface MenuItem {
  data: {
    id: string;
    name: string;
    currency?: string;
    imageUrl?: string;
    description?: string;
    price?: number;
  };
}

export interface MenuPageData {
  pageName: string;
  menuItems: MenuItem[];
}

export interface MenuPageDataCollection {
  menuPages: Map<string, MenuPageData>;
}

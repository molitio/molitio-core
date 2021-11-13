export interface MenuItem {
  data: {
    id: string;
    name: string;
    imageUrl: string;
    description: string;
    currency?: string;
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

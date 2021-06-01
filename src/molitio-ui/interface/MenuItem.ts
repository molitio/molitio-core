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

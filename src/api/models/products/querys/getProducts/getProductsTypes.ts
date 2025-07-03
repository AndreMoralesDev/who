export type GetProductsInput = {
    limit: number;
    skip: number;
};

export type GetProductsResponse = {
    error: boolean;
    status: number;
    products: Array<{
        id: string;
        title: string;
        price: number;
        discountPercentage: number;
        rating: number;
        brand: string;
        stock: number;
        thumbnail: string;
        images: string[];
    }>;
};

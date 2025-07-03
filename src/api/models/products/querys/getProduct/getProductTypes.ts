export type GetProductInput = {
    productId: string;
};

export type GetProductResponse = {
    error: boolean;
    status: number;
    product: null | {
        id: string;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        brand: string;
        stock: number;
        thumbnail: string;
        images: string[];
    };
};

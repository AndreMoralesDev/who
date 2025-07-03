import { GetProductsResponse } from "@/api/models/products/querys/getProductsTypes";

export const getProductsToProductSchema = (response: GetProductsResponse) => {
    const products: ProductSchema[] = response.products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        brand: product.brand,
        stock: product.stock,
        isAvailable: product.stock > 0,
        thumbnail: product.thumbnail,
        images: product.images,
    }));

    return products;
};

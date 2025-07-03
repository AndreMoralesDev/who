import { GetProductResponse } from "@/api/models/products/querys/getProduct/getProductTypes";

export const getProductToProductDetailsSchema = (
    response: GetProductResponse
) => {
    if (!response.product) return null;

    const { product } = response;

    const productParse: ProductDetailsSchema = {
        id: product.id,
        description: product.description,
        title: product.title,
        price: product.price,
        discountPercentage: product.discountPercentage,
        rating: product.rating,
        brand: product.brand,
        stock: product.stock,
        isAvailable: product.stock > 0,
        thumbnail: product.thumbnail,
        images: product.images,
    };

    return productParse;
};

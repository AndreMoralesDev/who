export const productDetailsSchemaToProductSchema = (
    input: ProductDetailsSchema
) => {
    const product: ProductSchema = {
        id: input.id,
        title: input.title,
        price: input.price,
        discountPercentage: input.discountPercentage,
        rating: input.rating,
        brand: input.brand,
        stock: input.stock,
        isAvailable: input.isAvailable,
        thumbnail: input.thumbnail,
        images: input.images,
    };

    return product;
};

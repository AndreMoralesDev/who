"use client";

import { useCartStore } from "@/app/store/useCartStore";

type AddToCartButtonProps = {
    product: ProductSchema;
};

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
    const { addProduct } = useCartStore((state) => state);

    return (
        <button
            type="button"
            className={`${
                product.isAvailable
                    ? "bg-secondary text-white"
                    : "bg-gray-600 text-white cursor-not-allowed"
            } rounded-md py-2 px-6`}
            onClick={() => addProduct({ ...product, quantity: 1 })}
        >
            {product.isAvailable ? "Add to cart" : "Out of stock"}
        </button>
    );
};

"use client";

import { useCartStore } from "@/app/store/useCartStore";
import { MinusIcon } from "@/components/icons/MinusIcon";
import { PlusIcon } from "@/components/icons/PlusIcon";
import { TrashIcon } from "@/components/icons/TrashIcon";

type AddToCartButtonProps = {
    product: ProductSchema;
};

export const AddToCartButton = ({ product }: AddToCartButtonProps) => {
    const { products, addProduct, updateProduct } = useCartStore(
        (state) => state
    );
    const cartProduct = products.find(({ id }) => id === product.id);

    if (cartProduct) {
        return (
            <div className="flex justify-between gap-2 flex-wrap rounded-full border-[1px]">
                <button
                    type="button"
                    onClick={() =>
                        updateProduct({
                            ...cartProduct,
                            quantity: cartProduct.quantity - 1,
                        })
                    }
                    className="py-2 px-4"
                >
                    {cartProduct.quantity > 1 ? (
                        <MinusIcon className="size-4" />
                    ) : (
                        <TrashIcon className="size-4" />
                    )}
                </button>

                <p className="font-semibold py-2">{cartProduct.quantity}</p>

                <button
                    type="button"
                    onClick={() =>
                        updateProduct({
                            ...cartProduct,
                            quantity: cartProduct.quantity + 1,
                        })
                    }
                    className="py-2 px-4"
                >
                    <PlusIcon className="size-4" />
                </button>
            </div>
        );
    }

    return (
        <button
            type="button"
            className={`${
                product.isAvailable
                    ? "bg-secondary text-white"
                    : "bg-gray-600 text-white cursor-not-allowed"
            } rounded-md py-[9px] px-6`}
            onClick={() => addProduct({ ...product, quantity: 1 })}
        >
            {product.isAvailable ? "Add to cart" : "Out of stock"}
        </button>
    );
};

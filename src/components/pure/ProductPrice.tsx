type ProductPriceProps = Pick<ProductSchema, "price" | "discountPercentage"> & {
    size: "sm" | "lg";
};

export const ProductPrice = ({
    price,
    discountPercentage = 0,
    size,
}: ProductPriceProps) => {
    const hasDiscount = discountPercentage > 0;
    const referencePrice = price + price * (discountPercentage / 100);

    const priceInteger = price.toFixed(2).split(".")[0];
    const priceDecimal = price.toFixed(2).split(".")[1];

    const textSize = {
        sm: {
            base: "text-[12px]",
            lg: "text-xl",
        },
        lg: {
            base: "text-base",
            lg: "text-3xl",
        },
    };

    return (
        <div className={`flex flex-col ${textSize[size].base}`}>
            <p className="opacity-50 line-through">
                S/ {referencePrice.toFixed(2)}
            </p>
            <div className="flex flex-wrap items-baseline gap-x-4">
                <p className="font-semibold">
                    S/{" "}
                    <span className={`${textSize[size].lg}`}>
                        {priceInteger}
                    </span>
                    <span>.{priceDecimal}</span>
                </p>

                {hasDiscount && (
                    <p className="text-green-600 font-semibold">
                        -{discountPercentage}%
                    </p>
                )}
            </div>
        </div>
    );
};

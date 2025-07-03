type ProductPriceProps = Pick<ProductSchema, "price" | "discountPercentage">;

export const ProductPrice = ({
    price,
    discountPercentage = 0,
}: ProductPriceProps) => {
    const hasDiscount = discountPercentage > 0;
    const referencePrice = price + price * (discountPercentage / 100);

    const priceInteger = price.toFixed(2).split(".")[0];
    const priceDecimal = price.toFixed(2).split(".")[1];

    return (
        <div className="flex flex-col gap-1">
            <p className="opacity-50 line-through text-[12px] leading-1">
                S/ {referencePrice.toFixed(2)}
            </p>
            <div className="flex flex-wrap items-baseline gap-x-4">
                <p className="font-semibold">
                    S/ <span className="text-xl">{priceInteger}</span>
                    <span className="text-[12px]">.{priceDecimal}</span>
                </p>
                {hasDiscount && (
                    <p className="text-[12px] text-green-600 font-semibold">
                        -{discountPercentage}%
                    </p>
                )}
            </div>
        </div>
    );
};

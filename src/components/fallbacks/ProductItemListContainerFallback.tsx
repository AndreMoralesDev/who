import { ProductItemSkeleton } from "@/components/loaders/ProductItemSkeleton";

type ProductItemListContainerFallbackProps = {
    limit: number;
};

export const ProductItemListContainerFallback = ({
    limit,
}: ProductItemListContainerFallbackProps) => {
    const itemsCount = [...Array(limit).keys()];
    return (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-2">
            {itemsCount.map((_, index) => (
                <ProductItemSkeleton key={index} />
            ))}
        </section>
    );
};

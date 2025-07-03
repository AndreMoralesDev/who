type ProductItemListContainerFallbackProps = {
    limit: number;
};

export const ProductItemListContainerFallback = ({
    limit,
}: ProductItemListContainerFallbackProps) => {
    const itemsCount = [...Array(limit).keys()];
    return <div>ProductItemListContainerFallback</div>;
};

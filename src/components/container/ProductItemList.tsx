import { ProductItem } from "@/components/pure/ProductItem";

type ProductItemListProps = {
    products: ProductSchema[];
};

export const ProductItemList = ({ products }: ProductItemListProps) => {
    return (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] gap-2">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </section>
    );
};

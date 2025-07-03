import { getProducts } from "@/api/models/products/querys/getProducts";
import { getProductsToProductSchema } from "@/api/models/products/querys/getProductsParsers";
import { ProductItemList } from "@/components/container/ProductItemList";

type ProductItemListContainerProps = {
    limit: number;
    skip: number;
};

export const ProductItemListContainer = async ({
    limit,
    skip,
}: ProductItemListContainerProps) => {
    const productsResponse = await getProducts({ limit, skip });

    if (productsResponse.error) {
        throw new Error("Error al obtener los productos");
    }

    const products = getProductsToProductSchema(productsResponse);

    return <ProductItemList products={products} />;
};

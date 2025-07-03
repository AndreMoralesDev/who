import { getProduct } from "@/api/models/products/querys/getProduct/getProduct";
import { getProductToProductDetailsSchema } from "@/api/models/products/querys/getProduct/getProductParsers";
import { AddToCartButton } from "@/components/pure/AddToCartButton";
import { ProductPrice } from "@/components/pure/ProductPrice";
import { productDetailsSchemaToProductSchema } from "@/utils/productParser";
import Image from "next/image";
import { notFound } from "next/navigation";

type ProductDetailsPageProps = {
    params: Promise<{ id: string }>;
};

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
    const { id } = await params;
    const productResponse = await getProduct({ productId: id });
    const product = getProductToProductDetailsSchema(productResponse);

    if (productResponse.status === 404) return notFound();

    if (productResponse.error || !product) {
        // Loggear el error
        console.error(productResponse);
        return notFound();
    }

    return (
        <div className="p-4 grow flex flex-col gap-6">
            <main className="grid grid-cols-[40%_1fr] gap-4 md:gap-6 max-w-screen-xl mx-auto bg-white shadow-lg p-4 rounded-lg grow">
                <div>
                    <figure>
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <p className="font-semibold uppercase gray-600 text-[12px]">
                            {product.brand}
                        </p>

                        <h1 className="text-xl sm:text-2xl font-semibold">
                            {product.title}
                        </h1>
                    </div>
                    <span className="block w-full h-[1px] bg-gray-300" />
                    <div>
                        <ProductPrice
                            price={product.price}
                            discountPercentage={product.discountPercentage}
                            size="lg"
                        />
                    </div>

                    <AddToCartButton
                        product={productDetailsSchemaToProductSchema(product)}
                    />

                    <span className="block w-full h-[1px] bg-gray-300" />
                    <div className="flex flex-col gap-2">
                        <h2 className="font-semibold text-base">
                            Description:
                        </h2>

                        <p>{product.description}</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProductDetailsPage;

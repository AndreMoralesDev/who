import { ProductPrice } from "@/components/pure/ProductPrice";
import Image from "next/image";
import Link from "next/link";

type ProductItemProps = {
    product: ProductSchema;
};

export const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <article className="bg-white rounded-md shadow-sm p-4 flex flex-col gap-4">
            <Link href={`/products/${product.id}`}>
                <figure className="aspect-square w-full rounded-md overflow-hidden relative group">
                    <Image
                        src={product.thumbnail}
                        alt={product.title}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                    />

                    {product.images.length > 2 && (
                        <Image
                            src={product.images[1]}
                            alt={product.title}
                            width={300}
                            height={300}
                            className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-300 bg-white"
                        />
                    )}
                </figure>
            </Link>

            <div>
                <p className="uppercase text-[10px] font-bold">
                    {product.brand}
                </p>
                <Link href={`/products/${product.id}`} className="line-clamp-2">
                    {product.title}
                </Link>
            </div>

            <div>
                <ProductPrice
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                />
            </div>
        </article>
    );
};
